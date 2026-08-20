export type QuizEvent = {
  event_type: 'quiz_viewed' | 'quiz_started' | 'question_answered' | 'quiz_completed' | 'quiz_restarted';
  question_number?: number;
  correct?: boolean;
  score?: number;
  total_questions?: number;
};

export type QuestionStat = {
  question_number: number;
  answered: number;
  correct: number;
  correct_rate: number;
};

export type QuizStats = {
  visits: number;
  started: number;
  completed: number;
  completion_rate: number;
  average_score: number;
  total_questions: number;
  question_stats: QuestionStat[];
};

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.replace(/\/$/, '');
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const quizId = (import.meta.env.VITE_QUIZ_ID as string | undefined) || 'droit-famille-2026';

export function statsConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

function sessionId() {
  const key = `ajefa_quiz_session_${quizId}`;
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

function eventKey(event: QuizEvent) {
  if (event.event_type === 'question_answered') return `${event.event_type}_${event.question_number}`;
  return event.event_type;
}

export async function recordQuizEvent(event: QuizEvent) {
  if (!statsConfigured()) return;

  // Avoid double-counting lifecycle events on refreshes/re-renders in the same tab.
  const dedupeKey = `ajefa_quiz_event_${quizId}_${eventKey(event)}`;
  if (event.event_type !== 'quiz_restarted' && sessionStorage.getItem(dedupeKey)) return;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/quiz_events`, {
      method: 'POST',
      headers: {
        apikey: supabaseAnonKey!,
        Authorization: `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        quiz_id: quizId,
        session_id: sessionId(),
        event_type: event.event_type,
        question_number: event.question_number ?? null,
        correct: event.correct ?? null,
        score: event.score ?? null,
        total_questions: event.total_questions ?? null,
      }),
    });

    if (response.ok && event.event_type !== 'quiz_restarted') {
      sessionStorage.setItem(dedupeKey, '1');
    }
  } catch {
    // The quiz must remain playable even if statistics are temporarily unavailable.
  }
}

export async function fetchQuizStats(adminCode: string): Promise<QuizStats> {
  if (!statsConfigured()) throw new Error('not_configured');

  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/get_quiz_stats`, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey!,
      Authorization: `Bearer ${supabaseAnonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ p_quiz_id: quizId, p_admin_code: adminCode }),
  });

  if (!response.ok) {
    if (response.status === 400 || response.status === 401 || response.status === 403) {
      throw new Error('invalid_code');
    }
    throw new Error('stats_unavailable');
  }

  return response.json();
}

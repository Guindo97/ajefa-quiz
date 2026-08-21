import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ArrowRight, BarChart3, CheckCircle2, LockKeyhole, RotateCcw, Trophy, X, XCircle } from 'lucide-react';
import { track } from './analytics';
import { fetchQuizStats, QuizStats, recordQuizEvent, statsConfigured } from './stats';

type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
};

const questions: Question[] = [
  {
    question: 'Une personne doit être séparée pendant 6 mois avant de pouvoir demander le divorce au Canada.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Au Canada, le motif de divorce le plus courant est la séparation pendant au moins un an. Une personne peut toutefois commencer certaines démarches de divorce pendant cette période, mais le divorce ne sera généralement accordé qu’après une année de séparation. La loi prévoit aussi d’autres motifs de divorce, comme l’adultère ou la cruauté physique ou mentale.',
  },
  {
    question: 'Un parent peut arrêter de payer la pension alimentaire pour enfants parce qu’il n’a plus de contact avec son enfant.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Le droit de voir son enfant et l’obligation de payer une pension alimentaire sont deux questions différentes. Un parent doit continuer à respecter ses obligations alimentaires, même s’il y a des difficultés concernant les visites.',
  },
  {
    question: 'Les conflits familiaux doivent toujours être réglés devant un juge.',
    answers: ['Vrai', 'Faux'],
    correct: 1,
    explanation:
      'Les conflits familiaux peuvent souvent être réglés autrement que par un juge. Les familles peuvent utiliser des moyens comme la négociation, la médiation ou des ententes écrites pour trouver une solution.',
  },
  {
    question: "En cas de séparation, lequel de ces sujets peut faire l'objet d'une entente entre les parents?",
    answers: ['Le temps parental.', 'Les responsabilités décisionnelles.', 'La pension alimentaire pour enfants.', 'Toutes ces réponses.'],
    correct: 3,
  },
  {
    question: 'Après une séparation, quel est le principal critère pris en compte pour les décisions concernant les enfants?',
    answers: ['Le revenu des parents', "Le souhait de l'enfant", "L'intérêt supérieur de l'enfant", 'Le temps que chaque parent passe avec l’enfant'],
    correct: 2,
    explanation:
      "En Alberta, les décisions concernant les enfants sont prises en fonction de leur intérêt supérieur. Le tribunal peut tenir compte de plusieurs facteurs, notamment les besoins de l'enfant, sa sécurité, ses relations avec ses parents et, selon son âge et sa maturité, de son opinion.",
  },
];

function scoreMessage(score: number) {
  if (score === 5) return 'Excellent ! Vous maîtrisez très bien ces notions de droit de la famille.';
  if (score >= 4) return 'Très bon résultat ! Quelques nuances à retenir.';
  if (score >= 3) return 'Bon résultat. Relisez les explications pour consolider vos connaissances.';
  return 'Continuez à explorer le droit de la famille : chaque explication compte.';
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const current = questions[index];
  const progress = finished ? 100 : ((index + 1) / questions.length) * 100;
  const percentage = useMemo(() => Math.round((score / questions.length) * 100), [score]);

  useEffect(() => {
    track('quiz_viewed');
    void recordQuizEvent({ event_type: 'quiz_viewed' });
  }, []);

  const answer = (answerIndex: number) => {
    if (selected !== null) return;
    if (!started) {
      setStarted(true);
      track('quiz_started');
      void recordQuizEvent({ event_type: 'quiz_started' });
    }
    setSelected(answerIndex);
    const isCorrect = answerIndex === current.correct;
    if (isCorrect) setScore((s) => s + 1);
    track('question_answered', { question_number: index + 1, correct: isCorrect });
    void recordQuizEvent({ event_type: 'question_answered', question_number: index + 1, correct: isCorrect });
  };

  const next = () => {
    if (index === questions.length - 1) {
      setFinished(true);
      const finalPercentage = Math.round((score / questions.length) * 100);
      track('quiz_completed', { score, total_questions: questions.length, percentage: finalPercentage });
      void recordQuizEvent({ event_type: 'quiz_completed', score, total_questions: questions.length });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setStarted(false);
    setFinished(false);
    track('quiz_restarted');
    void recordQuizEvent({ event_type: 'quiz_restarted' });
  };

  return (
    <>
      <button className="stats-trigger" type="button" onClick={() => setShowStats(true)} aria-label="Ouvrir les statistiques">
        <BarChart3 size={18} /> <span>Statistiques</span>
      </button>

      {finished ? (
        <main className="shell">
          <section className="hero compact"><Brand /><div className="hero-copy"><p className="eyebrow">Quiz terminé</p><h1>Votre résultat</h1></div></section>
          <section className="result-card">
            <div className="trophy"><Trophy size={34} /></div>
            <div className="score-big">{score}/{questions.length}</div>
            <div className="percentage">{percentage} %</div>
            <p>{scoreMessage(score)}</p>
            <button className="primary" onClick={restart}><RotateCcw size={18} /> Recommencer le quiz</button>
            <p className="disclaimer">Ce quiz est fourni à des fins d’information générale et ne constitue pas un avis juridique.</p>
          </section>
        </main>
      ) : (
        <main className="shell">
          <section className="hero">
            <Brand />
            <div className="hero-copy"><p className="eyebrow">Quiz juridique AJEFA</p><h1>Quiz sur le droit de la famille</h1><p>5 questions. Choisissez votre réponse, découvrez immédiatement si elle est correcte et consultez l’explication avant de continuer.</p></div>
          </section>

          <section className="progress-wrap" aria-label="Progression du quiz">
            <div><span>Votre progression</span><strong>Question {index + 1} sur {questions.length}</strong></div>
            <div className="score-live">Score : {score}/{questions.length}</div>
            <div className="progress"><div style={{ width: `${progress}%` }} /></div>
          </section>

          <section className="question-card">
            <div className="category">Question {index + 1}</div>
            <h2>{current.question}</h2>
            <div className={`answers ${current.answers.length === 2 ? 'two-answers' : ''}`}>
              {current.answers.map((choice, i) => {
                const isSelected = selected === i;
                const isCorrect = i === current.correct;
                let className = 'answer';
                if (selected !== null && isCorrect) className += ' correct';
                else if (selected !== null && isSelected && !isCorrect) className += ' wrong';
                return (
                  <button key={choice} className={className} onClick={() => answer(i)} disabled={selected !== null}>
                    <span className="letter">{String.fromCharCode(65 + i)}</span><span>{choice}</span>
                    {selected !== null && isCorrect && <CheckCircle2 size={20} />}
                    {selected !== null && isSelected && !isCorrect && <XCircle size={20} />}
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <div className={`feedback ${selected === current.correct ? 'good' : 'bad'}`}>
                <strong>{selected === current.correct ? 'Bonne réponse !' : 'Réponse incorrecte.'}</strong>
                {current.explanation && <><h3>Explication</h3><p>{current.explanation}</p></>}
                {!current.explanation && <p>Bonne réponse : <strong>{current.answers[current.correct]}</strong></p>}
              </div>
            )}
            <div className="actions"><span className="disclaimer-inline">Information générale — pas un avis juridique.</span><button className="primary" onClick={next} disabled={selected === null}>{index === questions.length - 1 ? 'Voir mon résultat' : 'Question suivante'} <ArrowRight size={18} /></button></div>
          </section>
        </main>
      )}

      {showStats && <StatsModal onClose={() => setShowStats(false)} />}
    </>
  );
}

function Brand() {
  return <div className="brand-logo"><img src="/ajefa-logo.png" alt="Association des juristes d’expression française de l’Alberta (AJEFA)" /></div>;
}

function StatsModal({ onClose }: { onClose: () => void }) {
  const [code, setCode] = useState('');
  const [stats, setStats] = useState<QuizStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    if (!statsConfigured()) {
      setError('Les statistiques ne sont pas encore connectées. Configurez Supabase avec le fichier SETUP_SUPABASE.md du projet.');
      return;
    }
    if (!code.trim()) return;
    setLoading(true);
    try {
      const result = await fetchQuizStats(code.trim());
      setStats(result);
      setCode('');
    } catch (err) {
      setError(err instanceof Error && err.message === 'invalid_code' ? 'Code administrateur incorrect.' : 'Impossible de charger les statistiques pour le moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="stats-modal" role="dialog" aria-modal="true" aria-labelledby="stats-title">
        <button type="button" className="close-button" onClick={onClose} aria-label="Fermer"><X size={20} /></button>
        {!stats ? (
          <>
            <div className="modal-icon"><LockKeyhole size={28} /></div>
            <h2 id="stats-title">Statistiques du quiz</h2>
            <p className="modal-subtitle">Cette section est réservée à l’administrateur.</p>
            <form onSubmit={submit} className="admin-form">
              <label htmlFor="admin-code">Code administrateur</label>
              <input id="admin-code" type="password" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Entrez votre code" autoComplete="current-password" />
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="primary" type="submit" disabled={loading || !code.trim()}>{loading ? 'Chargement…' : 'Voir les statistiques'}</button>
            </form>
          </>
        ) : (
          <>
            <div className="stats-heading"><div><p className="eyebrow dark">Tableau de bord</p><h2 id="stats-title">Statistiques du quiz</h2></div><BarChart3 size={28} /></div>
            <div className="metric-grid">
              <Metric label="Ont ouvert le quiz" value={stats.visits} />
              <Metric label="Ont commencé" value={stats.started} />
              <Metric label="Ont terminé" value={stats.completed} />
              <Metric label="Taux de complétion" value={`${stats.completion_rate}%`} />
              <Metric label="Score moyen" value={`${stats.average_score}/${stats.total_questions || 5}`} wide />
            </div>
            <h3 className="question-stats-title">Résultats par question</h3>
            <div className="question-stats">
              {stats.question_stats.map((item) => (
                <div className="question-stat" key={item.question_number}>
                  <div><strong>Question {item.question_number}</strong><span>{item.answered} réponse{item.answered > 1 ? 's' : ''}</span></div>
                  <div className="rate"><strong>{item.correct_rate}%</strong><span>de bonnes réponses</span></div>
                </div>
              ))}
            </div>
            <button type="button" className="secondary" onClick={() => setStats(null)}>Verrouiller les statistiques</button>
          </>
        )}
      </section>
    </div>
  );
}

function Metric({ label, value, wide = false }: { label: string; value: string | number; wide?: boolean }) {
  return <div className={`metric ${wide ? 'wide' : ''}`}><span>{label}</span><strong>{value}</strong></div>;
}

const TOTAL_STARS = 10;
const WORDS_PER_STAR = 10;

type ResultsScreenProps = {
  correctCount: number;
  onRetry: () => void;
  onHome: () => void;
};

function getMessage(stars: number): string {
  if (stars >= TOTAL_STARS) return "Incroyable, tu es un champion de la lecture ! 🏆";
  if (stars >= 7) return "Bravo, c'est excellent ! 🌟";
  if (stars >= 4) return "Beau travail, continue comme ça ! 💪";
  if (stars >= 1) return "Bien joué, tu progresses ! 😊";
  return "C'est un bon début, entraîne-toi encore ! 🙂";
}

export default function ResultsScreen({ correctCount, onRetry, onHome }: ResultsScreenProps) {
  const stars = Math.min(Math.floor(correctCount / WORDS_PER_STAR), TOTAL_STARS);

  return (
    <div className="screen results-screen">
      <h1>Temps écoulé !</h1>

      <p className="results-count">
        Tu as lu <strong>{correctCount}</strong> mot{correctCount > 1 ? "s" : ""} correctement
      </p>

      <div className="stars-row" aria-label={`${stars} étoiles sur ${TOTAL_STARS}`}>
        {Array.from({ length: TOTAL_STARS }, (_, i) => (
          <span key={i} className={`star ${i < stars ? "star-filled" : "star-empty"}`}>
            {i < stars ? "★" : "☆"}
          </span>
        ))}
      </div>

      <p className="results-message">{getMessage(stars)}</p>

      <div className="results-actions">
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          Rejouer
        </button>
        <button type="button" className="btn btn-secondary" onClick={onHome}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}

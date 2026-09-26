type HomeScreenProps = {
  onStart: () => void;
};

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="screen home-screen">
      <div className="mascot" aria-hidden="true">
        📖
      </div>
      <h1>Défi Lecture</h1>
      <p className="instructions">
        Pendant <strong>1 minute</strong>, lis à voix haute chaque mot affiché
        à l'écran.
        <br />
        Un adulte appuie sur le bouton <strong>✓</strong> après chaque mot
        bien lu.
      </p>
      <p className="instructions instructions-secondary">
        Essaie de lire le plus de mots possible pour gagner des étoiles ! ⭐
      </p>
      <button type="button" className="btn btn-primary btn-start" onClick={onStart}>
        Commencer
      </button>
    </div>
  );
}

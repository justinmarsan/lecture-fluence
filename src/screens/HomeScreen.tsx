import { WORD_LISTS } from "../data/wordLists";

type HomeScreenProps = {
  onStart: (levelId: string) => void;
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

      <p className="level-prompt">Choisis ton niveau :</p>
      <div className="level-buttons">
        {WORD_LISTS.map((list) => (
          <button
            key={list.id}
            type="button"
            className="btn btn-level"
            onClick={() => onStart(list.id)}
          >
            <span className="level-icon" aria-hidden="true">
              {list.icon}
            </span>
            <span className="level-name">{list.label}</span>
            <span className="level-desc">{list.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

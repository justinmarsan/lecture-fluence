import { useEffect, useRef, useState } from "react";
import { getWordList, shuffleWords } from "../data/wordLists";

const DURATION_MS = 60_000;
const TICK_MS = 100;

type ExerciseScreenProps = {
  levelId: string;
  onFinish: (correctCount: number) => void;
};

function createWordQueue(words: string[], previousLastWord?: string): string[] {
  const queue = shuffleWords(words);
  // Évite de répéter le même mot juste avant/après une reprise de liste.
  if (previousLastWord && queue[0] === previousLastWord && queue.length > 1) {
    [queue[0], queue[1]] = [queue[1], queue[0]];
  }
  return queue;
}

export default function ExerciseScreen({ levelId, onFinish }: ExerciseScreenProps) {
  const words = getWordList(levelId).words;

  const queueRef = useRef<string[]>(createWordQueue(words));
  const queueIndexRef = useRef(0);
  const [currentWord, setCurrentWord] = useState(queueRef.current[0]);
  const [correctCount, setCorrectCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const correctCountRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const interval = setInterval(() => {
      const start = startTimeRef.current;
      if (start === null) return;

      const elapsed = performance.now() - start;
      const ratio = Math.min(elapsed / DURATION_MS, 1);
      setProgress(ratio);

      if (ratio >= 1 && !finishedRef.current) {
        finishedRef.current = true;
        clearInterval(interval);
        onFinish(correctCountRef.current);
      }
    }, TICK_MS);

    return () => clearInterval(interval);
    // onFinish est stable pour la durée de l'exercice (fourni par le parent).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleValidate = () => {
    if (finishedRef.current) return;

    correctCountRef.current += 1;
    setCorrectCount(correctCountRef.current);

    queueIndexRef.current += 1;
    if (queueIndexRef.current >= queueRef.current.length) {
      const lastWord = queueRef.current[queueRef.current.length - 1];
      queueRef.current = createWordQueue(words, lastWord);
      queueIndexRef.current = 0;
    }
    setCurrentWord(queueRef.current[queueIndexRef.current]);
  };

  return (
    <div className="screen exercise-screen">
      <div className="progress-bar-track" role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar-fill" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="word-display" aria-live="polite">
        {currentWord}
      </div>

      <span className="sr-only">Mots lus correctement : {correctCount}</span>

      <button
        type="button"
        className="btn btn-validate"
        onClick={handleValidate}
        aria-label="Valider le mot lu"
      >
        ✓
      </button>
    </div>
  );
}

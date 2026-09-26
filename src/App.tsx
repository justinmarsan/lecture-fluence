import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import ResultsScreen from "./screens/ResultsScreen";
import "./App.css";

type Screen = "home" | "exercise" | "results";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [correctCount, setCorrectCount] = useState(0);
  const [runId, setRunId] = useState(0);

  const handleStart = () => {
    setRunId((id) => id + 1);
    setScreen("exercise");
  };

  const handleFinish = (count: number) => {
    setCorrectCount(count);
    setScreen("results");
  };

  const handleRetry = () => handleStart();
  const handleHome = () => setScreen("home");

  return (
    <div className="app">
      {screen === "home" && <HomeScreen onStart={handleStart} />}
      {screen === "exercise" && <ExerciseScreen key={runId} onFinish={handleFinish} />}
      {screen === "results" && (
        <ResultsScreen correctCount={correctCount} onRetry={handleRetry} onHome={handleHome} />
      )}
    </div>
  );
}

export default App;

import { useQuiz } from "../context/QuizContex";

function StartScreen() {
  const { numQuestions, start } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your mastery</h3>
      <button className="btn btn-ui" onClick={start}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;

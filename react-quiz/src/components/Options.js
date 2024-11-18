import { useQuiz } from "../context/QuizContex";

function Options() {
  
  const { questions, index , newAnswer, answer } = useQuiz();
  const question = questions[index]
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={newAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;

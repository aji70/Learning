import { useQuiz } from "../context/QuizContex";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index]
  
  return (
    <div>
      <h4>{question.question}</h4>

      <Options />
    </div>
  );
}

export default Question;

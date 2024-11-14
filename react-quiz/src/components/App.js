import { QuizProvider } from "../context/QuizContex";
import AppLayout from "./AppLayout";

function App() {
  return (
    <QuizProvider>
      <AppLayout />
    </QuizProvider>
  );
}

export default App;

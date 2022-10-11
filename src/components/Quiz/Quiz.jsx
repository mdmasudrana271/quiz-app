import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;
  return (
    <div className="my-20 mx-5">
      <h2 className="text-2xl text-cyan-600 font-semibold mb-10">
        Quiz Of {name}
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {questions.map((question) => (
          <Question key={question.id} quest={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

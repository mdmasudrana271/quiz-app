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
        {/* <div className='bg-indigo-200 md:w-3/12 sm:w-full rounded-lg p-5 h-[200px] sticky top-[220px]'>
                    <h1 className='text-3xl font-semibold'>Quiz Summary</h1>
                    <p className='text-lg font-semibold'>Correct Ans : {correct}</p>
                    <p className='text-lg font-semibold'>Wrong Ans : {wrong}</p>
                </div> */}
      </div>
    </div>
  );
};

export default Quiz;

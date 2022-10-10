import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data
    const {name, questions, total} = quiz;
    // console.log(quiz)
    return (
        <div className='my-20'>
            <h2 className='text-2xl text-cyan-600 font-semibold mb-10'>Quiz Of {name}</h2>

            <div>
                {
                    questions.map(question => <Question key={question.id} quest={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;
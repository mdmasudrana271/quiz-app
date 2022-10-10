import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react';
import Option from '../Option/Option'
import { QuizContext } from '../../Layout/Main';

const Question = ({quest}) => {
    const {question, correctAnswer, options,id} = quest
    const [correct,setCorrect] = useContext(QuizContext)
    const handleSelect = opt =>{
        if(opt === correctAnswer){
            toast.success('Correct Answer')
            setCorrect(correct + 1 )
        }
        else{
            toast.error('Wrong Answer')
        }
    }
    // console.log(options)
    return (
        <div className='bg-gray-100 my-5 w-full mx-auto p-5 border-sky-200 rounded-lg '>
                <button onClick={()=> toast.success(correctAnswer) } className='flex justify-start'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <h1 className='text-xl font-semibold text-cyan-500'>{question}</h1>
            <div className='grid md:grid-cols-2'>
                {
                    options.map(opt=> <Option key={id} opt={opt} handleSelect={handleSelect}></Option>)
                }
            </div>


            <ToastContainer
                position="top-center" 
                autoClose={500} 
                hideProgressBar={false} 
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
/>
        </div>
    );
};

export default Question;
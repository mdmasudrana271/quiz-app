import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option'

const Question = ({quest}) => {
    const {question, correctAnswer, options,id} = quest
    const handleSelect = opt =>{
        if(opt === correctAnswer){
            toast.success('Correct Answer')
        }
        else{
            toast.error('Wrong Answer')
        }
    }
    return (
        <div className='bg-gray-100 my-5 w-full mx-auto p-5 border-sky-200 rounded-lg '>
                <button onClick={()=> toast.success(correctAnswer) } className='flex justify-start'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <h1 className='text-xl font-semibold text-cyan-500'>{question}</h1>
            <div  className='grid md:grid-cols-2'>
                {
                    options.map(opt=> <Option key={opt} opt={opt} id={id} handleSelect={handleSelect}></Option>)
                }
            </div>
            
            <ToastContainer position="top-center"  autoClose={500}/>
        </div>
    );
};

export default Question;
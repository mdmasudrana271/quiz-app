import React, { useContext } from 'react';
import { TopicsContext } from '../../Layout/Main';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useContext(TopicsContext)
    console.log(topics)
    return (
        <div className='bg-white'>
            <section className="bg-slate-200 mb-10 w-full">
                <div className="container flex flex-col justify-center bg-slate-50 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Quiz
                            <span className="dark:text-violet-400 mx-3">Did</span>You Know
                            <p className="mt-6 mb-8 text-6xl font-bold sm:mb-12">?</p>
                        </h1>
                        
                        
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1665417341~exp=1665417941~hmac=d30b5cc6c0840a7cded48418abbaadb69eff42ddc0581ba21c5bb6dac4e27dec" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  my-10 mx-10'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic> )
                }
            </div>

           
        </div>
    );
};

export default Home;
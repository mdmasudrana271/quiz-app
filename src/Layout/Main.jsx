import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
export const TopicsContext = createContext([]);
export const QuizContext = createContext([]);
const Main = () => {
  const topics = useLoaderData().data;
  const [correct, setCorrect] = useState(0);
  return (
    <TopicsContext.Provider value={topics}>
      <QuizContext.Provider value={[correct,setCorrect]}>
        <Header></Header>
        <Outlet></Outlet>
      </QuizContext.Provider>
    </TopicsContext.Provider>
  );
};

export default Main;

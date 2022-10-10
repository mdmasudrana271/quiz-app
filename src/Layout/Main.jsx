import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
export const TopicsContext = createContext([]);
export const CorrectContext = createContext([]);
export const WrongContext = createContext([]);
const Main = () => {
  const topics = useLoaderData().data;
  const [correct, setCorrect] = useState(0);
    const [wrong,setWrong] = useState(0)
  return (
    <TopicsContext.Provider value={topics}>
      <CorrectContext.Provider value={[correct, setCorrect]}>
        <WrongContext.Provider value={[wrong,setWrong]}>
          <Header></Header>
          <Outlet></Outlet>
        </WrongContext.Provider>
      </CorrectContext.Provider>
    </TopicsContext.Provider>
  );
};

export default Main;

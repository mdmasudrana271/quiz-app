import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header'
export const TopicsContext = createContext([])
const Main = () => {
    const topics = useLoaderData().data
    return (
        <TopicsContext.Provider value={topics}>
            <Header></Header>
            <Outlet></Outlet>
        </TopicsContext.Provider>
    );
};

export default Main;
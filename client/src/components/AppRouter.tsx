import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {publicRoutes} from "../routes";
import MainPage from "../pages/mainPage";
const AppRouter = () => {
    return (
        <Routes>
            {
            publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path}  element={<Component/>} />)
            }
            <Route path="*" element={<MainPage/>} />

        </Routes>
    );
};

export default AppRouter;
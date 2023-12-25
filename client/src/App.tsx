import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {quizApi} from "./store/api/quiz/quizApi";
function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {/*<ApiProvider api = {quizApi}>*/}
                <Header/>
                <AppRouter/>
                <Footer/>
                {/*</ApiProvider>*/}
            </Provider>
        </BrowserRouter>
    );
}

export default App;

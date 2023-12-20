import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <AppRouter/>
                <Footer/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;

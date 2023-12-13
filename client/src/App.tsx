import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
          <Header/>
        <AppRouter/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;

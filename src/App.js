
import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {




  return (
    <BrowserRouter>
      <div className="app">

        {/* <Header /> */}
        <Routes>

          <Route path='/' element={<Home

          />} />

          <Route path='/quiz' element={<Quiz
          />} />

          <Route path='/result' element={<Result />} />

        </Routes>

      </div>
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default App;

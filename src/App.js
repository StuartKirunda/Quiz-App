import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Quiz_Data } from './Data/Data';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  async function fetchQuestions() {
    // const { data } = await axios.get(url);
    const data = Quiz_Data;
    setQuestions(data);
  }

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./dark_bg.jpg)", backgroundSize: "contain" }}>

        <Header />
        <Routes>

          <Route path='/' element={<Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions} />} />

          <Route path='/quiz' element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions} />} />

          <Route path='/result' element={<Result />} />

        </Routes>

      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

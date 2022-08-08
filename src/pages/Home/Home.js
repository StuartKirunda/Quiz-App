import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    function startQuiz() {
        navigate('/quiz');
    }

    return (
        <div className='home'>
            <Header />
            <div className='start'>

                <button className='startbutton' onClick={startQuiz}>Start Quiz</button>

            </div>
        </div>
    );
}

export default Home;
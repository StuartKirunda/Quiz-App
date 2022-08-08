import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css';

function Result({ score }) {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }

    return (
        <div className='score'>
            <div className='border'>
                <span className='title'>Final Score : {score}</span>
                <div className='homeButton'>
                    <button className='result' onClick={goHome}>Home</button>
                </div>
            </div>

        </div>
    );
}

export default Result;
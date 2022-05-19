import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Questions.css';

function Questions({
    currQues, setCurrQues, questions, options, correct, setScore, score, setQuestions, image
}) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    function handleSelect(i) {
        if (selected === i && selected === correct) {
            return "select";

        } else if (selected === i && selected !== correct) {
            return "wrong";

        } else if (i === correct) {
            return "select";
        }
    }

    function handleCheck(i) {
        setSelected(i);
        if (i === correct) {
            setScore(score + 1);
        }
        setError(false);
    }

    return (
        <div className='question'>
            <h1>Question {currQues + 1}</h1>

            <div className='singleQuestion'>
                <h2>{questions[currQues].question}</h2>

                <div className='image'>
                    <img src={questions[currQues].image} alt="question_image" />
                </div>

                <div className='options'>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options && options.map((i) => (
                        <button
                            onClick={() => handleCheck(i)}
                            className={`singleOption ${selected && handleSelect(i)}`}
                            key={i}
                            disabled={selected}>
                            {i}</button>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Questions;



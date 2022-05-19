import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Questions from '../../components/Questions/Questions';
import "./Quiz.css";

function Quiz({ name, score, questions, setQuestions, setScore }) {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    useEffect(() => {

        setOptions(
            questions &&
            handleShuffle({
                // questions[currQues]?.correct_answer,
                // ...questions[currQues]?.incorrect_answer,
            })
        );

    }, [currQues, questions]);

    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    };

    return (
        <div className='quiz'>
            <span className='subtitle'>Welcome, {name}</span>

            {questions ? (
                <>
                    <div className='quizInfo'>
                        <span>{date}</span>
                        <span>Score : {score}</span>
                    </div>

                    <Questions
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        image={questions[currQues]?.image} />
                </>
            ) : (
                <CircularProgress
                    style={{ margin: 100 }}
                    color="inherit"
                    size={150}
                    thickness={1} />
            )}

        </div>
    );
}

export default Quiz;
import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import questions from '../../Data/data';
import "./Quiz.css";
import { Questions } from '../../components/Questions';
import Result from '../Result/Result';

function Quiz() {


    const [questionList, setQuestionList] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        const questionss = questions.map((question) => ({
            ...question,
            answers: [question.correct_answer, ...question.incorrect_answers].sort(() =>
                Math.random() - 0.5),
        }));
        setQuestionList(questionss);

    }, []);

    // useEffect(() => {
    //     fetch{API_URL}.then((res) => res.json()).then((data) => {
    //         const questions = data.results.map((question) => ({
    //             ...question,
    //             answers: [
    //                 question.correct_answer,
    //                 ...question.incorrect_answers,
    //             ].sort(() => Math.random()-0.5),
    //         }));
    // setQuestion(questions);
    //     });
    // }, []);



    function handleAnswer(answer) {

        if (!showAnswers) {
            //prevent double amswers
            if (answer === questionList[currIndex].correct_answer) {
                setScore(score + 1);
            }
        }
        setShowAnswers(true);
        setShowExplanation(true);


    }

    function nextQuestion() {
        setShowAnswers(false);
        setShowExplanation(false);
        setCurrIndex(currIndex + 1);
    }

    function finishQuiz() {
        setGameEnded(true);
    }

    return (

        questionList.length > 0 ? (
            <>
                {gameEnded ? (
                    <Result score={score} />
                ) : (

                    <Questions data={questionList[currIndex]} handleAnswer={handleAnswer} nextQuestion={nextQuestion} finishQuiz={finishQuiz} currIndex={currIndex} showAnswers={showAnswers} questionList={questionList} showExplanation={showExplanation} />
                )}
            </>
        ) : (
            <Circles color="#00BFFF" height={80} width={80} />
        )
    );

}

export default Quiz;
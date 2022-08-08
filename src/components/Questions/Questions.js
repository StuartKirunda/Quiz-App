import React from 'react';


function Questions({
    nextQuestion,
    finishQuiz,
    currIndex,
    showAnswers,
    questionList,
    showExplanation,
    handleAnswer,
    data: { question, image, correct_answer, answers, explanation } }) {


    return (
        <div className='container'>
            <div className='quesImg'>
                <img className='Img' src={image} alt='questionImage' />
            </div>
            <div className='question'>
                {showExplanation ? explanation : question}
            </div>
            <div className='answers'>
                {answers.map((answer, idx) => {

                    return (

                        <button
                            key={idx}
                            className={showAnswers ? answer === correct_answer ? "answer correct" : "answer wrong" : "answer"}
                            onClick={() => handleAnswer(answer)}>{answer}</button>
                    );
                })}

            </div>
            {showAnswers && (
                currIndex === questionList.length - 1 ? (
                    <button onClick={finishQuiz} className='finishQuiz'>Finish Quiz</button>
                ) : (
                    <button onClick={nextQuestion} className='nextQuestion'>Next Question</button>
                )


            )}
        </div>
    );
}

export default Questions;
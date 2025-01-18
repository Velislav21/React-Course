import { useState, useCallback } from 'react';

import QUESTIONS from '../../questions.js'
import logo from '../../assets/quiz-complete.png'
import QuestionTimer from '../timer/QuestionTimer.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizCompleted = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null) ,[handleSelectAnswer])


    if (quizCompleted) {
        return (
            <div id="summary">
                <img src={logo} alt="" />
                <h2>Quizz Completed</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeOut={handleSkipAnswer} key={activeQuestionIndex}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
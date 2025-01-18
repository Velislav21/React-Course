import { useState } from 'react';

import QUESTIONS from '../../questions.js'
import logo from '../../assets/quiz-complete.png'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizCompleted = activeQuestionIndex === QUESTIONS.length;
    function handleSelectAnswer(answer) {
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer]);
    };

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
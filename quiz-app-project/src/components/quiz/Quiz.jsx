import { useState, useCallback } from 'react';

import QUESTIONS from '../../questions.js'
import logo from '../../assets/quiz-complete.png'
import Question from '../question/Question.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length

    const quizCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback

        (
            function handleSelectAnswer(selectedAnswer) {
                setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

            }, []
        );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])


    if (quizCompleted) {
        return (
            <div id="summary">
                <img src={logo} alt="" />
                <h2>Quizz Completed</h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
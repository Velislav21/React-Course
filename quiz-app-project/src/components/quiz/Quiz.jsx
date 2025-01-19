import { useState, useCallback } from 'react';

import QUESTIONS from '../../questions.js'
import logo from '../../assets/quiz-complete.png'
import Question from '../question/Question.jsx';

export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =
        answerState === '' ? userAnswers.length : userAnswers.length - 1;

    const quizCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

        setTimeout(() => {

            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }

            setTimeout(() => setAnswerState(''), 2000);

        }, 1000)
    }, [activeQuestionIndex]);

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
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                activeQuestionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
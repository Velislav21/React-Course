import { useState, useCallback } from 'react';

import QUESTIONS from '../../questions.js'
import Question from '../question/Question.jsx';
import Summary from '../summary/Summary.jsx';

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
        return <Summary userAnswers={userAnswers}/>
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
import { useRef } from "react";

export default function Answers({ onSelect, answers, selectedAnswer, answerState }) {

    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = ''

                if (answerState === 'answered') {
                    cssClass = 'answered'
                }

                if ((answerState === 'correct' || answer === 'wrong') && isSelected) {
                    cssClass = answerState
                }

                return <li key={answer} className="answer">
                    <button onClick={() => onSelect(answer)} className={cssClass}>{answer}</button>
                </li>
            }
            )}
        </ul>
    )
}
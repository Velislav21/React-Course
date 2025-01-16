
import { useState } from 'react'
import styles from '../accordion-item/accordion-item.module.css'

export default function AccordionItem({ title, content }) {

    const [isSelected, setIsSelected] = useState(false);

    const showContent = () => {
        setIsSelected(prevState => !prevState)
    }

    return (
        <>
            <div className={styles.heading}>
                <h1>{title}</h1>
                <button onClick={showContent}>{isSelected ? '-' : '+'}</button>
            </div>
            <div className={styles.content}>
                <p className={isSelected ? '' : styles.hidden}>{content}</p>
            </div>
        </>

    )
}
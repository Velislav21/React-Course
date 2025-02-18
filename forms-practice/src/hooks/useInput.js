import { useState } from "react";
export default function useInput(defaultValue, validationFn) {

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const isValueValid = validationFn(enteredValue);

    function handleInputChange(event) {
        setEnteredValue(event.target.value)
        setDidEdit(false);
        
    }

    function handleInputBlur() {
        setDidEdit(true)
    }

    return {
        enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !isValueValid
    }
}
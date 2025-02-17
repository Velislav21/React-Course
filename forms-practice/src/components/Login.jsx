import { useState } from "react";
import Input from "./InputField";

export default function Login() {

    const [inputValues, setInputValues] = useState({ email: '', password: '' });
    const [didEdit, setDidEdit] = useState({ email: false, password: false });

    const isEmailInvalid = didEdit.email && !inputValues.email.includes('@');
    const isPasswordInvalid = didEdit.password && inputValues.password.length < 6;

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleInputsChange(identifier, value) {
        setInputValues(prevInputValues => ({
            ...prevInputValues,
            [identifier]: value
        }))
        setDidEdit(prevState => ({
            ...prevState,
            [identifier]: false
        }))
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevState => ({
            ...prevState,
            [identifier]: true
        }))
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={() => handleInputBlur('email')}
                    onChange={(event) => handleInputsChange('email', event.target.value)}
                    value={inputValues.email}
                    error={isEmailInvalid && 'Please enter a valid email'}
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={() => handleInputBlur('password')}
                    onChange={(event) => handleInputsChange('password', event.target.value)}
                    value={inputValues.password}
                    error={isPasswordInvalid && 'Password is shorter than 6 characters'}
                />
                
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}

export default function UserInputs({ onChangeInput, userInput }) {

    return (

        <section id="user-input">

            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
                    />
                </p>

                <p>
                    <label>Annual investment</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(event) => onChangeInput('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Expected return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => onChangeInput('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => onChangeInput('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}
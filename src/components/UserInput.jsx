export default function UserInput({ userInput, onChangeValue }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(event) => onChangeValue("initialInvestment", parseInt(event.target.value))} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => onChangeValue("annualInvestment", parseInt(event.target.value))} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} onChange={(event) => onChangeValue("expectedReturn", parseInt(event.target.value))} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} onChange={(event) => onChangeValue("duration", parseInt(event.target.value))} required />
                </p>
            </div>
        </section>
    )
}
import React, { useState } from 'react';
import './TipCalculator.css';

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(10);
    const [splitCount, setSplitCount] = useState(1);
    const [tipAmount, setTipAmount] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function handleCalculteTip() {
        if (!billAmount || billAmount <= 0 || !tipAmount || tipAmount <= 0) {
            setErrorMessage("Please enter valid values for Bill amount & Tip Percentage");
        }

        const bill = parseFloat(billAmount);
        const tip = bill * tipPercentage / 100;
        const totalAmount = bill + tip;
        const tipperperson = tip / splitCount;
        const totlaAmountperperson = totalAmount / splitCount;

        setTipAmount({
            totalAmount : totalAmount.toFixed(2),
            tipPerPerson : tipperperson.toFixed(2),
            totalPerPerson : totlaAmountperperson.toFixed(2)
        });
    }
    return (
        <div className='tip-calculator'>
            <h1>Tip Calculator</h1>
            <div className="input-container">
                <label>Bill Amount:</label>
                <input type="number" value={billAmount} onChange={(event) => setBillAmount(event.target.value)} />
            </div>
            <div className="input-container">
                <label>Tip Percentage:</label>
                <input type="number" value={tipPercentage} onChange={(event) => setTipPercentage(event.target.value)} />
            </div>
            <div className="input-container">
                <label>Number Of People:</label>
                <input type="number" value={splitCount} onChange={(event) => setSplitCount(event.target.value)} />
            </div>
            <button onClick={handleCalculteTip}>Calcuate Tip</button>

            {errorMessage ? <p className='error-message'>{errorMessage}</p> : null}

            {tipAmount ? (
                <div className="tip-result-container">
                    <p>Total Amount : {tipAmount.totalAmount}</p>
                    <p>Tip Per Person : {tipAmount.tipPerPerson}</p>
                    <p>Total Amount Per Person: {tipAmount.totalPerPerson}</p>
                </div>
            ) : null}
        </div>
    )
}

export default TipCalculator

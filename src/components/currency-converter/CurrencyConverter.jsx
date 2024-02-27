import React, { useEffect, useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [convertedamount, convertedsetAmount] = useState();
    const [fromCurrency, setfromCurrency] = useState('USD');
    const [toCurrency, settoCurrency] = useState('INR');

    function handleFromCurrencyConverter(event) {
        setfromCurrency(event.target.value)
    }
    function handleToCurrencyConverter(event) {
        settoCurrency(event.target.value)
    }

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    async function fetchExchangeRate() {
        const apiResponse = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`, { method: 'GET' });
        const result = await apiResponse.json();
        const calculatedRate = result?.rates[toCurrency];
        convertedsetAmount((amount * calculatedRate).toFixed(2));
    }

    useEffect(() => {
        fetchExchangeRate();
    },[fromCurrency, toCurrency,amount])


    return (
        <div className='currency-converter'>
            <h1>Currency Converter</h1>
            <div className="input-container">
                <input type="number" value={amount} onChange={handleAmountChange} placeholder='Enter Amount' />
                <select value={fromCurrency} onChange={handleFromCurrencyConverter}>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <p>TO</p>
            <div className="input-container">
                <input type="number" value={convertedamount} readOnly />
                <select value={toCurrency} onChange={handleToCurrencyConverter}>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        </div>
    )
}

export default CurrencyConverter

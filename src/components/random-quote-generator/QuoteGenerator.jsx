import React, { useEffect, useState } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {

    const [quote, setQuote] = useState(null);

    async function fetchQuote() {
        try {
            const apiResponse = await fetch('https://api.quotable.io/quotes/random', {
                method: 'GET',
            });
            const result = await apiResponse.json();

            if (result && result.length > 0) {
                setQuote(result[0]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       fetchQuote();
    }, [])

    function handleRefresh() {
        fetchQuote();
    }
    return (
        <div className='random-quote-generator'>
            <h1>Random Quote Generator</h1>
            <div className="quote-wrapper">
                <p>{quote?.author}</p>
                <p>{`"${quote?.content}"`}</p>
            </div>
            <button className='refreshBtn' onClick={handleRefresh}>Refresh</button>
        </div>
    )
}

export default QuoteGenerator

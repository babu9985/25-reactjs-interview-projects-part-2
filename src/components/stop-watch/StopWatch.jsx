import React, { useEffect, useRef, useState } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const initialState = 70;
    const [initialTime, setInitialTime] = useState(initialState);
    const [isRunning, setIsRunning] = useState(false);
    const minutes = Math.floor(initialTime / 60);
    const seconds = initialTime % 60;
    const [btnDisabled, setbtnDisabled] = useState(false);

    const intervalReference = useRef();

    useEffect(() => {
        if (isRunning) {
            setbtnDisabled(true)
            intervalReference.current = setInterval(() => {
                setInitialTime((prevTime) => {
                    if (prevTime === 0) {
                        clearInterval(intervalReference.current);
                        setIsRunning(false);
                        return 0;
                    }

                    return prevTime - 1
                })
            }, 1000)
        }else{
            clearInterval(intervalReference.current);
        }
    }, [isRunning])

    function handleStart() {
        setIsRunning(true);
    }

    function handlePauseAndResume() {
       setIsRunning((prevIsRunning) => !prevIsRunning)
    }

    function handleReset() {
        clearInterval(intervalReference.current);
        setIsRunning(false);
        setInitialTime(initialState);
        setbtnDisabled(false);
    }

    return (
        <div className='timer'>
            <h1>CountDown Timer</h1>
            <p>{String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}</p>
            <div className="timer-btns">
                <button disabled={!btnDisabled} onClick={() => handlePauseAndResume()}>{btnDisabled ? "Pause" : "Resume"}</button>
                <button onClick={() => handleReset()}>Reset</button>
                <button onClick={() => handleStart()}>Start</button>
            </div>
        </div>
    )
}

export default StopWatch

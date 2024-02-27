import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
    const [activeStep, setActiveStep] = useState(0);

    function handlePrevStep(){
        setActiveStep((prevStep)=> prevStep-1);
    }
    function handleNextStep(){
        setActiveStep((prevStep)=> prevStep+1);
    }

    function calculateCurrentWidth(){
        return `${(100 / steps.length - 1) * activeStep}%`;
    }
    return (
        <div className='progressbar-container'>
            <h1>Step Progress Bar</h1>
            <div className="steps">
                {steps && steps.length > 0 ? steps.map((step,index) => {
                  return <div key={index}  className={`step ${index <= activeStep ? 'active' : ''}`}>{step}</div>
                }) : null}
            </div>
            <div className="step-buttons-wrapper">
                <button disabled={activeStep === 0} onClick={handlePrevStep}>Prev Step</button>
                <button disabled={activeStep === steps.length -1} onClick={handleNextStep}>Next step</button>
            </div>
        </div>
    )
}

export default ProgressBar

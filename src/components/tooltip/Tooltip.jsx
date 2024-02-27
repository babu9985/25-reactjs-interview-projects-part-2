import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ content, delay }) => {
    let timeout;
    const [isvisible, setIsVisible] = useState(false);
    function handleShowTooltip() {
        timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay)
    }

    function handleHideTooltip() {
        clearTimeout(timeout);
        setIsVisible(false);
    }

    return (
        <div className='tooltip-container' onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip}>
            Tooltip{isvisible ? <div className="tooltip">{content}</div> : ''}
        </div>
    )
}

export default Tooltip

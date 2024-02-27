import React from 'react';
import './Tooltip.css';
import Tooltip from './Tooltip';

const TooltipTest = () => {
  return (
    <div>
      <h1>Tooltip</h1>
      <Tooltip delay={300} content={"Tooltip Content"}></Tooltip>
    </div>
  )
}

export default TooltipTest

import React, { useEffect, useState } from 'react';
import './DigitalClock.css';
import moment from 'moment';

const DigitalClock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      setInterval(() => {
            setDateTime(new Date());
        }, 1000)
        // return()=>{
        //     clearInterval(interValId)
        // };
    }, []);

    return (
        <div className='digitalClock'>
            <h1>Digital Clock</h1>
            <div className="time">
                {/* <span>{dateTime.getHours().toString().padStart(2,'0')}</span>:
                <span>{dateTime.getMinutes().toString().padStart(2,'0')}</span>:
                <span>{dateTime.getSeconds().toString().padStart(2,'0')}</span> */}
                <span>{moment(dateTime).format('hh:mm:ss A')}</span>
            </div>
            <div className="date">
                {
                    moment(dateTime).format('dddd MMMM D YYYY')
                }
                {/* {dateTime.toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })} */}
            </div>
        </div>
    )
}

export default DigitalClock

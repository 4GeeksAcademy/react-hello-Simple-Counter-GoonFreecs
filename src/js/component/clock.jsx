import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client'


const SimpleClock = (props) => {
    return (
        <div className="Clock">
            <div className="icono"><i className="fa-solid fa-clock"></i></div>
            <div className="Day">{props.numberDay % 10}</div>
            <div className="Hour2">{props.numberHour2 %10}</div>
            <div className="Hour">{props.numberHour %10}</div>
            <div className="Minute2">{props.numberMinute2 %10}</div>
            <div className="Minute">{props.numberMinute %10}</div>
            <div className="Second2">{props.numberSecond2 %10}</div>
            <div className="Second">{props.numberSecond %10}</div>
        </div>
    )
}

SimpleClock.PropTypes = {
    numberDay: PropTypes.number,
    numberHour2: PropTypes.number,
    numberHour: PropTypes.number,
    numberMinute2: PropTypes.number,
    numberMinute: PropTypes.number,
    numberSecond2: PropTypes.number,
    numberSecond: PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const Day = Math.floor(counter/1000000);
    const Hour2 = Math.floor(counter/100000);
    const Hour = Math.floor(counter/10000);
    const Minute2 = Math.floor(counter/1000);
    const Minute = Math.floor(counter/100);
    const Second2 = Math.floor(counter/10);
    const Second = Math.floor(counter/1);

    counter++;
    ReactDOM.render(
    <SimpleClock numberSecond={Second} numberSecond2={Second2} numberMinute={Minute} numberMinute2={Minute2} numberHour={Hour} numberHour2={Hour2} numberDay={Day}  />,
    document.querySelector('#app')
);
},1000);

export default SimpleClock;
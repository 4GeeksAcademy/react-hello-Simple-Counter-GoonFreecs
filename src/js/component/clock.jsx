import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/client'; 

const SimpleClock = (props) => {
    return (
        <div className="Clock">
            <div className="icono"><i className="fa-solid fa-clock"></i></div>
            <div className="Day">{props.numberDay}</div>
            <div className="Hour2">{props.numberHour2}</div>
            <div className="Hour">{props.numberHour}</div>
            <div className="Minute2">{props.numberMinute2}</div>
            <div className="Minute">{props.numberMinute}</div>
            <div className="Second2">{props.numberSecond2}</div>
            <div className="Second">{props.numberSecond}</div>
        </div>
    );
};

SimpleClock.propTypes = {
    numberDay: PropTypes.number,
    numberHour2: PropTypes.number,
    numberHour: PropTypes.number,
    numberMinute2: PropTypes.number,
    numberMinute: PropTypes.number,
    numberSecond2: PropTypes.number,
    numberSecond: PropTypes.number,
};

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app')); 

setInterval(() => {
    const Day = Math.floor(counter / 86400); // Segundos en un día
    const Hour = Math.floor((counter % 86400) / 3600); // Segundos en una hora
    const Hour2 = Math.floor(Hour / 10);
    const Minute = Math.floor((counter % 3600) / 60); // Segundos en un minuto
    const Minute2 = Math.floor(Minute / 10);
    const Second = counter % 60; // Segundos en un minuto
    const Second2 = Math.floor(Second / 10);

    counter++;

    root.render(
        <SimpleClock 
            numberDay={Day}
            numberHour2={Hour2}
            numberHour={Hour % 10} // Unidades de horas
            numberMinute2={Minute2}
            numberMinute={Minute % 10} // Unidades de minutos
            numberSecond2={Second2}
            numberSecond={Second % 10} // Unidades de segundos
        />
    );
}, 1000);

export default SimpleClock;
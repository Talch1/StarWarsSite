import React from 'react';
import './error.css';
import icon from './death-star.png';

const ErrorIcon = () => {
    return (
        <div className='errIndicator'>
            <img src={icon} alt="errorIcon" className='errorIcon' />
            <span className='goldWorlds'>Somsing was wrong!!!</span>
        </div>
    )
}
export default ErrorIcon

import React, { useEffect } from 'react';
import './CursorAnimation.css';
import { animateCircles } from './CursorAnimation.js';

const CursorAnimation = () => {
    return (
        <div>
            {animateCircles()}
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
};


export default CursorAnimation;

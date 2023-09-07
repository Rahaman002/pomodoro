"use client"
import React, { useState, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Timer({ isTimerRunning, toggleTimer }) {
  const timerRef = useRef();

  return (
    <div>
      <div>
        <CountdownCircleTimer
          key={isTimerRunning}
          isPlaying={isTimerRunning}
          duration={7}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => toggleTimer(false)}
        >
          {({ remainingTime }) => (
            <div>
              <div>
                {Math.floor(remainingTime / 60)}:{remainingTime % 60}
              </div>
              <button
                onClick={() => toggleTimer(!isTimerRunning)}
              >
                {isTimerRunning ? 'Pause' : 'Start'}
              </button>
            </div>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Timer;

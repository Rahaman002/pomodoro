"use client"
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion ,useAnimation} from 'framer-motion';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let intervalId;

    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);

      // You can customize the animation here
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 },
      });
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft, controls]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-430px] relative">
      <div className="w-4/4 p-[20px]">
        <CircularProgressbar
          value={((1500 - timeLeft) / 1500) * 100}
          text={`${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: `#4CAF50`,
            textColor: `#4CAF50`,
          })}
        />
        <motion.button
          onClick={toggleTimer}
          whileTap={{ scale: 0.95 }}
          className=" text-white font-semibold py-2 my-[50px] px-4 rounded-full focus:outline-none focus:shadow-outline"
          style={{
            position: 'absolute',
            top: '50%',
            left: '41%',
          }}
        >
          {isActive ? 'Pause' : 'Start'}
        </motion.button>
      </div>
    </div>
  );
};

export default Timer;

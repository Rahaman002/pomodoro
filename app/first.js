// First.js
"use client"
import React, { useState, useEffect } from 'react';
import Timer from './timer';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Setting from './setting';

function First() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [pomodoro, setPomo] = useState(25);
  const [sb, setSb] = useState(5);
  const [lb, setLb] = useState(15);
  const [color, setColor] = useState('#f87070');
  const [font, setFont] = useState('Open Sans');

  // Define the timeLeft state variable
  const [timeLeft, setTimeLeft] = useState(pomodoro * 60); // Initialize with the Pomodoro duration

  const tabs = ["Pomodoro", "Short break", "Long break"];
  const tabDurations = [pomodoro, sb, lb];

  useEffect(() => {
    console.log(font);
  }, [font]);

  useEffect(() => {
    if (isTimerRunning && timeLeft === 0 && selectedTab === 0) {
      setSelectedTab(1); // Switch to Short Break tab
      setIsTimerRunning(false); // Stop the timer
      toast.info('Pomodoro completed! Starting Short Break', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [isTimerRunning, timeLeft, selectedTab]);

  const toggleTimer = (isRunning) => {
    setIsTimerRunning(isRunning);
  };

  // Define the handleTabClick function
  const handleTabClick = (index) => {
    if (!isTimerRunning) {
      setSelectedTab(index);
    } else {
      toast.warn('A timer is running. Pause it to change mode', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[50px]">
        <img
          src="https://mcornale-pomodoro-app.netlify.app/static/media/logo.7479961e8a1563f1f8124a7cff89bef2.svg"
          alt="Logo"
        />
      </div>
      <nav>
        <div className="w-fit  border-white mt-[130px]">
          <ul className="relative flex list-none flex-wrap rounded-3xl bg-[#161932] p-1 " data-tabs="tabs" role="list">
            {tabs.map((tab, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, backgroundColor: selectedTab === index ? color : '' }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "linear", duration: 0.2 }}
                className={`z-30 flex-auto rounded-3xl px-10 py-[10px]  text-center ${selectedTab === index ? [{color}] : ''}`}
              >
                <a
                  className={` text-white text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out ${selectedTab === index ? 'text-white' : ''}`}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={selectedTab === index}
                >
                  <span className={`ml-1 font-${font}`} >{tab}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="p-4 mt-[60px]">
        {tabs[selectedTab] === "Pomodoro" && (
          <div>
            <Timer
              isTimerRunning={isTimerRunning}
              toggleTimer={toggleTimer}
              time={tabDurations[selectedTab]}
              color={color}
            />
          </div>
        )}
        {tabs[selectedTab] === "Short break" && (
          <div>
            <Timer
              isTimerRunning={isTimerRunning}
              toggleTimer={toggleTimer}
              time={tabDurations[selectedTab]}
              color={color}
            />
          </div>
        )}
        {tabs[selectedTab] === "Long break" && (
          <div>
            <Timer
              isTimerRunning={isTimerRunning}
              toggleTimer={toggleTimer}
              time={tabDurations[selectedTab]}
              color={color}
            />
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <Setting
        pomodoro={pomodoro}
        setPomo={setPomo}
        sb={sb}
        setSb={setSb}
        lb={lb}
        setLb={setLb}
        setColor={setColor}
        setFont={setFont}
        font={font}
      />
    </div>
  );
}

export default First;

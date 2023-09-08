"use client"
import React, { useState } from 'react';
import Timer from './timer';
import {motion} from 'framer-motion';

function First() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const tabs = ["pomodoro", "Short break", "Long break"];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const toggleTimer = (isRunning) => {
    setIsTimerRunning(isRunning);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-90px]">
      <div className="mb-20">
        <img
          src="https://mcornale-pomodoro-app.netlify.app/static/media/logo.7479961e8a1563f1f8124a7cff89bef2.svg"
          alt="Logo"
        />
      </div>
      <nav>
        <div className="w-fit py-80 border-white">
          <ul className="relative flex list-none flex-wrap rounded-3xl bg-[#161932] p-1 " data-tabs="tabs" role="list">
            {tabs.map((tab, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, backgroundColor: selectedTab === index ? '#f87070' : '' }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ ease: "linear", duration: 0.2 }}
                className={`z-30 flex-auto rounded-3xl px-10 py-[10px]  text-center ${selectedTab === index ? '[#f87070]' : ''}`}
              >
                <a
                  className={` text-white text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out ${selectedTab === index ? 'text-white' : ''}`}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={selectedTab === index}
                >
                  <span className="ml-1">{tab}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="p-4">
        {tabs[selectedTab] === "pomodoro" && (
          <div>
            <Timer isTimerRunning={isTimerRunning} toggleTimer={toggleTimer} />
          </div>
        )}
        {tabs[selectedTab] === "Short break" && (
          <div>
            <Timer isTimerRunning={isTimerRunning} toggleTimer={toggleTimer} />
          </div>
        )}
        {tabs[selectedTab] === "Long break" && (
          <div>
            <Timer isTimerRunning={isTimerRunning} toggleTimer={toggleTimer} />
          </div>
        )}
      </div>
    </div>
  );
}

export default First;

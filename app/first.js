"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function First() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <div className='flex justify-center items-center h-15vh'>
        <img
          src="https://mcornale-pomodoro-app.netlify.app/static/media/logo.7479961e8a1563f1f8124a7cff89bef2.svg"
          alt="Logo"
          className='my-20'
        />
      </div>
      <nav>
        <div className="flex justify-center border-2 border-color-white w-fit px-40">
          <div className="flex space-x-4">
            {tabs.map((tab, index) => (
              <motion.div
                key={index}
                className={`tab ${selectedTab === index ? 'active-tab' : ''}`}
                onClick={() => handleTabClick(index)}
                whileHover={{ scale: 1.1 }}
              >
                {tab}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="content">
          {/* Content for the selected tab goes here */}
          {`Content for Tab ${selectedTab + 1}`}
        </div>
      </nav>
    </div>
  );
}

export default First;

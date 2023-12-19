"use client"

// pages/index.js
// pages/index.js
import React, { useState, useRef } from 'react';
import DarkModeToggle from "./components/darkmode";
import RedButton from "./components/buzzer";
import SoundDropdown from "./components/sound-list";

const MyPage = () => {
  const [selectedSound, setSelectedSound] = useState('Cat-Meow.mp3');
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    // Play the selected sound
    playSound(selectedSound);
  };

  const handleSoundChange = (selected) => {
    setSelectedSound(selected);
  };

  const playSound = (sound) => {
    if (audioRef.current) {
      // Reset the audio to the beginning and play
      audioRef.current.currentTime = 0;
      audioRef.current.src = `sounds/${sound}`;
      audioRef.current.play();
    }
  };

  return (
    <div>
      <div className="text-center text-8xl font-bold my-8">
        <h1>2023 Buzzer</h1>
      </div>
      <div className="text-center text-5xl font-bold my-8">
        <SoundDropdown selectedSound={selectedSound} onChange={handleSoundChange} />
      </div>
      <RedButton imageUrl="/red-button.png" onClick={handleButtonClick} />
      <div className="text-center text-2xl font-bold my-8">
        <DarkModeToggle />
      </div>
      <audio ref={audioRef}></audio>
    </div>
  );
};

export default MyPage;


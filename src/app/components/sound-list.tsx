// components/SoundDropdown.js
"use client"
// components/SoundDropdown.js
"use client"

import { SoundDropdownProps } from "./definitions";

const SoundDropdown: React.FC<SoundDropdownProps>= ({ selectedSound, onChange }) => {
  const soundOptions = [
    { value: 'Cat-Meow.mp3', label: 'Cat Meow' },
    { value: 'Cow-Moo-Sound-Effect.mp3', label: 'Cow Moo' },
    { value: 'Hey-Google.mp3', label: 'Hey Google' },
    { value: 'Jazzy-Song.mp3', label: "What's the name of that song..." },
    { value: 'Hi-Everyone.mp3', label: "Hello Amy!" },
    { value: 'Shut-Up.mp3', label: "Shut up and..." },
    { value: 'Rock-DJs.mp3', label: "Rock DJs" },
    // Add more sound options as needed
  ];

  return (
    <div>
      <label htmlFor="sound" className="block text-black-700">Select Buzzer:</label>
      <select
        id="sound"
        value={selectedSound}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500"
      >
        {soundOptions.map((option) => (
          <option key={option.value} value={option.value} className="text-center">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SoundDropdown;

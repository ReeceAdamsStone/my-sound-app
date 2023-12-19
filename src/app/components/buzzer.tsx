// components/RedButton.js
import { RedButtonProps } from './definitions';
import Image from 'next/image';
import { useState } from 'react';

const RedButton: React.FC<RedButtonProps> = ({ imageUrl, onClick }) => {
  const [isPressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    if (onClick) {
      onClick();
    }

    // Reset the pressed state after a short delay
    setTimeout(() => {
      setPressed(false);
    }, 300);
  };

  return (
    <div className="flex items-center justify-center">
    <div className={`relative ${isPressed ? 'scale-90' : ''}`}>
      <button
        onClick={handleClick}
        className="transition-transform transform duration-500 ease-in-out"
      >
        <Image
          src={imageUrl}
          alt="Red Button"
          width={800}
          height={800}
          priority
        />
      </button>
    </div>
    </div>
  );
};

export default RedButton;

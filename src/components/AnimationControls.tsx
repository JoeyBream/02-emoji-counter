import React from 'react';
import { AnimationStyle } from '../types/animation';
import { getAnimationConfig } from '../utils/animations';

interface AnimationControlsProps {
  currentStyle: AnimationStyle;
  isEnabled: boolean;
  onToggle: () => void;
  onStyleChange: () => void;
}

const AnimationControls: React.FC<AnimationControlsProps> = ({
  currentStyle,
  isEnabled,
  onToggle,
  onStyleChange,
}) => {
  const config = getAnimationConfig(currentStyle);

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          isEnabled
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
        aria-label={isEnabled ? 'Disable animations' : 'Enable animations'}
      >
        {isEnabled ? 'Enabled' : 'Disabled'}
      </button>
      
      <button
        onClick={onStyleChange}
        className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition-all duration-200 flex items-center gap-2"
        aria-label="Change animation style"
      >
        <span>{config.emoji}</span>
        <span>{config.name}</span>
      </button>
      
      <div className="text-sm text-gray-500 hidden sm:block">
        {config.description}
      </div>
    </div>
  );
};

export default AnimationControls;
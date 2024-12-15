import React, { useState, useEffect } from "react";
import { AnimationStyle, Particle } from '../types/animation';
import { generateParticles } from '../utils/animations';
import AnimationControls from './AnimationControls';

const EmojiCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [animationStyle, setAnimationStyle] = useState<AnimationStyle>('burst');
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Check for animation support
    const supportsAnimations = CSS.supports('animation', 'name 1s');
    if (!supportsAnimations) {
      setError('Your browser does not support animations');
      setIsAnimationEnabled(false);
    }
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    
    if (!isAnimationEnabled) return;

    try {
      const newParticles = generateParticles(animationStyle, windowSize);
      setParticles(prev => [...prev, ...newParticles]);

      // Cleanup particles after animation
      newParticles.forEach((particle) => {
        setTimeout(() => {
          setParticles(prev =>
            prev.filter(p => p.id !== particle.id)
          );
        }, particle.duration + particle.delay);
      });
    } catch (err) {
      setError('Failed to generate animation');
      console.error(err);
    }
  };

  const toggleAnimation = () => {
    setIsAnimationEnabled(!isAnimationEnabled);
    if (!isAnimationEnabled) {
      setError(null); // Clear any previous errors when enabling
    }
  };

  const cycleAnimationStyle = () => {
    const styles: AnimationStyle[] = ['burst', 'spiral', 'wave', 'pooSpiral'];
    const currentIndex = styles.indexOf(animationStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    setAnimationStyle(styles[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <AnimationControls
        currentStyle={animationStyle}
        isEnabled={isAnimationEnabled}
        onToggle={toggleAnimation}
        onStyleChange={cycleAnimationStyle}
      />

      {error && (
        <div className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      <button
        onClick={handleClick}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Count: {count}
      </button>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute left-1/2 top-1/2 animate-emoji"
            style={{
              '--emoji-x': `${particle.x}px`,
              '--emoji-y': `${particle.y}px`,
              '--emoji-rotation': `${particle.rotation}deg`,
              '--emoji-scale': particle.scale,
              '--emoji-duration': `${particle.duration}ms`,
              '--emoji-delay': `${particle.delay}ms`,
              fontSize: '2rem',
              animationDelay: `${particle.delay}ms`,
            } as React.CSSProperties}
          >
            {particle.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmojiCounter;
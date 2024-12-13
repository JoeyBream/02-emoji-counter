import { AnimationStyle, AnimationConfig, Particle } from '../types/animation';

const ANIMATION_CONFIGS: Record<AnimationStyle, AnimationConfig> = {
  burst: {
    name: 'Burst',
    description: 'Particles explode outward in all directions',
    emoji: '🎉',
    particleCount: 8,
    duration: [2000, 3000],
  },
  spiral: {
    name: 'Spiral',
    description: 'Particles spiral outward in a mesmerizing pattern',
    emoji: '✨',
    particleCount: 12,
    duration: [2500, 3500],
  },
  wave: {
    name: 'Wave',
    description: 'Particles flow in a gentle wave pattern',
    emoji: '🌊',
    particleCount: 10,
    duration: [2000, 3000],
  },
};

export const getAnimationConfig = (style: AnimationStyle): AnimationConfig => {
  return ANIMATION_CONFIGS[style];
};

export const generateParticles = (
  style: AnimationStyle,
  windowSize: { width: number; height: number }
): Particle[] => {
  const config = ANIMATION_CONFIGS[style];
  const particles: Particle[] = [];

  for (let i = 0; i < config.particleCount; i++) {
    const baseAngle = (i / config.particleCount) * Math.PI * 2;
    
    let x: number;
    let y: number;
    let rotation: number;
    let delay: number;

    switch (style) {
      case 'spiral':
        const radius = Math.min(windowSize.width, windowSize.height) * 0.4;
        x = Math.cos(baseAngle) * radius;
        y = Math.sin(baseAngle) * radius;
        rotation = baseAngle * (180 / Math.PI) + 360;
        delay = (i / config.particleCount) * 200;
        break;

      case 'wave':
        x = (i / config.particleCount) * windowSize.width - windowSize.width / 2;
        y = Math.sin(baseAngle) * (windowSize.height * 0.3);
        rotation = Math.sin(baseAngle) * 30;
        delay = (i / config.particleCount) * 100;
        break;

      default: // burst
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * Math.min(windowSize.width, windowSize.height) * 0.4;
        x = Math.cos(angle) * distance;
        y = Math.sin(angle) * distance;
        rotation = Math.random() * 720 - 360;
        delay = Math.random() * 100;
    }

    particles.push({
      id: Date.now() + i,
      emoji: config.emoji,
      x,
      y,
      rotation,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * (config.duration[1] - config.duration[0]) + config.duration[0],
      delay,
    });
  }

  return particles;
};
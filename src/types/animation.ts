export type AnimationStyle = 'burst' | 'spiral' | 'wave';

export interface AnimationConfig {
  name: string;
  description: string;
  emoji: string;
  particleCount: number;
  duration: [number, number]; // [min, max] in ms
}

export interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
  delay: number;
}
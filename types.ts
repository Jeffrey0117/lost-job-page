export interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

export interface FunStatProps {
  label: string;
  value: string | number;
  subtext?: string;
  rotation?: string;
  color?: string;
}
import { BMICellType } from '../@types/BMI';

const bmiCells: BMICellType[] = [
  {
    title: 'Magro',
    color: '#6b7280',
    thumb: 'down',
    range: {
      min: 0,
      max: 18.49,
    },
  },
  {
    title: 'Saudável',
    color: '#22c55e',
    thumb: 'up',
    range: {
      min: 18.5,
      max: 24.99,
    },
  },
  {
    title: 'Sobrepeso',
    color: '#E1A816',
    thumb: 'down',
    range: {
      min: 25,
      max: 29.99,
    },
  },
  {
    title: 'Obeso',
    color: '#ef4444',
    thumb: 'down',
    range: {
      min: 30,
      max: Infinity,
    },
  },
];

export { bmiCells };

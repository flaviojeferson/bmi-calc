type BMICellType = {
  title: string;
  color: string;
  thumb: 'up' | 'down';
  range: {
    min: number;
    max: number;
  };
};

export type { BMICellType };

import { useReducer } from 'react';
import { BMICellType } from '../@types/BMI';

type BmiStateManagerType =
  | {
      user: {
        heightInCentimeters: number;
        weightInKilos: number;
        bmiWithMeasureUnit: string;
      };
      bmiCell: BMICellType;
    }
  | undefined;

type BmiStateManagerActions = {
  type: 'set';
  payload: BmiStateManagerType;
};

const initialBmiStateManager = undefined;

const bmiStateManagerReducer: React.Reducer<
  BmiStateManagerType,
  BmiStateManagerActions
> = (_, action) => {
  if (action.type === 'set') {
    return action.payload;
  } else {
    return initialBmiStateManager;
  }
};

function useBmiStateManager() {
  return useReducer(bmiStateManagerReducer, initialBmiStateManager);
}

export { useBmiStateManager };
export type { BmiStateManagerType, BmiStateManagerActions };

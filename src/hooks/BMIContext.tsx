import { ReactNode, createContext } from 'react';
import {
  BmiStateManagerActions,
  BmiStateManagerType,
  useBmiStateManager,
} from './useBmiStateManager';

type BMIContextType = {
  bmiState: BmiStateManagerType;
  bmiStateDispatch: React.Dispatch<BmiStateManagerActions>;
};

const BMIContext = createContext({} as BMIContextType);

const BMIContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bmiState, bmiStateDispatch] = useBmiStateManager();

  return (
    <BMIContext.Provider value={{ bmiState, bmiStateDispatch }}>
      {children}
    </BMIContext.Provider>
  );
};

export { BMIContext, BMIContextProvider };

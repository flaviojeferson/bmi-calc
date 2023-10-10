import { bmiCells } from '../../constants/bmiCells.ts';
import { BMIContext } from '../../hooks/BMIContext.tsx';
import { BMICell } from './BMICell';
import { BMIGridContainer } from './styles.ts';
import { useContext } from 'react';

type BMIGridType = {
  className?: string;
};

const BMIGrid: React.FC<BMIGridType> = ({ className }) => {
  const { bmiState } = useContext(BMIContext);

  const existsResult = !!bmiState;

  return (
    <BMIGridContainer
      className={`${className} ${existsResult && 'highlighting'}`}
    >
      {!existsResult && (
        <>
          {bmiCells.map((cell) => (
            <BMICell key={cell.title} cell={cell} />
          ))}
        </>
      )}

      {existsResult && (
        <>
          <BMICell cell={bmiState.bmiCell} highlighted />
        </>
      )}
    </BMIGridContainer>
  );
};

export { BMIGrid };

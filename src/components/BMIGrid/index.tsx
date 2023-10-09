import { bmiCells } from '../../constants/bmiCells.ts';
import { BMIContext } from '../../hooks/BMIContext.tsx';
import { BMICell } from './BMICell';
import { BMIGridContainer } from './styles.ts';
import { useContext } from 'react';
import arrowBackSvg from '../../assets/arrow_back.svg';

type BMIGridType = {
  className?: string;
};

const BMIGrid: React.FC<BMIGridType> = ({ className }) => {
  const { bmiState, bmiStateDispatch } = useContext(BMIContext);

  const handleResetBmiState = () => {
    bmiStateDispatch({
      type: 'set',
      payload: undefined,
    });
  };

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
          <BMICell cell={bmiState.bmiCell} hasDescription />
          <button
            className="grid__button--reset"
            title="Refazer cálculo"
            onClick={handleResetBmiState}
          >
            <img src={arrowBackSvg} alt="Refazer" />
          </button>
        </>
      )}
    </BMIGridContainer>
  );
};

export { BMIGrid };

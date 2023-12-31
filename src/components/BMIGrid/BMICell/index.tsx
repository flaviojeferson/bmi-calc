import { BMICellType } from '../../../@types/BMI.ts';
import { BMICellContainer, BMICircle } from './styles.ts';
import thumbUpSvg from '../../../assets/thumb-up.svg';
import thumbDownSvg from '../../../assets/thumb-down.svg';
import { numberFormat } from '../../../utils/numberFormat.ts';
import { BMIContext } from '../../../hooks/BMIContext.tsx';
import { useContext } from 'react';
import arrowBackSvg from '../../../assets/arrow_back.svg';

type BMICellProps = {
  cell: BMICellType;
  highlighted?: boolean;
};

const BMICell: React.FC<BMICellProps> = ({ cell, highlighted }) => {
  const { bmiState, bmiStateDispatch } = useContext(BMIContext);
  const { color, range, thumb, title } = cell;

  const ICON_ALT = thumb === 'up' ? 'Bom' : 'Ruim';
  const ICON_SRC = thumb === 'up' ? thumbUpSvg : thumbDownSvg;

  const handleResetBmiState = () => {
    bmiStateDispatch({
      type: 'set',
      payload: undefined,
    });
  };

  return (
    <BMICellContainer color={color}>
      <BMICircle>
        <img
          src={ICON_SRC}
          alt={ICON_ALT}
          className="thumb"
          width={24}
          height={24}
        />
      </BMICircle>

      <h3>{title}</h3>

      {highlighted && bmiState && (
        <>
          <p>
            Você tem <strong>{bmiState.user.heightInCentimeters}</strong>{' '}
            centímetros de altura e, <br />
            <strong>{bmiState.user.weightInKilos}</strong> quilos de massa
            corpórea.
          </p>

          <p>
            Seu IMC é <strong>{bmiState.user.bmiWithMeasureUnit}</strong>, nesse
            caso, você é considerado{' '}
            <strong>{bmiState.bmiCell.title.toLowerCase()}</strong> pela OMS!
          </p>

          <button
            className="grid__button--reset"
            title="Refazer cálculo"
            onClick={handleResetBmiState}
          >
            <img src={arrowBackSvg} alt="Refazer" />
          </button>
        </>
      )}

      {!highlighted && (
        <p>
          IMC está entre <strong>{numberFormat(range.min)}</strong> e{' '}
          <strong>{numberFormat(range.max)}</strong>
        </p>
      )}
    </BMICellContainer>
  );
};

export { BMICell };

import { BMICellType } from '../../../@types/BMI.ts';
import { BMICellContainer, BMICircle } from './styles.ts';
import thumbUpSvg from '../../../assets/thumb-up.svg';
import thumbDownSvg from '../../../assets/thumb-down.svg';
import { numberFormat } from '../../../utils/numberFormat.ts';

type BMICellProps = {
  cell: BMICellType;
};

const BMICell: React.FC<BMICellProps> = ({ cell }) => {
  const { color, range, thumb, title } = cell;

  const ICON_ALT = thumb === 'up' ? 'Bom' : 'Ruim';
  const ICON_SRC = thumb === 'up' ? thumbUpSvg : thumbDownSvg;

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

      <p>
        IMC está entre <strong>{numberFormat(range.min)}</strong> e{' '}
        <strong>{numberFormat(range.max)}</strong>
      </p>
    </BMICellContainer>
  );
};

export { BMICell };

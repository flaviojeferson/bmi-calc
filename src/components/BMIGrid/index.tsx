import { bmiCells } from '../../constants/bmiCells.ts';
import { BMICell } from './BMICell';
import { BMIGridContainer } from './styles.ts';

type BMIGridType = {
  className?: string;
};

const BMIGrid: React.FC<BMIGridType> = ({ className }) => {
  return (
    <BMIGridContainer className={className}>
      {bmiCells.map((cell) => (
        <BMICell cell={cell} />
      ))}
    </BMIGridContainer>
  );
};

export { BMIGrid };

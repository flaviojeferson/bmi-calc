import { bmiCells } from '../constants/bmiCells';

function getCellByBmi(bmi: number) {
  return bmiCells.find((cell) => bmi < cell.range.max && bmi > cell.range.min);
}

export { getCellByBmi };

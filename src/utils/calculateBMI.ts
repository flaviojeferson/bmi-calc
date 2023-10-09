import { getCellByBmi } from './getCellByBmi';
import { numberFormat } from './numberFormat';

function calculateBMI(heightInCentimeters: number, weightInKilos: number) {
  const heightInMeters = heightInCentimeters / 100;

  const bmi = Math.max(0, weightInKilos / (heightInMeters * heightInMeters));

  const roundedBmi = Number(bmi.toFixed(2));
  const bmiWithMeasureUnit = `${numberFormat(roundedBmi)} kg/m²`;
  const bmiCell = getCellByBmi(roundedBmi);

  return { roundedBmi, bmiWithMeasureUnit, bmiCell };
}

export { calculateBMI };

import { numberFormat } from './numberFormat';

function calculateBMI(heightInCentimeters: number, weightInKilos: number) {
  const heightInMeters = heightInCentimeters / 100;
  const minBmi = 0;
  const maxBmi = 40;

  const bmi = Math.max(
    minBmi,
    Math.min(maxBmi, weightInKilos / (heightInMeters * heightInMeters)),
  );
  const roundedBmi = Number(bmi.toFixed(2));

  const bmiWithMeasureUnit = `${numberFormat(roundedBmi)} kg/m²`;

  return { bmi, roundedBmi, bmiWithMeasureUnit };
}

export { calculateBMI };

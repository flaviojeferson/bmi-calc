import { useRef } from 'react';
import * as S from './styles';
import { calculateBMI } from '../../utils/calculateBMI';

type BMIFormProps = {
  className?: string;
};

const BMIForm: React.FC<BMIFormProps> = ({ className }) => {
  const heightInputRef = useRef<HTMLInputElement>(null);
  const weightInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const heightValueRef = heightInputRef.current?.value;
    const weightValueRef = weightInputRef.current?.value;

    if (heightValueRef && weightValueRef) {
      const heightInCentimeters = Number(heightValueRef);
      const weightInKilos = Number(weightValueRef);
      const { bmiWithMeasureUnit, bmiCell } = calculateBMI(
        heightInCentimeters,
        weightInKilos,
      );
      if (bmiCell) {
        alert(
          `Você possui ${heightInCentimeters} centímetros de altura e ${weightInKilos} quilos de massa corpórea. Seu IMC é de ${bmiWithMeasureUnit} e você está ${bmiCell.title.toLowerCase()}`,
        );
        return;
      }
      alert('Não foi possivel fazer o cálculo do seu IMC.');
      return;
    }
    alert('Preencha todos os campos do formulário.');
  };

  return (
    <S.MainContainer className={className}>
      <h1>Calcule seu IMC</h1>

      <p>
        O <abbr title="Índice de Massa Corporal">IMC</abbr> é uma ferramenta
        usada para avaliar o peso ideal de um indivíduo, além de detectar casos
        de obesidade ou desnutrição em pessoas de diferentes idades.
      </p>

      <S.FormContainer onSubmit={handleSubmit}>
        <div className="form__field">
          <label className="form__label" htmlFor="form__input--height">
            Sua altura em centímetros
          </label>
          <input
            type="number"
            id="form__input--height"
            ref={heightInputRef}
            min={80}
            max={220}
            className="form__input"
            placeholder="Exemplo: 165"
            required
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="form__input--weight">
            Seu peso em quilos
          </label>
          <input
            type="number"
            id="form__input--weight"
            ref={weightInputRef}
            min={10}
            max={150}
            className="form__input"
            placeholder="Exemplo: 65"
            required
          />
        </div>

        <input type="submit" className="form__input--submit" value="CALCULAR" />
      </S.FormContainer>
    </S.MainContainer>
  );
};

export { BMIForm };

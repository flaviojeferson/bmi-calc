import { useContext, useRef } from 'react';
import * as S from './styles';
import { calculateBMI } from '../../utils/calculateBMI';
import { BMIContext } from '../../hooks/BMIContext.tsx';

type BMIFormProps = {
  className?: string;
};

const BMIForm: React.FC<BMIFormProps> = ({ className }) => {
  const { bmiState, bmiStateDispatch } = useContext(BMIContext);
  const heightInputRef = useRef<HTMLInputElement>(null);
  const weightInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const heightValueRef = heightInputRef.current?.value;
    const weightValueRef = weightInputRef.current?.value;

    if (heightValueRef && weightValueRef) {
      const heightInCentimeters = Number(heightValueRef);
      const weightInKilos = Number(weightValueRef);
      const { bmiCell, bmiWithMeasureUnit } = calculateBMI(
        heightInCentimeters,
        weightInKilos,
      );
      if (bmiCell) {
        bmiStateDispatch({
          type: 'set',
          payload: {
            user: {
              heightInCentimeters,
              weightInKilos,
              bmiWithMeasureUnit,
            },
            bmiCell,
          },
        });
        heightInputRef.current.value = '';
        weightInputRef.current.value = '';
        return;
      }
      alert('Não foi possivel fazer o cálculo do seu IMC.');
      return;
    }
    alert('Preencha todos os campos do formulário.');
  };
  const isDisabled = !!bmiState;
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
            disabled={isDisabled}
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
            disabled={isDisabled}
            required
          />
        </div>

        <input
          type="submit"
          className="form__input--submit"
          value="CALCULAR"
          disabled={isDisabled}
        />
      </S.FormContainer>
    </S.MainContainer>
  );
};

export { BMIForm };

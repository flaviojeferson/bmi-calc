import * as S from './styles';

const BMIForm: React.FC = () => {
  return (
    <S.MainContainer>
      <h1>Calcule seu IMC</h1>

      <p>
        O <abbr title="Índice de Massa Corporal">IMC</abbr> é uma ferramenta
        usada para avaliar o peso ideal de um indivíduo, além de detectar casos
        de obesidade ou desnutrição em pessoas de diferentes idades.
      </p>

      <S.FormContainer>
        <div className="form__field">
          <label className="form__label" htmlFor="form__input--height">
            Sua altura em centímetros
          </label>
          <input
            type="number"
            id="form__input--height"
            min={1}
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
            min={1}
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

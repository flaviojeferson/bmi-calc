const BMIForm: React.FC = () => {
  return (
    <>
      <h1>Calcule seu IMC</h1>

      <p>
        O <abbr title="Índice de Massa Corporal">IMC</abbr> é uma ferramenta
        usada para avaliar o peso ideal de um indivíduo, além de detectar casos
        de obesidade ou desnutrição em pessoas de diferentes idades.
      </p>

      <form>
        <div>
          <label htmlFor="user__height">Sua altura em centímetros</label>
          <input
            type="number"
            id="user__height"
            min={1}
            placeholder="Exemplo: 165"
            required
          />
        </div>

        <div>
          <label htmlFor="user__weight">Seu peso em quilos</label>
          <input
            type="number"
            id="user__weight"
            min={1}
            placeholder="Exemplo: 65"
            required
          />
        </div>

        <input type="submit" value="Calcular" />
      </form>
    </>
  );
};

export { BMIForm };

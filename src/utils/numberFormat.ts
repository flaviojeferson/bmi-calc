const numberFormat = (number: number) => {
  return number === Infinity
    ? 'Infinito'
    : new Intl.NumberFormat('pt-br').format(number);
};

export { numberFormat };

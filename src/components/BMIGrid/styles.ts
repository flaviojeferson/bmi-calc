import { styled } from 'styled-components';

const BMIGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  &.highlighting {
    grid-template-columns: 1fr;
  }
`;

export { BMIGridContainer };

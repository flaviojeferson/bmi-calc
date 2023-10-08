import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;

  .bmi {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    max-width: 1000px;
  }
`;

export { AppContainer };

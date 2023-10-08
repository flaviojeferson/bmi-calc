import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;

  .bmi {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
    max-width: 900px;

    .bmi__form {
      grid-column: 1 / 3;
    }

    .bmi__grid {
      grid-column: 3 / 6;
    }
  }
`;

export { AppContainer };

import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;

  .bmi {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem;
    max-width: 1000px;

    @media screen and (max-width: 1000px) {
      gap: 1rem;
      grid-template-columns: repeat(1, 1fr);
      max-width: 500px;
      width: 100%;

      .bmi__grid {
        & .grid__button--reset {
          left: 0;
          top: 0;
          transform: translateY(0);
          width: 3rem;
          height: 3rem;
          border-radius: 1rem 0.25rem 0.25rem 0.25rem;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .bmi__grid {
        grid-template-columns: repeat(1, 1fr);
        & .grid__button--reset {
          left: 0;
          top: 0;
          transform: translateY(0);
          width: 3rem;
          height: 3rem;
          border-radius: 1rem 0.25rem 0.25rem 0.25rem;
        }
      }
    }
  }
`;

export { AppContainer };

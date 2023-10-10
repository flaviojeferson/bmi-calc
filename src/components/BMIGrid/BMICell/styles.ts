import { styled } from 'styled-components';

const BMICellContainer = styled.div<{ color: string }>`
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding-block: 2rem;
  position: relative;

  h3,
  p {
    color: ${(props) => props.theme.white};
    text-shadow: 0px 0px 0.25rem #0000004d;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 0.95rem;
    max-width: 20rem;
    text-align: center;
    margin-block: 0.5rem;
  }

  .grid__button--reset {
    background-color: #1e3a8a;
    border-radius: 50%;
    cursor: pointer;
    height: 6rem;
    left: -10%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 6rem;
    border: none;

    transition: background-color
      ${(props) => props.theme['transition-duration']};

    &:hover {
      background-color: #172554;

      img {
        left: -10%;
      }
    }

    &:has(~ div:hover) {
      scale: 0.7;
    }

    img {
      position: relative;
      pointer-events: none;
      width: 40%;
      left: 0;
      transition: left ${(props) => props.theme['transition-duration']};
    }
  }
`;

const BMICircle = styled.div`
  background-color: #00000033;
  border-radius: 50%;
  display: grid;
  padding: 1rem;
  place-items: center;

  .thumb {
    width: 2rem;
    height: 2rem;
  }
`;

export { BMICellContainer, BMICircle };

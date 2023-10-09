import { styled } from 'styled-components';

const BMIGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  position: relative;

  &.highlighting {
    grid-template-columns: 1fr;
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

export { BMIGridContainer };

import { styled } from 'styled-components';

const BMICellContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  transition: scale ${(props) => props.theme['transition-duration']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    scale: 99%;
  }

  h3 {
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    line-height: 200%;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 0.9rem;
    line-height: 200%;
  }
`;

const BMICircle = styled.div`
  background-color: #00000033;
  border-radius: 50%;
  display: grid;
  height: 4rem;
  place-items: center;
  width: 4rem;

  .thumb {
    width: 2rem;
    height: 2rem;
  }
`;

export { BMICellContainer, BMICircle };

import { styled } from 'styled-components';

const BMICellContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  transition: scale ${(props) => props.theme['transition-duration']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    scale: 99%;
  }

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

import { styled } from 'styled-components';

const BMICellContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-block: 2rem;

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

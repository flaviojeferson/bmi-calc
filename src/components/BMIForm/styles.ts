import { styled } from 'styled-components';

const MainContainer = styled.main`
  padding: 0.25rem;

  h1 {
    margin-block: 0.5rem;
    font-size: 2.5rem;
  }
`;

const FormContainer = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  padding-block: 1rem;
  width: 100%;

  .form__field {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .form__label {
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 150%;
      width: 100%;
    }

    .form__input {
      line-height: 200%;
      padding-inline: 0.5rem;
    }
  }

  .form__input--submit {
    cursor: pointer;
    line-height: 250%;
    width: 100%;
    background-color: ${(props) => props.theme['indigo-500']};
    border-color: ${(props) => props.theme['indigo-500']};
    color: ${(props) => props.theme.white};
    font-weight: 600;
    transition: background-color
      ${(props) => props.theme['transition-duration']};

    &:hover {
      background-color: ${(props) => props.theme['indigo-700']};
      border-color: ${(props) => props.theme['indigo-700']};
    }

    &:focus {
      background-color: ${(props) => props.theme['indigo-700']};
      border-color: ${(props) => props.theme['gray-600']};
    }
  }
`;

export { FormContainer, MainContainer };

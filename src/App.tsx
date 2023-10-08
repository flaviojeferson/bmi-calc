import { ThemeProvider } from 'styled-components';
import { BMIForm } from './components/BMIForm';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './themes/defaultTheme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BMIForm />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export { App };

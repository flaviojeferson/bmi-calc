import { ThemeProvider } from 'styled-components';
import { BMIForm } from './components/BMIForm';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './themes/defaultTheme';
import { BMIGrid } from './components/BMIGrid';
import { AppContainer } from './styles/app';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppContainer>
          <div className="bmi">
            <BMIForm className="bmi__form" />
            <BMIGrid className="bmi__grid" />
          </div>
        </AppContainer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export { App };

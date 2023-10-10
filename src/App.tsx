import { ThemeProvider } from 'styled-components';
import { BMIForm } from './components/BMIForm';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './themes/defaultTheme';
import { BMIGrid } from './components/BMIGrid';
import { AppContainer } from './styles/app';
import { BMIContextProvider } from './hooks/BMIContext';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppContainer>
          <BMIContextProvider>
            <div className="bmi">
              <BMIForm className="bmi__form" />
              <BMIGrid className="bmi__grid" />
            </div>
          </BMIContextProvider>
        </AppContainer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export { App };

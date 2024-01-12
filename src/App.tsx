import { CssBaseline, ThemeProvider } from '@mui/material';
import { Background, GameBox, GameTitle } from './components';
import { QuestionContextProvider } from './context/QuestionContext';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionContextProvider>
        <Background>
          <GameTitle />
          <GameBox />
        </Background>
      </QuestionContextProvider>
    </ThemeProvider>
  );
}

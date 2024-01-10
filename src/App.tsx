import { CssBaseline, ThemeProvider } from '@mui/material';
import { Background, GameBox, GameTitle } from './components';
import { QuestionContextProvider } from './context/QuestionContext';
import questions from './db';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionContextProvider initialQuestions={questions}>
        <Background>
          <GameTitle />
          <GameBox />
        </Background>
      </QuestionContextProvider>
    </ThemeProvider>
  );
}

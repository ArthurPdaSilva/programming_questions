import { CssBaseline, ThemeProvider } from '@mui/material';
import GameBox from './domains/GameBox';
import Background from './global/components/Background';
import Title from './global/components/Title';
import { QuestionContextProvider } from './global/context/QuestionContext';
import theme from './global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionContextProvider>
        <Background>
          <Title />
          <GameBox />
        </Background>
      </QuestionContextProvider>
    </ThemeProvider>
  );
}

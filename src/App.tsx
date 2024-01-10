import { CssBaseline, ThemeProvider } from '@mui/material';
import { Background, GameBox, GameTitle } from './components';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        <GameTitle />
        <GameBox />
      </Background>
    </ThemeProvider>
  );
}

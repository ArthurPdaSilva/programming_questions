import { FormControl } from '@mui/material';
import AudioPlay from './components/AudioPlay';
import { GameBoxContainer, GameButtons, GameModals, GameQuestion } from './features';

export default function GameBox() {
  return (
    <>
      <GameModals />
      <GameBoxContainer>
        <FormControl>
          <GameQuestion />
          <GameButtons />
        </FormControl>
      </GameBoxContainer>
      <AudioPlay link="src/assets/audios/trilha.mp3" isControl={false} />
    </>
  );
}

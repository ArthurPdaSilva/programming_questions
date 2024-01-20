import { FormControl } from '@mui/material';
import trilha from '../../assets/audios/trilha.mp3';
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
      <AudioPlay link={trilha} isControl={false} />
    </>
  );
}

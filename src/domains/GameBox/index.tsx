import { FormControl } from '@mui/material';
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
    </>
  );
}

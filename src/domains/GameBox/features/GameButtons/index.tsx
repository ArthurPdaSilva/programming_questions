import { Button, ButtonGroup } from '@mui/material';
import { memo } from 'react';
import useButtonControls from '../../hooks/useButtonControls';

function GameButtons() {
  const { isPossibleToGoToNextQuestion, isPossibleToGoToPreviousQuestion, isNextOrFishishText } = useButtonControls();

  return (
    <ButtonGroup
      sx={{ display: 'flex', justifyContent: 'center', boxShadow: 'none' }}
      size="large"
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button onClick={isPossibleToGoToPreviousQuestion} sx={{ fontSize: '1.2rem' }}>
        Voltar
      </Button>
      <Button onClick={isPossibleToGoToNextQuestion} sx={{ fontSize: '1.2rem' }}>
        {isNextOrFishishText}
      </Button>
    </ButtonGroup>
  );
}

export default memo(GameButtons);

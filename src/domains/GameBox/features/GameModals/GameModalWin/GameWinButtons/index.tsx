import { Button, ButtonGroup } from '@mui/material';
import { useTheme } from '../../../../../../global/hooks/useTheme';
import GameWinButtonsProp from '../../../../types/GameWinButtonsProp';

export default function GameWinButtons({ setShowPhotos, setIsChangePage }: GameWinButtonsProp) {
  const { secondaryColor } = useTheme();

  const changePage = (changeOrNot: boolean) => {
    setShowPhotos(changeOrNot);
    setIsChangePage(false);
    setTimeout(() => {
      setIsChangePage(true);
    }, 200);
  };

  return (
    <ButtonGroup size="large" fullWidth disableElevation variant="text" aria-label="Disabled elevation buttons">
      <Button onClick={() => changePage(false)} sx={{ fontSize: '1.5rem', color: secondaryColor }}>
        Voltar
      </Button>
      <Button onClick={() => changePage(true)} sx={{ fontSize: '1.5rem', color: secondaryColor }}>
        Próximo
      </Button>
    </ButtonGroup>
  );
}

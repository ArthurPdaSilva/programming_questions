import { Box, Button, Modal, Typography } from '@mui/material';
import { useQuestionContext } from '../../../../../global/hooks/useQuestionContext';
import { useTheme } from '../../../../../global/hooks/useTheme';
import AudioPlay from '../../../components/AudioPlay';
import { GameModalProp } from '../../../types/GameModalProp';

export default function GameModalFailed({ openModal, setOpenModal }: GameModalProp) {
  const { setMarkedAlternatives, setCurrentQuestionIndex } = useQuestionContext();
  const { primaryColor } = useTheme();

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setMarkedAlternatives([]);
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={resetGame}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{ background: primaryColor }}
        borderRadius={5}
        width={550}
        height={210}
        p={2}
        gap={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography color="secondary" variant="h1" sx={{ fontSize: '1.6rem' }}>
          Infelizmente, você perdeu.
        </Typography>
        <Button color="secondary" variant="contained" sx={{ fontSize: '1.2rem' }} onClick={resetGame}>
          Tentar novamente clicando aqui (Ou fora do componente)
        </Button>
        <AudioPlay link="src/assets/audios/iaepaiyoulose.m4a" isControl />
      </Box>
    </Modal>
  );
}

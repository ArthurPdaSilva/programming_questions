import { Box, Button, Modal, Typography } from '@mui/material';
import { useQuestionContext } from '../../../../../hooks/useQuestionContext';
import theme from '../../../../../theme';
import { GameModalProp } from '../GameModalProp';

export default function GameModalFailed({ openModal, setOpenModal }: GameModalProp) {
  const { setMarkedAlternatives, setCurrentQuestionIndex } = useQuestionContext();

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
        sx={{ background: theme.palette.primary.main }}
        borderRadius={5}
        width={550}
        height={250}
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography color="secondary" variant="h2" textAlign="center">
          Infelizmente, você perdeu.
        </Typography>
        <Button color="secondary" variant="contained" sx={{ fontSize: '1.2rem' }} onClick={resetGame}>
          Tentar novamente clicando aqui (Ou fora do componente)
        </Button>
      </Box>
    </Modal>
  );
}

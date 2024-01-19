import { Box, Button, Modal, Typography } from '@mui/material';
import { useQuestionContext } from '../../../../../global/hooks/useQuestionContext';
import { useTheme } from '../../../../../global/hooks/useTheme';
import { GameModalProp } from '../../../types/GameModalProp';

export default function GameModalInit({ openModal, setOpenModal }: GameModalProp) {
  const { totalNumberOfPossibleWrongQuestions } = useQuestionContext();
  const { primaryColor } = useTheme();

  const startingGame = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={startingGame}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{ background: primaryColor }}
        borderRadius={5}
        width={550}
        height={250}
        p={2}
        gap={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Typography color="secondary" variant="h1" sx={{ fontSize: '1.6rem' }}>
          Bem vindo, jogador!
        </Typography>
        <Typography color="secondary" variant="h3" sx={{ fontSize: '1.5rem' }} align="center">
          Clique no botão abaixo para começar o desafio. Você só pode errar {totalNumberOfPossibleWrongQuestions}{' '}
          questões.
        </Typography>
        <Button color="secondary" variant="contained" sx={{ fontSize: '1.2rem' }} onClick={startingGame}>
          clicando aqui (Ou fora do componente)
        </Button>
      </Box>
    </Modal>
  );
}

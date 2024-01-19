import { Box, Modal, Typography } from '@mui/material';
import { useTheme } from '../../../../../global/hooks/useTheme';
import AudioPlay from '../../../components/AudioPlay';
import { GameModalProp } from '../../../types/GameModalProp';
import Carousel from './Carousel';

export default function GameModalWin({ openModal, setOpenModal }: GameModalProp) {
  const { primaryColor } = useTheme();

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{ background: primaryColor }}
        borderRadius={5}
        width="85%"
        height="90%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={5}
      >
        <Typography color="secondary" variant="h1">
          Parabéns, você ganhou!
        </Typography>
        <Typography color="secondary" variant="h4">
          Deu de enrolar, vamos namorar? Gatinha, parabéns por ter chegado até aqui, você é muito especial para mim e eu
          estou te devendo isso há um tempo já, mas agora eu vou te pedir em namoro, você aceita? Eu te amo muitão e já
          estamos há mais de 6 meses juntos, então, vamos oficializar isso? ❤️❤️❤️
        </Typography>
        <Carousel />
        <AudioPlay link="src/assets/audios/CarelessWhisper-GeorgeMichael.mp3" isControl />
      </Box>
    </Modal>
  );
}

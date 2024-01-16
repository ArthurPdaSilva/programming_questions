import { Box, Modal, Typography } from '@mui/material';
import theme from '../../../../../theme';
import AudioPlay from '../AudioPlay';
import { GameModalProp } from '../GameModalProp';
import CarouselComponent from './CarouselComponent';

export default function GameModalWin({ openModal, setOpenModal }: GameModalProp) {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{ background: theme.palette.primary.main }}
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
        <CarouselComponent />
        <AudioPlay link="src/assets/modal_audios/CarelessWhisper-GeorgeMichael.mp3" />
      </Box>
    </Modal>
  );
}

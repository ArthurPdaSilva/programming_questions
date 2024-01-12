import { Box, Modal, Typography } from '@mui/material';
import theme from '../../../../theme';
import GameModalWinProp from './GameModalWinProp';

export default function GameModalWin({ openModalWin, setOpenModalWin }: GameModalWinProp) {
  return (
    <Modal
      open={openModalWin}
      onClose={() => setOpenModalWin(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{ background: theme.palette.primary.main }}
        borderRadius={5}
        width={1000}
        height={600}
        display="flex"
        alignItems="center"
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
      </Box>
    </Modal>
  );
}

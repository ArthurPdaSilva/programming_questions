import { Box, Button, Modal, Typography } from '@mui/material';
import theme from '../../../../theme';
import GameModalFailedProp from './GameModalFailedProp';

export default function GameModalFailed({ openModalFailed, setOpenModalFailed }: GameModalFailedProp) {
  return (
    <Modal
      open={openModalFailed}
      onClose={() => setOpenModalFailed(false)}
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
        <Button
          color="secondary"
          variant="contained"
          sx={{ fontSize: '1.2rem' }}
          onClick={() => setOpenModalFailed(false)}
        >
          Tentar novamente (Ou clicar fora do componente)
        </Button>
      </Box>
    </Modal>
  );
}

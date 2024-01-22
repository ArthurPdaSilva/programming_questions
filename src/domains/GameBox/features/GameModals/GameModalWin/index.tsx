import { Box, Modal, Zoom } from '@mui/material';
import { useState } from 'react';
import carelessWhisperGeorgeMichael from '../../../../../assets/audios/carelessWhisperGeorgeMichael.mp3';
import { useTheme } from '../../../../../global/hooks/useTheme';
import AudioPlay from '../../../components/AudioPlay';
import { GameModalProp } from '../../../types/GameModalProp';
import Carousel from './Carousel';
import GameWinButtons from './GameWinButtons';
import GameWinText from './GameWinText';

export default function GameModalWin({ openModal, setOpenModal }: GameModalProp) {
  const { primaryColor } = useTheme();
  const [isChangePage, setIsChangePage] = useState(true);
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Zoom in={isChangePage}>
        <Box
          sx={{ background: primaryColor }}
          borderRadius={5}
          maxWidth="70%"
          minHeight="40%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          {showPhotos ? <Carousel /> : <GameWinText />}
          <GameWinButtons setShowPhotos={setShowPhotos} setIsChangePage={setIsChangePage} />
          <AudioPlay link={carelessWhisperGeorgeMichael} isControl={false} />
        </Box>
      </Zoom>
    </Modal>
  );
}

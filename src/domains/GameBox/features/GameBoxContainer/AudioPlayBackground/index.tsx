import { CardMedia } from '@mui/material';
import { useEffect, useState } from 'react';
import trilha from '../../../../../assets/audios/trilha.mp3';
import { useQuestionContext } from '../../../../../global/hooks/useQuestionContext';

export default function AudioPlayBackground() {
  const { isFinish } = useQuestionContext();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isFinish()) {
      setIsPlaying(false);
    }
  }, [isFinish]);

  return (
    <CardMedia component="audio" autoPlay={isPlaying}>
      <source src={trilha} type="audio/mpeg" />
    </CardMedia>
  );
}

import { CardMedia } from '@mui/material';
import trilha from '../../../../../assets/audios/trilha.mp3';
import { useQuestionContext } from '../../../../../global/hooks/useQuestionContext';

export default function AudioPlayBackground() {
  const { isFinish } = useQuestionContext();

  if (isFinish()) return <></>;
  return (
    <CardMedia component="audio" autoPlay>
      <source src={trilha} type="audio/mpeg" />
    </CardMedia>
  );
}

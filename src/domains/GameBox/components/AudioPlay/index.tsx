import CardMedia from '@mui/material/CardMedia';
import { AudioPlayProp } from '../../types/AudioPlayProp';

export default function AudioPlay({ link, isControl }: AudioPlayProp) {
  return (
    <CardMedia component="audio" sx={{ width: '50%' }} autoPlay loop controls={isControl}>
      <source src={link} type="audio/mpeg" />
    </CardMedia>
  );
}

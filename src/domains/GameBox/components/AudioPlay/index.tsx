import CardMedia from '@mui/material/CardMedia';
import { AudioPlayProp } from '../../types/AudioPlayProp';

export default function AudioPlay({ link }: AudioPlayProp) {
  return (
    <CardMedia component="audio" controls sx={{ width: '50%' }} autoPlay loop>
      <source src={link} type="audio/mpeg" />
    </CardMedia>
  );
}

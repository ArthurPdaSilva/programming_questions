import { Box } from '@mui/material';
import BackgroundProps from '../../types/backgroundProps';

export default function Background({ children }: BackgroundProps) {
  return (
    <Box height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
}

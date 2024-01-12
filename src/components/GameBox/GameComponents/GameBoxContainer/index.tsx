import { Box, Zoom } from '@mui/material';
import { useQuestionContext } from '../../../../hooks/useQuestionContext';
import theme from '../../../../theme';
import GameBoxContainerProps from './GameBoxContainerProps';

export default function GameBoxContainer({ children }: GameBoxContainerProps) {
  const { isChangingQuestion } = useQuestionContext();

  return (
    <Zoom in={isChangingQuestion}>
      <Box
        display="flex"
        flexDirection="column"
        width={700}
        maxHeight={600}
        border={1}
        borderColor={theme.palette.primary.main}
        borderRadius={5}
        padding={2}
      >
        {children}
      </Box>
    </Zoom>
  );
}

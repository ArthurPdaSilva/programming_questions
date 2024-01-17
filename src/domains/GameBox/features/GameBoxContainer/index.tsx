import { Box, Zoom } from '@mui/material';
import { useQuestionContext } from '../../../../global/hooks/useQuestionContext';
import { useTheme } from '../../../../global/hooks/useTheme';
import GameBoxContainerProps from '../../types/GameBoxContainerProps';

export default function GameBoxContainer({ children }: GameBoxContainerProps) {
  const { isChangingQuestion } = useQuestionContext();
  const { primaryColor } = useTheme();

  return (
    <Zoom in={isChangingQuestion}>
      <Box
        display="flex"
        flexDirection="column"
        width={700}
        maxHeight={600}
        border={1}
        borderColor={primaryColor}
        borderRadius={5}
        padding={2}
      >
        {children}
      </Box>
    </Zoom>
  );
}

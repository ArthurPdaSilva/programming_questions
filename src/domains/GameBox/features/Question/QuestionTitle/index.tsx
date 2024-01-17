import { FormLabel } from '@mui/material';
import { useQuestionContext } from '../../../../../global/hooks/useQuestionContext';
import { useTheme } from '../../../../../global/hooks/useTheme';

export default function QuestionTitle() {
  const { getCurrentQuestion } = useQuestionContext();
  const { primaryColor } = useTheme();

  return (
    <FormLabel
      id="questions_label"
      sx={{ color: primaryColor, fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}
    >
      {getCurrentQuestion().question}
    </FormLabel>
  );
}

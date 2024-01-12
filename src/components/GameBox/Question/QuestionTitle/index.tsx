import { FormLabel } from '@mui/material';
import { useQuestionContext } from '../../../../hooks/useQuestionContext';
import theme from '../../../../theme';

export default function QuestionTitle() {
  const { getCurrentQuestion } = useQuestionContext();

  return (
    <FormLabel
      id="questions_label"
      sx={{ color: theme.palette.primary.main, fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}
    >
      {getCurrentQuestion().question}
    </FormLabel>
  );
}

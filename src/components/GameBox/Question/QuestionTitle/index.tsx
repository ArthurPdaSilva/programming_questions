import { FormLabel } from '@mui/material';
import theme from '../../../../theme';
import QuestionTitleProps from './QuestionTitleProps';

export default function QuestionTitle({ title }: QuestionTitleProps) {
  return (
    <FormLabel id="questions_label" sx={{ color: theme.palette.primary.main, fontSize: '2rem', textAlign: 'center' }}>
      {title}
    </FormLabel>
  );
}

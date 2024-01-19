import { FormControlLabel, Radio } from '@mui/material';
import { useQuestionContext } from '../../../../../../global/hooks/useQuestionContext';
import { useTheme } from '../../../../../../global/hooks/useTheme';

export default function QuestionOption() {
  const { getCurrentQuestion, selectedQuestionValue } = useQuestionContext();
  const { primaryColor, secondaryColor } = useTheme();
  return (
    <>
      {getCurrentQuestion().options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio sx={{ color: primaryColor }} />}
          label={
            <span
              style={{
                color: selectedQuestionValue === option.value ? primaryColor : secondaryColor,
                fontSize: '1.5rem',
              }}
            >
              {option.label}
            </span>
          }
        />
      ))}
    </>
  );
}

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useQuestionContext } from '../../../../hooks/useQuestionContext';
import theme from '../../../../theme';

export default function QuestionOptions() {
  const { getCurrentQuestion, selectedQuestionValue, setSelectedQuestionValue } = useQuestionContext();

  const handleAddValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedQuestionValue(event.target.value);
  };

  return (
    <RadioGroup
      aria-labelledby="questions_label"
      name="radio-buttons-group"
      defaultValue={getCurrentQuestion().options[0].value}
      onChange={handleAddValue}
    >
      {getCurrentQuestion().options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio sx={{ color: theme.palette.primary.main }} />}
          label={
            <span
              style={{
                color:
                  selectedQuestionValue === option.value ? theme.palette.primary.main : theme.palette.secondary.main,
                fontSize: '1.5rem',
              }}
            >
              {option.label}
            </span>
          }
        />
      ))}
    </RadioGroup>
  );
}

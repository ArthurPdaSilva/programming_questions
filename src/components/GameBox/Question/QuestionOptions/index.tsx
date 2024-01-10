import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useQuestionContext } from '../../../../hooks/useQuestionContext';
import theme from '../../../../theme';
import QuestionOptionsProps from './QuestionOptionsProps';

export default function QuestionOptions({ options }: QuestionOptionsProps) {
  const { selectedValue, setSelectedValue } = useQuestionContext();
  console.log(selectedValue);

  const handleAddValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup
      aria-labelledby="questions_label"
      name="radio-buttons-group"
      defaultValue={options[0].value}
      onChange={handleAddValue}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio sx={{ color: theme.palette.primary.main }} />}
          label={option.label}
          sx={{
            color: `${selectedValue === option.value ? theme.palette.primary.main : theme.palette.secondary.main}`,
            fontSize: '1.5rem',
          }}
        />
      ))}
    </RadioGroup>
  );
}

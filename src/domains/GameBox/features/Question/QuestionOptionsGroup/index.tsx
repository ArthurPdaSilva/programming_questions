import { RadioGroup } from '@mui/material';
import { useQuestionContext } from '../../../../../global/hooks/useQuestionContext';
import QuestionOption from './QuestionOption';

export default function QuestionOptionsGroup() {
  const { getCurrentQuestion, setSelectedQuestionValue } = useQuestionContext();

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
      <QuestionOption />
    </RadioGroup>
  );
}

import { OptionType } from '../../../../context/QuestionsType';

export default interface QuestionOptionsProps {
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  options: OptionType[];
}

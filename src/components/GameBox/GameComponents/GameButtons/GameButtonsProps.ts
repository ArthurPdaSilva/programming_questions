import { MarkedAlternativeType } from '../../../../context/QuestionsType';

export default interface GameButtonsProps {
  markedAlternatives: MarkedAlternativeType[];
  setMarkedAlternatives: React.Dispatch<React.SetStateAction<MarkedAlternativeType[]>>;
}

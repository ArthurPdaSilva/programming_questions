import { Box, Button, ButtonGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import theme from '../../theme';

const opcoes = [
  { value: 'Inteiro', label: 'Inteiro' },
  { value: 'Ponto flutuante', label: 'Ponto flutuante' },
  { value: 'Vetor', label: 'Vetor' },
  { value: 'Caractere', label: 'Caractere' },
];

export default function GameBox() {
  const [selectedValue, setSelectedValue] = useState(opcoes[0].value);

  const handleAddValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      border={1}
      borderColor={theme.palette.primary.main}
      borderRadius={5}
      padding={2}
    >
      <FormControl>
        <FormLabel id="questions_label" sx={{ color: theme.palette.primary.main }}>
          Qual dos seguintes não é um tipo de dado primitivo em programação?
        </FormLabel>
        <RadioGroup
          aria-labelledby="questions_label"
          name="radio-buttons-group"
          defaultValue={opcoes[0].value}
          onChange={handleAddValue}
        >
          {opcoes.map((opcao) => (
            <FormControlLabel
              key={opcao.value}
              value={opcao.value}
              control={<Radio sx={{ color: theme.palette.primary.main }} />}
              label={opcao.label}
              sx={{
                color: `${selectedValue === opcao.value ? theme.palette.primary.main : theme.palette.secondary.main}`,
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <ButtonGroup
        sx={{ display: 'flex', justifyContent: 'center' }}
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button>Voltar</Button>
        <Button>Avançar</Button>
      </ButtonGroup>
    </Box>
  );
}

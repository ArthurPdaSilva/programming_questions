import { QuestionType } from '../types/QuestionsType';

const questions: QuestionType[] = [
  {
    id: 0,
    question: 'Qual dos seguintes não é um tipo de dado primitivo em programação?',
    options: [
      { value: 'a', label: 'Inteiro' },
      { value: 'b', label: 'Ponto flutuante' },
      { value: 'c', label: 'Vetor' },
      { value: 'd', label: 'Caractere' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 1,
    question: 'O que é um "loop" em programação?',
    options: [
      { value: 'a', label: 'Um erro de sintaxe' },
      { value: 'b', label: 'Uma função matemática' },
      { value: 'c', label: 'Uma estrutura de controle de fluxo que repete a execução de um bloco de código' },
      { value: 'd', label: 'Uma variável global' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 2,
    question: 'Em programação orientada a objetos, o que é encapsulamento?',
    options: [
      { value: 'a', label: 'Um tipo de loop' },
      { value: 'b', label: 'A capacidade de agrupar dados e métodos relacionados em uma única unidade' },
      { value: 'c', label: 'Um tipo de algoritmo' },
      { value: 'd', label: 'Um método de ordenação' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 3,
    question: 'O que é Git em desenvolvimento de software?',
    options: [
      { value: 'a', label: 'Uma linguagem de programação' },
      { value: 'b', label: 'Um sistema de gerenciamento de banco de dados' },
      { value: 'c', label: 'Um sistema de controle de versão' },
      { value: 'd', label: 'Um compilador' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 4,
    question: 'Qual é a principal diferença entre uma linguagem interpretada e uma linguagem compilada?',
    options: [
      { value: 'a', label: 'As linguagens compiladas são mais fáceis de entender' },
      { value: 'b', label: 'As linguagens interpretadas são executadas diretamente pelo hardware' },
      { value: 'c', label: 'As linguagens interpretadas são traduzidas para código de máquina antes da execução' },
      { value: 'd', label: 'As linguagens compiladas são mais lentas' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 5,
    question: 'O que é um ponteiro em linguagens de programação?',
    options: [
      { value: 'a', label: 'Uma variável que armazena números inteiros' },
      { value: 'b', label: 'Uma estrutura de controle de fluxo' },
      { value: 'c', label: 'Um endereço de memória' },
      { value: 'd', label: 'Um operador lógico' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 6,
    question: 'Qual das seguintes linguagens é conhecida por ser usada principalmente para desenvolvimento web?',
    options: [
      { value: 'a', label: 'C++' },
      { value: 'b', label: 'Python' },
      { value: 'c', label: 'Java' },
      { value: 'd', label: 'HTML' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 7,
    question: 'O que é um banco de dados relacional?',
    options: [
      { value: 'a', label: 'Um banco de dados que não tem relação com outros bancos de dados' },
      { value: 'b', label: 'Um banco de dados que usa tabelas para organizar dados e estabelece relações entre elas' },
      { value: 'c', label: 'Um banco de dados que armazena apenas números inteiros' },
      { value: 'd', label: 'Um banco de dados que não requer uma senha para acesso' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 8,
    question: 'O que é MVC (Model-View-Controller) em arquitetura de software?',
    options: [
      { value: 'a', label: 'Uma linguagem de programação' },
      { value: 'b', label: 'Um design pattern que separa a aplicação em três componentes principais' },
      { value: 'c', label: 'Um tipo de algoritmo de ordenação' },
      { value: 'd', label: 'Um sistema operacional' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 9,
    question: 'O que é um framework em desenvolvimento de software?',
    options: [
      { value: 'a', label: 'Um tipo de loop' },
      { value: 'b', label: 'Uma estrutura de controle de fluxo' },
      { value: 'c', label: 'Um conjunto de ferramentas e convenções que facilitam o desenvolvimento de software' },
      { value: 'd', label: 'Uma linguagem de programação' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 10,
    question: 'Qual é a função do comando "if" em muitas linguagens de programação?',
    options: [
      { value: 'a', label: 'Definir uma variável' },
      { value: 'b', label: 'Criar um loop' },
      { value: 'c', label: 'Tomar decisões com base em uma condição' },
      { value: 'd', label: 'Realizar operações matemáticas' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 11,
    question: 'O que é um método abstrato em programação orientada a objetos?',
    options: [
      { value: 'a', label: 'Um método que não pode ser acessado por outras classes' },
      { value: 'b', label: 'Um método que não tem implementação e deve ser definido por classes derivadas' },
      { value: 'c', label: 'Um método que realiza operações matemáticas complexas' },
      { value: 'd', label: 'Um método que não retorna nenhum valor' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 12,
    question: 'O que é a recursividade em programação?',
    options: [
      { value: 'a', label: 'Uma estrutura de controle de fluxo' },
      { value: 'b', label: 'Uma forma de organização de dados' },
      { value: 'c', label: 'Um método de resolução de problemas em que uma função chama a si mesma' },
      { value: 'd', label: 'Uma linguagem de programação' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 13,
    question: 'Em linguagens de programação, o que é um operador lógico?',
    options: [
      { value: 'a', label: 'Um operador que realiza operações matemáticas' },
      { value: 'b', label: 'Um operador que manipula strings' },
      { value: 'c', label: 'Um operador que trabalha com valores booleanos' },
      { value: 'd', label: 'Um operador que ordena dados' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 14,
    question: 'Qual é a diferença entre "==" e "===" em algumas linguagens de programação?',
    options: [
      { value: 'a', label: 'Nenhuma diferença, são sinônimos' },
      { value: 'b', label: '"===" compara valores e tipos, enquanto "==" compara apenas valores' },
      { value: 'c', label: '"==" compara valores e tipos, enquanto "===" compara apenas valores' },
      { value: 'd', label: '"===" é usado apenas em linguagens de programação específicas' },
    ],
    correctAnswer: 'b',
  },
];

export default questions;

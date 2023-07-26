import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const OPERATORS = ['+', '-', '*'];
const DESCRIPTION = 'What is the result of the expression?';

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator state: '${operator}'!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const number2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];
  const taskText = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calc(number1, number2, operator));

  return [correctAnswer, taskText];
};

export default () => {
  runGame(DESCRIPTION, getRound);
};

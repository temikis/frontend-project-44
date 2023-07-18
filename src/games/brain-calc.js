import getRandomIntInclusive from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const OPERATORS = ['+', '-', '*'];
const DESCRIPTION = 'What is the result of the expression?';

export default () => {
  const getRound = () => {
    let correctAnswer = '';
    const number1 = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    const number2 = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    const indexOfOperator = getRandomIntInclusive(0, 2);
    const taskText = `${number1} ${OPERATORS[indexOfOperator]} ${number2}`;

    if (indexOfOperator === 0) {
      correctAnswer = `${number1 + number2}`;
    } else if (indexOfOperator === 1) {
      correctAnswer = `${number1 - number2}`;
    } else if (indexOfOperator === 2) {
      correctAnswer = `${number1 * number2}`;
    }

    return [correctAnswer, taskText];
  };

  runGame(DESCRIPTION, getRound);
};

import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEver = (number) => number % 2 === 0;

const getRound = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const taskText = String(number);
  const correctAnswer = isEver(number) ? 'yes' : 'no';

  return [correctAnswer, taskText];
};

export default () => {
  runGame(DESCRIPTION, getRound);
};

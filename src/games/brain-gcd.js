import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const min = Math.min(number1, number2);
  let solution = 1;
  for (let i = 2; i <= min; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      solution = i;
    }
  }

  return solution;
};

const getRound = () => {
  const number1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const number2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const taskText = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));

  return [correctAnswer, taskText];
};

export default () => {
  runGame(DESCRIPTION, getRound);
};

import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 1000;
const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const taskText = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [correctAnswer, taskText];
};

export default () => {
  runGame(DESCRIPTION, getRound);
};

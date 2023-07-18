import getRandomIntInclusive from '../utils.js';
import runGame from '../index.js';

const MIN_FIRST_NUMBER = 1;
const MAX_FIRST_NUMBER = 25;
const DESCRIPTION = 'What number is missing in the progression?';
const MIN_STEP = 1;
const MAX_STEP = 10;
const VALUES = 10;

export default () => {
  const getRound = () => {
    const firstNumber = getRandomIntInclusive(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
    const step = getRandomIntInclusive(MIN_STEP, MAX_STEP);
    const randomIndex = getRandomIntInclusive(0, VALUES - 1);
    const numbers = [];

    for (let i = 0; i < VALUES; i += 1) {
      numbers.push(firstNumber + step * i);
    }
    const correctAnswer = numbers[randomIndex].toString();
    numbers[randomIndex] = '..';
    const taskText = numbers.join(' ');

    return [correctAnswer, taskText];
  };

  runGame(DESCRIPTION, getRound);
};

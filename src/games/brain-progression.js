import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_FIRST_NUMBER = 1;
const MAX_FIRST_NUMBER = 25;
const DESCRIPTION = 'What number is missing in the progression?';
const MIN_STEP = 1;
const MAX_STEP = 10;
const VALUES_COUNT = 10;

const getNumbersForTask = (firstNumber, step, valuesCount) => {
  const numbers = [];
  for (let i = 0; i < valuesCount; i += 1) {
    numbers.push(firstNumber + step * i);
  }

  return numbers;
};

const getRound = () => {
  const firstNumber = getRandomNumber(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const randomIndex = getRandomNumber(0, VALUES_COUNT - 1);
  const numbers = getNumbersForTask(firstNumber, step, VALUES_COUNT);
  const correctAnswer = String(numbers[randomIndex]);
  numbers[randomIndex] = '..';
  const taskText = numbers.join(' ');

  return [correctAnswer, taskText];
};

export default () => {
  runGame(DESCRIPTION, getRound);
};

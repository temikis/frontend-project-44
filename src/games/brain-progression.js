import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_FIRST_NUMBER = 1;
const MAX_FIRST_NUMBER = 25;
const DESCRIPTION = 'What number is missing in the progression?';
const MIN_STEP = 1;
const MAX_STEP = 10;
const LENGTH = 10;

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const getRound = () => {
  const firstNumber = getRandomNumber(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const hiddenNumberIndex = getRandomNumber(0, LENGTH - 1);
  const progression = getProgression(firstNumber, step, LENGTH);
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const taskText = progression.join(' ');

  return [correctAnswer, taskText];
};

export default () => {
  runGame(DESCRIPTION, getRound);
};

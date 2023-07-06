import getRandomIntInclusive from '../getRandomIntInclusive.js';
import runGame from '../index.js';

export default () => {
  const MIN_FIRST_NUMBER = 1;
  const MAX_FIRST_NUMBER = 25;
  const GAME_TASK_DESCRIPTION = 'What number is missing in the progression?';
  const MIN_STEP = 1;
  const MAX_STEP = 10;
  const VALUES = 10;

  const putRoundDataArray = () => {
    const firstNumber = getRandomIntInclusive(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
    const step = getRandomIntInclusive(MIN_STEP, MAX_STEP);
    const randomNumberOfValue = getRandomIntInclusive(0, VALUES - 1);
    const arrayOfNumber = [];

    for (let i = 0; i < VALUES; i += 1) {
      arrayOfNumber.push(firstNumber + step * i);
    }
    const correctAnswer = arrayOfNumber[randomNumberOfValue].toString();
    arrayOfNumber[randomNumberOfValue] = '..';
    const taskText = arrayOfNumber.join(' ');

    return [correctAnswer, taskText];
  };

  runGame(GAME_TASK_DESCRIPTION, putRoundDataArray);
};

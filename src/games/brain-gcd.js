import getRandomIntInclusive from '../getRandomIntInclusive.js';
import runGame from '../index.js';

export default () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const GAME_TASK_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

  const putRoundDataArray = () => {
    let correctAnswer = 1;
    const number1 = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    const number2 = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    const taskText = `${number1} ${number2}`;
    const min = Math.min(number1, number2);

    for (let i = 2; i <= min; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = i;
      }
    }
    correctAnswer = correctAnswer.toString();

    return [correctAnswer, taskText];
  };

  runGame(GAME_TASK_DESCRIPTION, putRoundDataArray);
};

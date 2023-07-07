import getRandomIntInclusive from '../getRandomIntInclusive.js';
import runGame from '../index.js';

export default () => {
  const MIN_NUMBER = 2;
  const MAX_NUMBER = 1000;
  const GAME_TASK_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const putRoundDataArray = () => {
    let correctAnswer = 'yes';
    const number = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    const taskText = `${number}`;

    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        correctAnswer = 'no';
        break;
      }
    }

    return [correctAnswer, taskText];
  };

  runGame(GAME_TASK_DESCRIPTION, putRoundDataArray);
};

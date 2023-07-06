import getRandomIntInclusive from '../getRandomIntInclusive.js';
import runGame from '../index.js';

export default () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const GAME_TASK_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

  const putRoundDataArray = () => {
    let correctAnswer = '';
    const number = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    const taskText = `${number}`;
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    return [correctAnswer, taskText];
  };

  runGame(GAME_TASK_DESCRIPTION, putRoundDataArray);
};

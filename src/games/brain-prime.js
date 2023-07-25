import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 1000;
const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const getRound = () => {
    let correctAnswer = 'yes';
    const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const taskText = `${number}`;

    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        correctAnswer = 'no';
        break;
      }
    }

    return [correctAnswer, taskText];
  };

  runGame(DESCRIPTION, getRound);
};

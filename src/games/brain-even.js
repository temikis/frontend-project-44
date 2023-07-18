import getRandomIntInclusive from '../utils.js';
import runGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const getRound = () => {
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

  runGame(DESCRIPTION, getRound);
};

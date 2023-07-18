import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (description, getRound) => {
  let countCorrectAnswer = 0;

  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(description);
  while (countCorrectAnswer < ROUNDS_COUNT) {
    const [correctAnswer, taskText] = getRound();
    console.log(`Question: ${taskText}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (correctAnswer === answerPlayer) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else {
      console.log(
        `'${answerPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${namePlayer}!`,
      );
      break;
    }
  }
  if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${namePlayer}!`);
  }
};

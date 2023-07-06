import readlineSync from 'readline-sync';

export default (gameTaskDescription, putRoundDataArray) => {
  const NUMBER_OF_ROUNDS = 3;
  let countCorrectAnswer = 0;

  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(gameTaskDescription);
  while (countCorrectAnswer < NUMBER_OF_ROUNDS) {
    const [correctAnswer, taskText] = putRoundDataArray();
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

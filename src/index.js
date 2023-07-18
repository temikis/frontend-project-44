import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(description);
  for (let countCorrectAnswer = 0; countCorrectAnswer < ROUNDS_COUNT; countCorrectAnswer += 1) {
    const [correctAnswer, taskText] = getRound();
    console.log(`Question: ${taskText}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answerPlayer) {
      console.log(`'${answerPlayer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${namePlayer}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${namePlayer}!`);
};

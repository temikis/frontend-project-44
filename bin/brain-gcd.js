#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const NAME_PLAYER = readlineSync.question('May I have your name? ');
console.log(`Hello, ${NAME_PLAYER}!`);

let countCorrectAnswer = 0;
const COUNT_ROUND = 3;
const MAX_NUMBER = 100;

const gcd = (number1, number2) => {
  let solution = 1;
  const halfOfMin = Math.min(number1, number2) / 2;

  for (let i = 2; i <= halfOfMin; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      solution = i;
    }
  }
  return solution;
};

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Find the greatest common divisor of given numbers.');
while (countCorrectAnswer < COUNT_ROUND) {
  const randomNumber1 = getRandomIntInclusive(1, MAX_NUMBER);
  const randomNumber2 = getRandomIntInclusive(1, MAX_NUMBER);
  // const randomOperation = getRandomIntInclusive(0, 2);
  // const operation = ['+', '-', '*'];

  const equal = gcd(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const answerPlayer = readlineSync.question('Your answer: ');
  if (equal === parseInt(answerPlayer, 10)) {
    console.log('Correct!');
    countCorrectAnswer += 1;
  } else {
    console.log(`'${answerPlayer}' is wrong answer ;(. Correct answer was '${equal}'.\nLet's try again, ${NAME_PLAYER}!`);
    break;
  }
}
if (countCorrectAnswer === 3) {
  console.log(`Congratulations, ${NAME_PLAYER}!`);
}

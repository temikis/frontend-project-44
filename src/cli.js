import readlineSync from 'readline-sync';

const greet = () => {
    console.log('Welcome to the Brain Games!');
    const NAME_PLAYER = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${NAME_PLAYER}!`); 
};

export default greet;

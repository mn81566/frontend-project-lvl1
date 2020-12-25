import readlineSync from 'readline-sync';

const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (value) => value % 2 === 0;

const parityGame = (userName) => {
  const answersArr = ['yes', 'no'];

  console.log(`Answer "${answersArr[0]}" if the number is even, otherwise answer "${answersArr[1]}".`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandom(100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    const writeAnswer = isEven(randomNumber) ? answersArr[0] : answersArr[1];

    if (userAnswer !== writeAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${writeAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default parityGame;

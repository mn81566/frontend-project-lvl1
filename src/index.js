import readlineSync from 'readline-sync';
// import askName from './cli.js';

export const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));
// const isEven = (value) => value % 2 === 0;
const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const roundCount = 3;
// const getQuestionResponse = () => {
//   const res = readlineSync.question('Your answer: ');
//   // if (res === 'yes') return 'yes';
//   // if (res === 'no') return 'no';
//   // return +res;
//   return res;
// };
// const isRight = (response, writeAnswer) => response === writeAnswer;

export const init = (gamesRuleText, askQuestion, isRightRes) => {
  const userName = askName();

  console.log(gamesRuleText);

  for (let i = 0; i < roundCount; i += 1) {
    askQuestion();
    // const response = getQuestionResponse();
    // const writeAnswer = getWriteAnswer();

    if (!isRightRes()) {
      // console.log(`'${response}' is wrong answer ;(. Correct answer was '${writeAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

// export default init;

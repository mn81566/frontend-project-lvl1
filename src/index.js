import readlineSync from 'readline-sync';
import askName from './cli.js';

export const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));
// const isEven = (value) => value % 2 === 0;

const roundCount = 3;
const sayRules = (str) => console.log(str);
const sayCongratulations = (name) => console.log(`Congratulations, ${name}!`);
const sayGameOver = (name, response, writeAnswer) => {
  console.log(`'${response}' is wrong answer ;(. Correct answer was '${writeAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};
const responseQuestion = () => readlineSync.question('Your answer: ');
const isWrite = (response, writeAnswer) => response === writeAnswer;

export const init = (gamesRuleText, askQuestion, getWriteAnswer) => {
  const userName = askName();

  sayRules(gamesRuleText);

  for (let i = 0; i < roundCount; i += 1) {
    askQuestion();
    const response = +responseQuestion();
    const writeAnswer = getWriteAnswer();

    if (!isWrite(response, writeAnswer)) {
      sayGameOver(userName, response, writeAnswer);
      return;
    }
  }
  sayCongratulations(userName);
};

// export default init;

import readlineSync from 'readline-sync';

export const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));
const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const roundCount = 3;
const getQuestionResponse = () => {
  const res = readlineSync.question('Your answer: ');
  return res;
};

export const init = (params) => {
  const [gamesRuleText] = params();
  const userName = askName();

  console.log(gamesRuleText);

  for (let i = 0; i < roundCount; i += 1) {
    const [, questionText, isRightRes, writeAnswer] = params();
    console.log(questionText);
    const response = getQuestionResponse();

    if (!isRightRes(response, writeAnswer)) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${writeAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

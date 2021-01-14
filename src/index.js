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

const initGame = (gamesRuleText, getGameData) => {
  const userName = askName();

  console.log(gamesRuleText);

  for (let i = 0; i < roundCount; i += 1) {
    const [questionText, rightAnswer] = getGameData();
    console.log(questionText);
    const response = getQuestionResponse();

    // if (!isRightRes(response, rightAnswer)) {
    if (response !== rightAnswer) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default initGame;

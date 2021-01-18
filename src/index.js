import readlineSync from 'readline-sync';

const roundCount = 3;
const getQuestionAnswer = () => {
  const res = readlineSync.question('Your answer: ');
  return res;
};

const initGame = (gamesRuleText, getGameData) => {
  // const userName = askName();
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gamesRuleText);

  for (let i = 0; i < roundCount; i += 1) {
    const [questionText, rightAnswer] = getGameData();
    console.log(`Question: ${questionText}`);
    const response = getQuestionAnswer();

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

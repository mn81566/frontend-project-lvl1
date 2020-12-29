import { init, getRandom } from '../index.js';

const isPrime = (num) => {
  const terminalValue = Math.sqrt(num);
  for (let i = 2; i <= terminalValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const prime = () => {
  const gamesRuleText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let numb = 0;

  const askQuestion = () => {
    numb = getRandom(100);
    console.log(`Question: ${numb}`);
  };

  const writeAnswerFunc = () => {
    if (isPrime(numb) === true) {
      return 'yes';
    }
    return 'no';
  };

  init(gamesRuleText, askQuestion, writeAnswerFunc);
};

export default prime;

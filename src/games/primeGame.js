import initGame from '../index.js';
import { getRandom, getWordAnswerByBool } from '../utils.js';

const isPrime = (num) => {
  const terminalValue = Math.sqrt(num);
  for (let i = 2; i <= terminalValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const gamesRuleText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrimeGameData = () => {
  const numb = getRandom(0, 100);
  const questionText = `Question: ${numb}`;

  // const rightAnswer = isPrime(numb) === true ? 'yes' : 'no';
  const rightAnswer = getWordAnswerByBool(isPrime(numb));
  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generatePrimeGameData);

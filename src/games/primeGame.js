import initGame from '../index.js';
import { getRandom } from '../utils.js';

const isPrime = (num) => {
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const gamesRuleText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrimeGameData = () => {
  const num = getRandom(0, 100);
  const questionText = String(num);

  // const rightAnswer = getWordAnswerByBool(isPrime(num));
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generatePrimeGameData);

import initGame from '../index.js';
import { getRandom, isPrime, getWordAnswerByBool } from '../utils.js';

const gamesRuleText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrimeGameData = () => {
  const numb = getRandom(100);
  const questionText = `Question: ${numb}`;

  // const rightAnswer = isPrime(numb) === true ? 'yes' : 'no';
  const rightAnswer = getWordAnswerByBool(isPrime(numb));
  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generatePrimeGameData);

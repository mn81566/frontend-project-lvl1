import initGame from '../index.js';
import { getRandom } from '../utils.js';

const getGCDByEuclid = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCDByEuclid(b, a % b);
};

const gamesRuleText = 'Find the greatest common divisor of given numbers.';

const generateGcdGameData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const questionText = `${num1} ${num2}`;

  const rightAnswer = String(getGCDByEuclid(num1, num2));

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateGcdGameData);

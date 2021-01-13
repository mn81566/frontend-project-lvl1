import initGame from '../index.js';
import { getRandom, getGCDByEuclid } from '../utils.js';

const gamesRuleText = 'Find the greatest common divisor of given numbers.';

const generateGcdGameData = () => {
  const numb1 = getRandom(100);
  const numb2 = getRandom(100);
  const questionText = `Question: ${numb1} ${numb2}`;

  const rightAnswer = getGCDByEuclid(numb1, numb2);

  return [questionText, rightAnswer];
};

export default initGame;

import initGame from '../index.js';
// import { getRandom, getWordAnswerByBool } from '../utils.js';
import { getRandom } from '../utils.js';

const isEven = (value) => value % 2 === 0;

const gamesRuleText = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEvenGameData = () => {
  const num = getRandom(0, 100);
  const questionText = String(num);

  // const rightAnswer = getWordAnswerByBool(isEven(num));
  const rightAnswer = isEven(num) ? 'yes' : 'no';

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateEvenGameData);

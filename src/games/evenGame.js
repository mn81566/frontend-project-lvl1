import initGame from '../index.js';
import { getRandom, getWordAnswerByBool } from '../utils.js';

const isEven = (value) => value % 2 === 0;

const gamesRuleText = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEvenGameData = () => {
  const numb = getRandom(98, 100);
  const questionText = `Question: ${numb}`;

  const rightAnswer = getWordAnswerByBool(isEven(numb));

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateEvenGameData);

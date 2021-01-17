import initGame from '../index.js';
import { getRandom } from '../utils.js';

const createProgressionArr = (length, firstValue, ratio) => {
  const res = [];
  let value = firstValue;

  for (let index = 0; index < length; index += 1) {
    res.push(value);
    value += ratio;
  }
  return res;
};

const gamesRuleText = 'What number is missing in the progression?';

const generateProgressionGameData = (progressionLength = 10) => {
  if (progressionLength < 5) {
    return false;
  }

  const disguiseStr = '..';
  const numbFirst = getRandom(0, 100);
  const ratio = getRandom(0, 10);
  const progressionArr = createProgressionArr(progressionLength, numbFirst, ratio);
  const randomUnnounPos = getRandom(0, progressionLength);
  const hidedValue = progressionArr[randomUnnounPos];
  // Создал новый массив, чтобы не менять исходный
  const progressionQuestionArr = [...progressionArr];
  progressionQuestionArr[randomUnnounPos] = disguiseStr;
  const questionSrtArr = progressionQuestionArr.join(' ');

  const questionText = `Question: ${questionSrtArr}`;
  const rightAnswer = String(hidedValue);

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateProgressionGameData);

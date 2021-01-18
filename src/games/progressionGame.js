import initGame from '../index.js';
import { getRandom } from '../utils.js';

const createProgressionArr = (firstValue, length, ratio) => {
  const res = [];
  let value = firstValue;

  for (let index = 0; index < length; index += 1) {
    res.push(value);
    value += ratio;
  }
  return res;
};

const gamesRuleText = 'What number is missing in the progression?';
const progressionLengthMin = 5;
const progressionLengthMax = 10;

const generateQuestion = (arr, positionHidedEl, disguiseStr = '..') => {
  const resArr = [...arr];
  resArr[positionHidedEl] = disguiseStr;
  return resArr.join(' ');
};

// const generateProgressionGameData = (progressionLengthMin = 5, progressionLengthMax = 10) => {
const generateProgressionGameData = () => {
  if (progressionLengthMin < 5) {
    return false;
  }

  const progressionLength = getRandom(progressionLengthMin, progressionLengthMax);
  // const disguiseStr = '..';
  const numFirst = getRandom(0, 100);
  const ratio = getRandom(0, 10);
  const progressionArr = createProgressionArr(numFirst, progressionLength, ratio);
  const randomUnnounPos = getRandom(0, progressionLength - 1);
  // const hidedValue = progressionArr[randomUnnounPos];
  // Создал новый массив, чтобы не менять исходный
  // const progressionQuestionArr = [...progressionArr];
  // progressionQuestionArr[randomUnnounPos] = disguiseStr;
  // const questionSrtArr = generateQuestion(progressionArr, randomUnnounPos).join(' ');

  const questionText = generateQuestion(progressionArr, randomUnnounPos);
  const rightAnswer = String(progressionArr[randomUnnounPos]);

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateProgressionGameData);

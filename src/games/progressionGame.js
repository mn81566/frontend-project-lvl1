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

const getArrWithHideEl = (arr, positionHidedEl, disguiseStr = '..') => {
  const resArr = [...arr];
  resArr[positionHidedEl] = disguiseStr;
  return resArr;
};

// const generateProgressionGameData = (progressionLength = 10) => {
const generateProgressionGameData = (progressionLengthMin = 5, progressionLengthMax = 10) => {
  if (progressionLengthMin < 5) {
    return false;
  }

  const progressionLength = getRandom(progressionLengthMin, progressionLengthMax);
  // const disguiseStr = '..';
  const numbFirst = getRandom(0, 100);
  const ratio = getRandom(0, 10);
  const progressionArr = createProgressionArr(numbFirst, progressionLength, ratio);
  const randomUnnounPos = getRandom(0, progressionLength - 1);
  const hidedValue = progressionArr[randomUnnounPos];
  // Создал новый массив, чтобы не менять исходный
  // const progressionQuestionArr = [...progressionArr];
  // progressionQuestionArr[randomUnnounPos] = disguiseStr;
  const questionSrtArr = getArrWithHideEl(progressionArr, randomUnnounPos).join(' ');

  const questionText = `${questionSrtArr}`;
  const rightAnswer = String(hidedValue);

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateProgressionGameData);

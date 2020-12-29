import { init, getRandom } from '../index.js';

const createProgressionArr = (length, firstValue, ratio) => {
  const res = [];
  let value = firstValue;

  for (let index = 0; index < length; index += 1) {
    res.push(value);
    value += ratio;
  }
  return res;
};

const progression = (progressionLength = 10) => {
  if (progressionLength < 5) {
    return;
  }

  const gamesRuleText = 'What number is missing in the progression?';
  let hidedValue = 0;

  const askQuestion = () => {
    const disguiseStr = '..';
    const numbFirst = getRandom(100);
    const ratio = getRandom(10);
    const progressionArr = createProgressionArr(progressionLength, numbFirst, ratio);
    const randomUnnounPos = getRandom(progressionLength);
    hidedValue = progressionArr[randomUnnounPos];
    // или сделать новую переменную массив со скрытым значением?
    progressionArr[randomUnnounPos] = disguiseStr;
    const questionSrtArr = progressionArr.join(' ');

    console.log(`Question: ${questionSrtArr}`);
  };
  const writeAnswerFunc = () => hidedValue;

  init(gamesRuleText, askQuestion, writeAnswerFunc);
};

export default progression;

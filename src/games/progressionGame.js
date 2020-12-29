import { init, getRandom } from '../index.js';

// const Euclid = (a, b) => {
//   if (b === 0) {
//     return a;
//   }
//   //  eslint-disable-next-line
//   return Euclid(b, a % b);
// };

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
  let numbFirst = 0;
  let ratio = 0;
  let randomUnnounPos = 0;
  let hidedValue = 0;
  let progressionArr = [];
  let questionSrtArr = '';
  const disguiseStr = '..';

  const askQuestion = () => {
    numbFirst = getRandom(100);
    ratio = getRandom(10);
    progressionArr = createProgressionArr(progressionLength, numbFirst, ratio);
    randomUnnounPos = getRandom(progressionLength);
    hidedValue = progressionArr[randomUnnounPos];
    progressionArr[randomUnnounPos] = disguiseStr;
    questionSrtArr = progressionArr.join(' ');

    console.log(`Question: ${questionSrtArr}`);
  };

  const writeAnswerFunc = () => hidedValue;

  init(gamesRuleText, askQuestion, writeAnswerFunc);
};

export default progression;

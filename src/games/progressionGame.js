import initGame from '../index.js';
import { getRandom } from '../utils.js';

const createProgression = (firstProgressionEl, length, ratio) => {
  const progression = [];
  let progressionEl = firstProgressionEl;

  for (let index = 0; index < length; index += 1) {
    progression.push(progressionEl);
    progressionEl += ratio;
  }
  return progression;
};

const gamesRuleText = 'What number is missing in the progression?';
const progressionLengthMin = 5;
const progressionLengthMax = 10;

const generateQuestion = (progression, positionHidedEl, disguise = '..') => {
  const hidedElProgression = [...progression];
  hidedElProgression[positionHidedEl] = disguise;
  return hidedElProgression.join(' ');
};

// const generateProgressionGameData = (progressionLengthMin = 5, progressionLengthMax = 10) => {
const generateProgressionGameData = () => {
  const progressionLength = getRandom(progressionLengthMin, progressionLengthMax);
  // const disguise = '..';
  const numFirst = getRandom(0, 100);
  const ratio = getRandom(0, 10);
  const progression = createProgression(numFirst, progressionLength, ratio);
  const randomUnnounPos = getRandom(0, progressionLength - 1);
  // const hidedValue = progression[randomUnnounPos];
  // Создал новый массив, чтобы не менять исходный
  // const progressionQuestion = [...progression];
  // progressionQuestion[randomUnnounPos] = disguise;
  // const questionSrt = generateQuestion(progression, randomUnnounPos).join(' ');

  const questionText = generateQuestion(progression, randomUnnounPos);
  const rightAnswer = String(progression[randomUnnounPos]);

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateProgressionGameData);

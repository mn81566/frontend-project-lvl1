import { init, getRandom } from '../index.js';

const Euclid = (a, b) => {
  if (b === 0) {
    return a;
  }
  //  eslint-disable-next-line
  return Euclid(b, a % b);
};

const gcd = () => {
  const gamesRuleText = 'Find the greatest common divisor of given numbers.';
  let numb1 = 0;
  let numb2 = 0;

  const askQuestion = () => {
    numb1 = getRandom(100);
    numb2 = getRandom(100);
    console.log(`Question: ${numb1} ${numb2}`);
  };
  // eslint-disable-next-line no-eval
  const writeAnswerFunc = () => Euclid(numb1, numb2);

  init(gamesRuleText, askQuestion, writeAnswerFunc);
};

export default gcd;

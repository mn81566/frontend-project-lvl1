import { init, getRandom } from '../index.js';

const isEven = (value) => {
  if (value % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  const gamesRuleText = 'Answer "yes" if the number is even, otherwise answer "no".';
  let numb = 0;

  const askQuestion = () => {
    numb = getRandom(100);
    console.log(`Question: ${numb}`);
  };

  const writeAnswerFunc = () => isEven(numb);

  init(gamesRuleText, askQuestion, writeAnswerFunc);
};

export default even;
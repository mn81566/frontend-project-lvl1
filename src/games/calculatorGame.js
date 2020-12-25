// import index from './index.js';
// import getRandom from './index.js';
import { init, getRandom } from '../index.js';

const calc = () => {
  const gamesRuleText = 'What is the result of the expression?';
  let operand1 = 0;
  let operand2 = 0;
  let operator = '';
  const operatorArr = ['+', '-', '*'];

  const askQuestion = () => {
    operand1 = getRandom(100);
    operand2 = getRandom(100);
    operator = operatorArr[getRandom(3)];
    console.log(`Question: ${operand1} ${operator} ${operand2}`);
  };
  // eslint-disable-next-line no-eval
  const writeAnswerFunc = () => eval(`${operand1} ${operator} ${operand2}`);

  init(gamesRuleText, askQuestion, writeAnswerFunc);
};

export default calc;

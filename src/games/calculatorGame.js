// import index from './index.js';
// import { getRandom } from './index.js';
import readlineSync from 'readline-sync';
import { init } from '../index.js';
import { getRandom } from '../utils.js';

const getQuestionResponse = () => {
  const res = readlineSync.question('Your answer: ');
  return Number(res);
};
const isRight = (response, writeAnswer) => response === writeAnswer;

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
    // const questionText = `Question: ${operand1} ${operator} ${operand2}`;

    // return questionText;
  };
  // eslint-disable-next-line no-eval
  const writeAnswerFunc = () => eval(`${operand1} ${operator} ${operand2}`);
  const isRightRes = isRight(getQuestionResponse, writeAnswerFunc);

  init(gamesRuleText, askQuestion, isRightRes);
};

export default calc;

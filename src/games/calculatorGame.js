// import index from './index.js';
// import { getRandom } from './index.js';
// import readlineSync from 'readline-sync';
import { init } from '../index.js';
import { getRandom } from '../utils.js';

// const getQuestionResponse = () => {
//   const res = readlineSync.question('Your answer: ');
//   return Number(res);
// };
const isRight = (response, writeAnswer) => Number(response) === writeAnswer;

export const calc = () => {
  const gamesRuleText = 'What is the result of the expression?';
  // let operand1 = 0;
  // let operand2 = 0;
  // let operator = '';
  const operatorArr = ['+', '-', '*'];
  const operand1 = getRandom(100);
  const operand2 = getRandom(100);
  const operator = operatorArr[getRandom(3)];
  const questionText = `Question: ${operand1} ${operator} ${operand2}`;

  // eslint-disable-next-line no-eval
  const getWriteAnswer = () => eval(`${operand1} ${operator} ${operand2}`);
  const writeAnswer = getWriteAnswer();
  // const isRightRes = isRight(getQuestionResponse, writeAnswerFunc);

  // init(gamesRuleText, questionText, isRight, writeAnswer);
  return [gamesRuleText, questionText, isRight, writeAnswer];
};

// export default calc;
// export default init('asd', 'asdsa', true, 5);
export default init(calc);

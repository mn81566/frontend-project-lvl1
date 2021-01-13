import { init } from '../index.js';
import { getRandom, calcWithStringOperator } from '../utils.js';

const isRight = (response, writeAnswer) => Number(response) === writeAnswer;

export const calc = () => {
  const gamesRuleText = 'What is the result of the expression?';
  const operand1 = getRandom(100);
  const operand2 = getRandom(100);
  const operatorArr = ['+', '-', '*'];
  const operator = operatorArr[getRandom(3)];
  const questionText = `Question: ${operand1} ${operator} ${operand2}`;

  const getWriteAnswer = () => calcWithStringOperator(operand1, operator, operand2);
  const writeAnswer = getWriteAnswer();

  return [gamesRuleText, questionText, isRight, writeAnswer];
};

export default init(calc);

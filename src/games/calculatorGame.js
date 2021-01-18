import initGame from '../index.js';
import { getRandom } from '../utils.js';

const calcWithStringOperator = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const gamesRuleText = 'What is the result of the expression?';

const generateCalcGameData = () => {
  const operand1 = getRandom(100, -100);
  const operand2 = getRandom(0, 100);
  const operatorArr = ['+', '-', '*'];
  const operator = operatorArr[getRandom(0, 2)];
  const questionText = `${operand1} ${operator} ${operand2}`;

  // const getWriteAnswer = () => calcWithStringOperator(operand1, operator, operand2);
  const rightAnswer = String(calcWithStringOperator(operand1, operator, operand2));

  return [questionText, rightAnswer];
};

export default () => initGame(gamesRuleText, generateCalcGameData);

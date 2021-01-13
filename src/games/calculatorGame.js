import initGame from '../index.js';
import { getRandom, calcWithStringOperator } from '../utils.js';

const gamesRuleText = 'What is the result of the expression?';

const generateCalcGameData = () => {
  const operand1 = getRandom(100);
  const operand2 = getRandom(100);
  const operatorArr = ['+', '-', '*'];
  const operator = operatorArr[getRandom(3)];
  const questionText = `Question: ${operand1} ${operator} ${operand2}`;

  // const getWriteAnswer = () => calcWithStringOperator(operand1, operator, operand2);
  const rightAnswer = String(calcWithStringOperator(operand1, operator, operand2));

  return [questionText, rightAnswer];
};

export default initGame(gamesRuleText, generateCalcGameData);

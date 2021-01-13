export const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));
export const isEven = (value) => value % 2 === 0;

export const getWordAnswerByBool = (boolQuestion, wordTrue = 'yes', wordFalse = 'no') => {
  if (boolQuestion === true) {
    return wordTrue;
  }
  return wordFalse;
};

export const calcWithStringOperator = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return Number(operand1) + Number(operand2);
    case '-':
      return Number(operand1) - Number(operand2);
    case '*':
      return Number(operand1) * Number(operand2);
    default:
      break;
  }
  return false;
};

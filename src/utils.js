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

export const isPrime = (num) => {
  const terminalValue = Math.sqrt(num);
  for (let i = 2; i <= terminalValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const getGCDByEuclid = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCDByEuclid(b, a % b);
};

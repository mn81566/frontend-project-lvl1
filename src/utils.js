export const getRandom = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

// Используется в 2-х играх. Может оставить здесь?
export const getWordAnswerByBool = (boolQuestion, wordTrue = 'yes', wordFalse = 'no') => {
  if (boolQuestion === true) {
    return wordTrue;
  }
  return wordFalse;
};

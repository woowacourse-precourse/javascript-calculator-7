const addNumbers = userInput => {
  const REGULAR_EXPRESSION = /[^0-9]/g;
  const REMOVE_STR = userInput.replace(REGULAR_EXPRESSION, '');

  const SPLIT_NUMBERS = REMOVE_STR.split('');
  let totalNumberSum = 0;

  for (let i = 0; i < SPLIT_NUMBERS.length; i += 1) {
    totalNumberSum += parseInt(SPLIT_NUMBERS[i], 10);
  }
  return totalNumberSum;
};

export default addNumbers;

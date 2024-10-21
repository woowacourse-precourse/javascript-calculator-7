const calculate = numbersArray => {
  return numbersArray.reduce(
    (prefixSum, currentNumber) => prefixSum + currentNumber,
    0,
  );
};

export default calculate;

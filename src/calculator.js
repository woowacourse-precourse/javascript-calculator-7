function checkNumbers(parsedArray) {
  return parsedArray.map((value) => {
    const number = Number(value);

    if (Number.isNaN(number))
      throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');

    return number;
  });
}

function sumCalculation(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

export { checkNumbers, sumCalculation };

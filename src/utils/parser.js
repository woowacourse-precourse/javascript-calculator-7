function handleNaNCheck(numbers) {
  if (numbers.some(isNaN)) {
    handleError("숫자가 아닌 값이 포함되어 있습니다. 구분자를 확인해주세요.");
    return [];
  }
  return numbers;
}

function parseInput(input) {
  let delimiter = /[,:]/;
  let numbers = input;

  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\\n");
    delimiter = input.substring(2, delimiterEndIndex);
    numbers = input.substring(delimiterEndIndex + 2);
  }

  const parsedNumbers = numbers.split(delimiter).map(Number);
  return handleNaNCheck(parsedNumbers);
}

export default parseInput;

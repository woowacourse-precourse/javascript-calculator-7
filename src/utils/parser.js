function parseInput(input) {
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\\n");
    const delimiter = input.substring(2, delimiterEndIndex);
    const numbers = input.substring(delimiterEndIndex + 2);
    return numbers.split(delimiter).map(Number);
  }
  return input.split(/[,:]/).map(Number);
}

export default parseInput;

export const processCustomDelimiter = (inputValue, processNumbers) => {
  const normalizedInput = inputValue.replace("\\n", "\n");
  const delimiterEndIndex = normalizedInput.indexOf("\n");

  if (delimiterEndIndex === -1) {
    throw new Error("구분자가 유효하지 않습니다.");
  }

  const delimiter = normalizedInput.slice(2, delimiterEndIndex);
  const splitValues = normalizedInput
    .slice(delimiterEndIndex + 1)
    .split(delimiter);

  return processNumbers(splitValues);
};

export const processDefaultDelimiter = (inputValue, processNumbers) => {
  const delimiters = [",", ":"];
  const splitNumbers = inputValue.split(new RegExp(`[${delimiters.join("")}]`));

  if (splitNumbers.length === 0) {
    throw new Error("구분자가 없거나 유효하지 않습니다.");
  }

  return processNumbers(splitNumbers);
};

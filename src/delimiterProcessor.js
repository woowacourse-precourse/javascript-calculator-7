export const processCustomDelimiter = (inputValue, processNumbers) => {
  const normalizedInput = inputValue.replace("\\n", "\n");
  const delimiterEndIndex = normalizedInput.indexOf("\n");
  if (delimiterEndIndex === -1) {
    throw new Error("구분자가 유효하지 않습니다.");
  }

  const delimiter = normalizedInput.substring(2, delimiterEndIndex);
  const splitValues = normalizedInput
    .substring(delimiterEndIndex + 1)
    .split(delimiter);
  return processNumbers(splitValues);
};

export const processDefaultDelimiter = (inputValue, processNumbers) => {
  if (!inputValue.includes(",") && !inputValue.includes(":")) {
    throw new Error("구분자가 없거나 유효하지 않습니다.");
  }

  const splitByComma = inputValue.split(",");
  const splitNumbers = splitByComma.flatMap((item) => item.split(":"));
  return processNumbers(splitNumbers);
};

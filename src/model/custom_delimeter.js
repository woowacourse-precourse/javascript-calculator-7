export const isHaveCustomDelimiter = (input) => {
  if (input.startsWith("//") && input.indexOf("\\n") !== -1) {
    return true;
  }
  return false;
};

export const getDelimiter = (input) => {
  const lastIndex = input.indexOf("\\n");
  const delimiter = input.slice(2, lastIndex);
  return delimiter;
};
// 구분자 찾기

export const splitByDelimiter = (input, delimiter) => {
  const formattedInput = input.split(delimiter);
  return formattedInput;
};

export const getInputExecptDelimiter = (input) => {
  const lastIndex = input.indexOf("\\n");
  const inputExecptDelimiter = input.slice(lastIndex + 2);
  return inputExecptDelimiter;
};

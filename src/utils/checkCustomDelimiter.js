const checkCustomDelimiter = (input, delimiters) => {
  if (input.startsWith("//") && input.includes("\\n")) {
    const index = input.indexOf("\\n");
    const customDelimiter = input.slice(2, index);
    delimiters.push(...customDelimiter.split(""));

    return input.slice(index + 2);
  } else if (input.includes("//") || input.includes("\\n")) {
    throw new Error(
      "[ERROR] 커스텀 구분자 지정은 문자열 앞부분의 “//”와 “\\n” 사이에 작성해주세요."
    );
  }

  return input;
};

export default checkCustomDelimiter;

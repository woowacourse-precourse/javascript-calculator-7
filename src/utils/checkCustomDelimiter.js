const checkCustomDelimiter = (input, delimiters) => {
  if (input.startsWith("//") && input.includes("\\n")) {
    const index = input.indexOf("\\n");
    const customDelimiter = input.slice(2, index);
    delimiters.push(...customDelimiter.split(""));

    return input.slice(index + 2);
  }

  return input;
};

export default checkCustomDelimiter;

export const getCustomDelimiter = (message) => {
  let customDelimiter;
  if (message.startsWith("//") && message.slice(3, 5) == "\n") {
    customDelimiter = message[2];
  }
  return customDelimiter;
};

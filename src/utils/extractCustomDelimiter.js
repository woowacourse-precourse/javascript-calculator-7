const extractCustomDelimiter = (input, index) => {
  const customDelimiter = input.slice(2, index);
  return customDelimiter.split("");
};

export default extractCustomDelimiter;

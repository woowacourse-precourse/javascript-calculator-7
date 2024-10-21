const extractNum = (input) => {
  const splitInput = input.split(/[,:]/);

  return splitInput.map(Number);
};

export default extractNum;

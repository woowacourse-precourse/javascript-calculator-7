const findCustomSeparator = (input) => {
  let customSeparator = null;

  const customSeparatorMatch = input.match(/^\/\/(.)\n/);

  if (customSeparatorMatch) {
    customSeparator = customSeparatorMatch[1];
  }

  return customSeparator;
};

export default findCustomSeparator;

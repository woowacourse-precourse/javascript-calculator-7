const customSeparatorChecker = (input, customSeplength) => {
  if (
    customSeplength <= input.length &&
    input.startsWith('//') &&
    input[3] === '\\' &&
    input[4] === 'n'
  ) {
    return true;
  }
  return false;
};

export const inputNumberValidation = (input) => {
  const MIN_CUSTOM_SEP_LENGTH = 5;
  let defaultSeparator = ',:';

  if (customSeparatorChecker(input, MIN_CUSTOM_SEP_LENGTH) === true) {
    defaultSeparator += input[2];
    input = input.slice(MIN_CUSTOM_SEP_LENGTH);
  }
  const validInputChar = new RegExp(`^[0-9${defaultSeparator}]*$`);

  if (validInputChar.test(input) === true) {
    return null;
  } else {
    throw new Error('[ERROR]');
  }
};

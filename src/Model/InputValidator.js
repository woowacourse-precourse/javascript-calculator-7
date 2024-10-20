const Custom_Separator_Checker = (input, Custom_Sep_length) => {
  if (
    Custom_Sep_length <= input.length &&
    input.startsWith('//') &&
    input[3] === '\\' &&
    input[4] === 'n'
  ) {
    return true;
  }
  return false;
};

export const InputNumberValidation = (input) => {
  const MIN_CUSTOM_SEP_LENGTH = 5;
  let Default_separator = ',:';

  if (Custom_Separator_Checker(input, MIN_CUSTOM_SEP_LENGTH) === true) {
    Default_separator += input[2];
    input = input.slice(MIN_CUSTOM_SEP_LENGTH);
  }
  const VALID_INPUT_CHAR = new RegExp(`^[0-9${Default_separator}]*$`);

  if (VALID_INPUT_CHAR.test(input) === true) {
    return null;
  } else {
    throw new Error('[ERROR]');
  }
};

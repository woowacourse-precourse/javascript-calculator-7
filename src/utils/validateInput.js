const validateInput = {
  isEmpty: (input) => {
    return !input.length || input === "";
  },
  isOnlyStringOrNumber: (input) => {
    return !input.match(/[^a-zA-Z0-9]/g);
  },
  isCustomSeparator: (input) => {
    return input.startsWith("//") && !!input.match(/\/\/.+\\n/g);
  },
  isDuplicateCustomSeparator: (input) => {
    return input.split("\\n").length > 2;
  },
  isNotNumber: (input) => {
    return input.some((value) => isNaN(value));
  },
  isNegativeNumber: (input) => {
    return input.some((value) => Number(value) < 0);
  },
};

export const {
  isNotNumber,
  isNegativeNumber,
  isEmpty,
  isOnlyStringOrNumber,
  isCustomSeparator,
  isDuplicateCustomSeparator,
} = validateInput;

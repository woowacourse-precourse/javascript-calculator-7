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
};

export const { isEmpty, isOnlyStringOrNumber } = validateInput;

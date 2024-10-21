const validateInput = {
  isEmpty: (input) => {
    return !input.length || input === "";
  },
  isOnlyStringOrNumber: (input) => {
    return !input.match(/[^a-zA-Z0-9]/g);
  },
};

export const { isEmpty, isOnlyStringOrNumber } = validateInput;

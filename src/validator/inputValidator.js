const inputValidator = {
  emptyInput: (inputString) => {
    if (inputString === "" || inputString.trim() === "") {
      throw new Error("[ERROR] 빈 값을 입력할 수 없습니다.");
    }
  },

  customDelimiter: (inputString) => {
    const customDelimiterPattern = /^\/\//;
    const customDelimiterMatch = inputString.match(customDelimiterPattern);
    if (customDelimiterMatch && !inputString.includes("\\n")) {
      throw new Error("[ERROR] 커스텀 구분자가 올바르지 않습니다. \\n이 포함되어야 합니다.");
    }
  },
};

export default inputValidator;

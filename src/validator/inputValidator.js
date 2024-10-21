const inputValidator = {
  emptyInput: (inputString) => {
    if (inputString === "" || inputString.trim() === "") {
      throw new Error("[ERROR] 빈 값을 입력할 수 없습니다.");
    }
  },
};

export default inputValidator;

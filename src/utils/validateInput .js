const validateInput = (input) => {
  if (!/[0-9]/.test(input)) {
    throw new Error(
      "[ERROR] 입력한 문자열에 양수가 하나 이상 존재해야 합니다."
    );
  }
};

export default validateInput;

class ErrorHandler {
  static validatePositiveNumbers(arr) {
    for (const item of arr) {
      const number = Number(item);
      if (isNaN(number) || number <= 0) {
        throw new Error('[ERROR] 잘못된 입력입니다.');
      }
    }
  }
}

export default ErrorHandler;

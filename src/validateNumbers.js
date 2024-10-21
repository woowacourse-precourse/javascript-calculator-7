export function validateNumbers(numbers) {
  for (const num of numbers) {
    if (!Number.isInteger(num)) {
      throw new Error("[ERROR] 정수가 아닌 입력값이 포함되어 있습니다.");
    }
    if (num < 0) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다.");
    }
  }
}

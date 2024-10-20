import extractCustomSeparator from "./extractCustomSeparator.js";
import splitNumbers from "./splitNumbers.js";

export async function validatePositiveNumber(userInputValue) {
  const { separators, inputWithoutSeparator } = await extractCustomSeparator(userInputValue);
  const numbers = splitNumbers(separators, inputWithoutSeparator);

	const allPositive = numbers.every((number) => {
		const num = parseInt(number, 10);
		return num > 0;
	});

	if (!allPositive) {
		throw new Error("[ERROR] 양수가 아닌 값이 입력되었습니다.");
	}
}

export async function validateSeparatorFormat(userInputValue) {
	const { separators, inputWithoutSeparator } = await extractCustomSeparator(userInputValue);
  const validPattern = new RegExp(`^[0-9${separators.join("")},:]*$`);

  if (!validPattern.test(inputWithoutSeparator)) {
    throw new Error("[ERROR] 입력된 구분자 또는 문자열이 유효하지 않습니다.");
  }
}

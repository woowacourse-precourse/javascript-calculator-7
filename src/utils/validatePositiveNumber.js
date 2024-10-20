import extractCustomSeparator from "./extractCustomSeparator.js";
import splitNumbers from "./splitNumbers.js";

export default async function validatePositiveNumber(userInputValue) {
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

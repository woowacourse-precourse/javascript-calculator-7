export default async function validatePositiveNumber(userInputValue) {
	const customDelimiterPattern = /^\/\/(.)\\n/;
	let separators = [",", ":"];

	const customDelimiterMatch = userInputValue.match(customDelimiterPattern);
	if (customDelimiterMatch) {
		separators.push(customDelimiterMatch[1]);
		userInputValue = userInputValue.substring(customDelimiterMatch[0].length);
	}

	const delimiterRegex = new RegExp(`[${separators.join("")}]`);
	const numbers = userInputValue.split(delimiterRegex).filter(Boolean);

	const allPositive = numbers.every((number) => {
		const num = parseInt(number, 10);
		return num > 0;
	});

	if (!allPositive) {
		throw new Error("[ERROR] 양수가 아닌 값이 입력되었습니다.");
	}
}

export default async function validateSeparatorFormat(userInputValue) {
	const customSeparatorPattern = /^\/\/(.)\\n/;
	let contentAfterCustomSeparator = userInputValue;
	let separators = [":", ","];

	const customMatch = userInputValue.match(customSeparatorPattern);
	if (customMatch) {
		separators = customMatch[1];
		contentAfterCustomSeparator = userInputValue.slice(customMatch[0].length);
	}

	const validPattern = new RegExp(`^[0-9${separators ? separators : ""},:]*$`);

	if (!validPattern.test(contentAfterCustomSeparator)) {
		throw new Error("[ERROR] 입력된 구분자 또는 문자열이 유효하지 않습니다.");
	}
}

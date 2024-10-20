import extractCustomSeparator from "./extractCustomSeparator.js";

export default async function validateSeparatorFormat(userInputValue) {
	const { separators, inputWithoutSeparator } = await extractCustomSeparator(userInputValue);
  const validPattern = new RegExp(`^[0-9${separators.join("")},:]*$`);

  if (!validPattern.test(inputWithoutSeparator)) {
    throw new Error("[ERROR] 입력된 구분자 또는 문자열이 유효하지 않습니다.");
  }
}

export function hasNegative(str) {
	const regex = /-\d+/;
	const hasNegative = regex.test(str);
	if (hasNegative) {
		throw new Error('[ERROR]: 양수만 입력할 수 있어요.');
	}
	return;
}

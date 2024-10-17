export function splitByDefaultSeparators(str) {
	const regex = /-\d+/;
	const hasNegative = regex.test(str);
	if (hasNegative) {
		throw new Error('[ERROR]');
	}
	const numbers = str.split(/,|:/).map(Number);
	return numbers.reduce((a, b) => a + b, 0);
}

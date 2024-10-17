export function splitByDefaultSeparators(str) {
	const regex = /-\d+/;
	const hasNegative = regex.test(str);
	if (hasNegative) {
		throw new Error('[ERROR]');
	}
	return str.split(/,|:/);
}

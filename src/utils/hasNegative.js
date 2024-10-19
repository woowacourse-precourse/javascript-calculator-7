export function hasNegative(str) {
	const regex = /-\d+/;
	return regex.test(str);
}

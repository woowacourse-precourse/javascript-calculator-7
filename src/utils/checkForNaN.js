export function checkForNaN(value) {
	return value.some((v) => isNaN(v));
}

export function splitByCustomSeparator(str) {
	const regex = /\/\/(.*?)\\n/;
	const match = str.match(regex);

	if (match) {
		const separator = match[1];
		const remainingStr = str.split(match[0])[1];
		return remainingStr
			.split(separator)
			.map(Number)
			.reduce((a, b) => a + b, 0);
	}
	return null;
}

export const extractCustomSeparator = (input) => {
	if (hasCustomSeparator(input)) {
		const match = input.match(/^\/\/(.*?)\r?\n/);
		if (match) {
			return match[1];
		}
	}
	return null;
};

const hasCustomSeparator = (input) => {
	return /^\/\/(.*?)\r?\n/.test(input);
};

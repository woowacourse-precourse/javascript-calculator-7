export const extractCustomSeparators = (input) => {
	if (hasCustomSeparator(input)) {
		const customSeparator = getCustomSeparator(input)[1];
		return customSeparator;
	}
	return null;
};

const hasCustomSeparator = (input) => /^\/\/(.*?)((?:\r?\n)|\\n)/.test(input);

const getCustomSeparator = (input) => input.match(/^\/\/(.*?)((?:\r?\n)|\\n)/);

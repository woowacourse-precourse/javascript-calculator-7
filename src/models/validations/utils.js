export const extractCustomSeperators = (input) => {
	const customSeperator = input.match(/\/\/(.*)\n/);
	if (customSeperator) {
		return customSeperator[1];
	} else {
		return '';
	}
};

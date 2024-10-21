// src/utils/escapeRegExp.js

export const escapeRegExp = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const errorString = (error) => `[ERROR] ${error}`;

export const isNumber = (num) => !Number.isNaN(num);

export const isPositiveNumber = (num) => num >= 0;

export const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

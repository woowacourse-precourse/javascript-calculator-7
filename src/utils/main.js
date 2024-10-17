import { DEFAULT_SEPARATORS } from '../constants.js';

export const checkIsNormal = (line) => !line.split('').some((char) => isNaN(char) && !DEFAULT_SEPARATORS.includes(char));

export const divideCustom = (str) => [str.substring(0, 5), str.substring(5)];

export const addCustomSeparator = (separaters, customPart) => separaters.push(customPart[2]);

export const separate = (str, separators) => separators.reduce((acc, cur) => acc.replaceAll(cur, ','), str).split(',').map(Number);

export const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

export const sumString = (line, separators) => sum(separate(line, separators));

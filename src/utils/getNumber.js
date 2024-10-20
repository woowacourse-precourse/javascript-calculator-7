import { SEPARATORS } from "../constants/separator.js";
const escapeRegExp = (string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const getNumber = (input) => {
    const regexSeparator = new RegExp(SEPARATORS.map(escapeRegExp).join('|'));
    return input.split(regexSeparator);
}
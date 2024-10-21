import {handleCustomSeparatorError} from "./errorHandler.js";

const DEFAULT_SEPARATOR_REGEX = /[:,]/g

export function parseInput(param) {
    const isCustom = param.startsWith("//") && param.includes("\\n");
    if (isCustom) {
        return sliceString(param);
    }
    return {customSeparator: null, slicedString: param};
}

export function sliceString(param) {
    const lastIdx = param.indexOf("\\n");
    const customSeparator = param.slice(2, lastIdx);
    handleCustomSeparatorError(customSeparator)
    const slicedString = param.slice(lastIdx + 2);
    return {customSeparator, slicedString};
}

export function preprocessing(param, customSeparator) {
    const argument = customSeparator ? new RegExp(`${customSeparator}|:|,`, 'g') : DEFAULT_SEPARATOR_REGEX;
    return param.split(argument);
}

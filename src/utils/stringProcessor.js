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
    const slicedString = param.slice(lastIdx + 2);
    return {customSeparator, slicedString};
}

export function preprocessing(param, customSeparator) {
    const defaultSeparator = /[:,]/g;
    const argument = customSeparator ? new RegExp(`${customSeparator}|:|,`, 'g') : defaultSeparator;
    return param.split(argument);
}

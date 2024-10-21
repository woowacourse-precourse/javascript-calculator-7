export function isCustom(param) {
    const lastIdx = param.indexOf("\\n");
    return param.startsWith("//") && lastIdx !== -1;
}

export function sliceString(param) {
    const lastIdx = param.indexOf("\\n");
    const customSeparator = param.slice(2, lastIdx);
    return {
        customSeparator,
        slicedString: param.slice(lastIdx + 2)
    };
}

export function preprocessing(param, customSeparator) {
    const defaultSeparator = /[:,]/g;
    const argument = customSeparator
        ? new RegExp(`[${customSeparator}:,]`, 'g')
        : defaultSeparator;

    return param.split(argument);
}

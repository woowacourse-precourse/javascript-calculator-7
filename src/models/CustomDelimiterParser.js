class CustomDelimiterParser {
    getSeparator(allString) {
    let startIdx = allString.indexOf('//');
    let lastIdx = allString.indexOf('\n');

    if (startIdx < 0 || lastIdx < 0) return '';
    return allString.slice(startIdx + 2, lastIdx);
}
}

export default CustomDelimiterParser;
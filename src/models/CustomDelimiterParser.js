class CustomDelimiterParser {
    getSeparator(allString) {
    let startIdx = allString.indexOf('//');
    let lastIdx = allString.indexOf('\\n');

    if (startIdx < 0 || lastIdx < 0) return '';
    return allString.slice(startIdx + 2, lastIdx);
}

deleteCustomDelimiter(str) {
    const removeIndex = str.indexOf('//');

    if (removeIndex === -1) return str;

    const newLineIndex = str.indexOf('\\n',removeIndex);
    if (newLineIndex === -1) {
    throw new Error('[ERROR] 잘못된 커스텀 구분자 형식입니다.');
    }

    return str.slice(0, removeIndex) + str.slice(newLineIndex + 2);
}

}

export default CustomDelimiterParser;
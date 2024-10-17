class PatternUtil {
  static findPattern(str, pattern) {
    return [...str.matchAll(pattern)];
  }

  static removePattern(str, patternList) {
    let newStr = str;
    patternList.forEach((pattern) => {
      newStr = newStr.replaceAll(pattern, '');
    });

    return newStr;
  }
}

export default PatternUtil;

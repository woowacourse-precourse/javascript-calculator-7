class DelimiterParser {
  parse(input) {
    const customDelimiter = /^\/\/(.)\n(.*)/; // (.)은 커스텀 구분자 사이에 있는 하나의 문자를 의미하며 (.*)은 커스텀 구분자 이후의 문자열을 의미한다.
    const match = input.match(customDelimiter);

    if (match) {
      const [, delimiter, numbers] = match;

      // 커스텀 구분자가 \인 경우, \\로 변환
      const escapedDelimiter = delimiter === "\\" ? "\\\\" : delimiter;

      return {
        numberStrings: numbers.split(new RegExp(`[${escapedDelimiter},:]`)),
        customDelimiter: delimiter,
      };
    }

    return {
      numberStrings: input.split(/[,:]/),
      customDelimiter: null,
    };
  }
}

export default DelimiterParser;

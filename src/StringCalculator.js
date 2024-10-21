class StringCalculatorUtils {
  getParsedNumberList(restStr, delimiterList) {
    let parsedList = restStr.split(this.getDelimiterRegex(delimiterList));

    const numberList = parsedList.map((elem) => {
      const numElem = Number(elem);

      if (isNaN(numElem)) {
        this.makeError(
          `구분자로 기준으로 분리된 것은 숫자여야합니다. ${elem}은 숫자가 아닙니다.`
        );
      }
      return numElem;
    });

    numberList.forEach((elem) => {
      if (elem < 0) {
        this.makeError('음수가 아닌 양수여야 합니다.');
      }
    });
    return numberList;
  }

  getSplitInputStr(input) {
    const doubleSlash = /^\/\//; // 문자열이 //로 시작하는지 확인
    const newLineChar = /\\n/; // 보기에는 \n

    const hasCustomDelimiter =
      doubleSlash.test(input) && newLineChar.test(input);

    if (!hasCustomDelimiter) {
      return { customDelimiterStr: null, restStr: input };
    }

    let [customDelimiterStr, restStr] = input.split(newLineChar, 2);
    customDelimiterStr = customDelimiterStr.split(doubleSlash)[1];

    if (customDelimiterStr.length === 0) {
      this.makeError('커스텀 구분자를 //와 \\n 사이에 입력해주세요.');
    }

    if (restStr.length === 0) {
      this.makeError('계산할 문자열을 입력해주세요');
    }

    return { customDelimiterStr, restStr };
  }

  getDelimiterRegex(delimiterCharList) {
    let regexString = delimiterCharList
      .map((elem) => (elem === '\\' ? '\\\\' : elem))
      .join('|');

    return new RegExp(regexString);
  }

  sum(numberList) {
    let result = numberList.reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    }, 0);

    return result;
  }

  makeError(comment) {
    throw new Error(`[ERROR]:${comment}`);
  }
}

export default StringCalculatorUtils;

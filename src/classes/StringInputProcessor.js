class StringInputProcessor {
  // 입력 처리
  static processInput(input) {
    if (!input) {
      return 0;
    }

    let delimiter = /[,:]/;
    let numbersString = input;

    if (input.startsWith('//')) {
      const parts = input.split('\\n');
      if (parts.length < 2) {
        throw new Error('[ERROR] 잘못된 구분자 설정입니다.');
      }

      delimiter = this.addDelimiter(delimiter, parts[0][2]);
      numbersString = parts[1];
    }

    if (!numbersString.trim()) {
      return 0;
    }

    const numbersArray = numbersString.split(delimiter).map(Number);
    return numbersArray;
  }

  // 커스텀 구분자 추가
  static addDelimiter(existingRegExp, newDelimiter) {
    const pattern = `${existingRegExp.source.replace(
      /[\[\]]/g,
      ''
    )}${newDelimiter}`;
    return new RegExp(`[${pattern}]`);
  }
}

export default StringInputProcessor;

class Parser {
  constructor() {
    this.defaultSeparators = [',', ':'];
  }

  parseInput(input) {
    const separators = [...this.defaultSeparators];
    let mainString = input;

    if (input.startsWith('//')) {
      const customIndex = input.indexOf('\\n');
      if (customIndex !== 3) {
        throw new Error('[ERROR] 커스텀 구분자를 잘못 입력했습니다.');
      }
      const customSeparator = input[2];
      separators.push(customSeparator);
      mainString = input.substring(customIndex + 2);
    }

    if (mainString.trim() === '') {
      throw new Error('[ERROR] 빈 문자열을 입력할 수 없습니다.');
    }

    return { separators, mainString };
  }
}

export default Parser;

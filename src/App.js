class App {
  run() {
    Console.readLine('문자열을 입력하세요: ', (input) => {
      try {
        const result = this.calculation(input);
        Console.print(`=> ${result}`);
      } catch (error) {
        Console.print(error.message);
      } finally {
        Console.close();
      }
    });
  }

  calculation(input) {
    if (input === '') return 0;

    let separator = /[,:]/;
    let numbersString = input;

    // 커스텀 구분자 처리
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\n');
      if (delimiterEndIndex === -1) {
        throw new Error('[ERROR] 잘못된 입력 형식입니다.');
      }
      const customDelimiter = input.substring(2, delimiterEndIndex);
      if (customDelimiter.length === 0) {
        throw new Error('[ERROR] 커스텀 구분자가 지정되지 않았습니다.');
      }
      separator = new RegExp(this.escapeRegExp(customDelimiter)); // 커스텀 구분자를 정규식으로 변환
      numbersString = input.substring(delimiterEndIndex + 1);
    }

    const numberStrings = numbersString.split(separator);
    let sum = 0;

    for (const numStr of numberStrings) {
      if (numStr.trim() === '') continue;
      if (!/^\d+$/.test(numStr)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다: ' + numStr);
      }
      sum += parseInt(numStr, 10);
    }

    return sum;
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;

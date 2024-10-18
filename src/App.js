class App {
  async run() {
    try {
      console.log(this.add('')); // 0
      console.log(this.add('1,2')); // 3
      console.log(this.add('1,2,3')); // 6
      console.log(this.add('1,2:3')); // 6
      console.log(this.add('//;\n1;2;3')); // 6
      console.log(this.add('//|\n1|2|3')); // 6
      console.log(this.add('1,\n2')); // [ERROR] Invalid input
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * 문자열 덧셈 계산기 함수
   * @param {string} input - 입력된 문자열
   * @returns {number} - 문자열 내 숫자의 합
   */
  add(input = '') {
    if (input === '') return 0;

    // 1-1. 기본 구분자 설정
    let delimiter = /[,:]/; 

    // 1-2. 커스텀 delim 설정
    if (input.startsWith('//')) {
      const delimiterEnd = input.indexOf('\n');
      if (delimiterEnd === -1) {
        throw new Error('[ERROR] Invalid custom delimiter format.');
      }
    
      const customDelimiter = input.substring(2, delimiterEnd);
      //RegExp : 정규표현식 객체 생성 
      //escapeRegExp : 이스케이프 문자열 -> 정규표현식 객체 변환
      delimiter = new RegExp(`${this.escapeRegExp(customDelimiter)}`);
      input = input.substring(delimiterEnd + 1);
    }

    // 2. 구분자를 기준으로 나누고 숫자를 numbers배열에 저장
    const numbers = input.split(delimiter).map((num) => {
      if (num.trim() === '') return 0;
      const parsedNumber = parseInt(num, 10);
      if (isNaN(parsedNumber)) {
        throw new Error('[ERROR] Invalid input: all elements must be integers.');
      }
      return parsedNumber;
    });

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

}

export default App
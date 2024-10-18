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
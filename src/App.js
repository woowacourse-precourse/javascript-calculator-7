class App {
    // run: main
    async run() {
      try {
        Console.print("덧셈할 문자열을 입력해 주세요.\n");
        const input = await Console.readLineAsync();
  
        if (!input.trim()) {
          throw new Error("[ERROR] 입력값 오류");
        }
  
        const result = this.calculate(input.trim());
        Console.print(`결과 : ${result}`);
      } catch (error) {
        Console.print(error.message);
        throw error; 
      }
    }

    // escapeRegExp: 정규식 이스케이핑
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // calculate: 구분자 처리 및 합계 계산
  calculate(_input) {
    if (!_input) return 0;
    const input = _input.replace("\\n", "\n");

    const delimiters = [",", ":"];
    let numbers = input;

    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const numArray = numbers.split(delimiterRegex)
      .filter(Boolean) 
      .map(this.parseAndValidateNumber);

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
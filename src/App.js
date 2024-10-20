class App {
  async run() {

    let input = promt("덧셈할 문자열을 입력해 주세요.\n");

    try {
      const result = this.add(input);
      console.log(`결과 : ${result}`);
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    }
  }

  add(input) {
    if (input == "") {
      return 0; // 빈 문자열 처리
    }

    let delimiter = /,|:/; // 기본 구분자

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      let delimiter = new RegExp(parts[0].slice(2)); // 커스텀 구분자 추출
      input = parts[1]; // 문자열 부분 추출
    }

    let numbers = input.split(delimiter).map(num => {
      const parsedNum = Number(num);
      
      if (isNaN(parsedNum)) {
        throw new Error(`유효하지 않은 입력: ${num}`); // 숫자가 아닌 경우
      }
      
      return parsedNum;
    });
  }
}
export default App;

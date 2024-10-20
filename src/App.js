class App {
  async checkSeparator(str) {
    const re = /\/\/[\D]+\\n/g;   // 커스텀 구분자 찾는 정규식
    const customSeperatorIndex = str.search(re);  // 커스텀 구분자 인덱스 찾기
    if (customSeperatorIndex === -1) {    // 커스텀 구분자가 없는 경우 문자열 그대로 반환
      return;
    }
    return str[customSeperatorIndex + 2]; // 커스텀 구분자 반환
  }
  
  async run() {
    const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
    const customSeperator = await this.checkSeparator(inputString);
  }
}

export default App;

class App {
  splitDelim(str) {
    // /,|:/ 정규식을 통해 split메서드로 여러개의 구분자를 사용하여 문자열을 가공한다
    let processedStr = str.split((/,|:/));

    // + 단항연산자를 이용해서 문자열 -> 숫자 변환을 한다
    for(let i = 0; i<splitStr.length; ++i) {
      processedStr[i] = +processedStr[i];
    }

    return processedStr;
  }

  async run() {
    console.log(this.splitDelim("1,23:5,7:8:22"));
  }
}

export default App;

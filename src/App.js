class App {
  constructor() {
    // 커스텀 구분자
    this.customDelim = null;
  }

  getCustomDelim(str) {
    let start = str.indexOf("//");
    let end = str.indexOf("\n");

    // "//"와 "\n" 사이의 커스텀 구분자 문자를 customDelim 멤버변수에 저장한다.
    this.customDelim = str.slice(start + 2, end);
  }

  splitDelim(str) {
    // /,|:/ 정규식을 통해 split메서드로 여러개의 구분자를 사용하여 문자열을 가공한다
    let processedStr = null;
    
    if(str.indexOf("//") === -1) {
      // 커스텀 구분자의 시작인 "//"가 존재하지 않으면 ",",":"를 사용한 추출을 진행한다.
      processedStr = str.split((/,|:/));
    } else {
      // 커스텀 구분자가 있다면 커스텀 구분자를 추출한다.
      this.getCustomDelim(str);

      // 커스텀 구분자의 끝인 "\n"의 위치까지 slice한 후 커스텀 구분자를 기본 구분자인 쉼표(,)로 치환한 후 숫자를 추출한다.
      processedStr = str.slice(str.indexOf("\n")).replace(this.customDelim, ",").split((/,|:/));
    }

    // + 단항연산자를 이용해서 문자열 -> 숫자 변환을 한다
    for(let i = 0; i<processedStr.length; ++i) {
      processedStr[i] = +processedStr[i];
    }

    return processedStr;
  }

  async run() {
    console.log(this.splitDelim("//&\n1,23:5,7&8:22"));
  }
}

export default App;

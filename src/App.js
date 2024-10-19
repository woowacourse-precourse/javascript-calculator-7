class App {
  // 1. 구분자 추출하기
  extractDelimeter(inputString) {
    // 커스텀 구분자 추출하기 위한 캡처 정의
    const CAPTURE = new RegExp('//([^0-9])\\n', 'g');
    
    // 커스텀 구분자 그룹 캡처하기
    const MATCHES = [...inputString.matchAll(CAPTURE)];

    // 커스텀 구분자만 추출하기
    const DELIMETERS = MATCHES.map(match => match[1]);

    return DELIMETERS;
  }

  async run() {}
}

export default App;

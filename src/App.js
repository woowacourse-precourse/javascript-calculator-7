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

  // 2. 커스텀 구분자 부분 제거하기
  extractMathExpression(inputString) {
    // 커스텀 구분자 추출하기 위한 캡처 정의
    const CAPTURE = new RegExp('//([^0-9])\\n', 'g');

    // 커스텀 구분자 부분 제거하기
    const MATH_EXPRESSION = inputString.replace(CAPTURE, '');

    return MATH_EXPRESSION;
  }

  // 3. 구분자 기반 분리하기
  splitDelimeter(expression, delimeters) {
    // 기본 구분자 정의
    const DEFAULT_DELIMETERS = [':', ','];

    // 커스텀 구분자 이스케이프 처리
    const ESCAPED_DELIMETERS = this.escapeSpecialChars(delimeters);

    // 모든 구분자
    const ALL_DELIMETER = ESCAPED_DELIMETERS.concat(DEFAULT_DELIMETERS);

    // 모든 구분자를 split에 들어갈 표현식으로 만들기
    const ALL_DELIMETER_REGEX = ALL_DELIMETER.join('|');

    // 구분자 기반 분리하여 숫자 리스트 반환하기
    const NUMBERS = expression.split(new RegExp(ALL_DELIMETER_REGEX));

    return NUMBERS;
  }

  // 3-1. 커스텀 구분자 전처리하기
  escapeSpecialChars(delimeters) {
    // 이스케이프 처리가 필요한 특수 문자 목록
    const EXCAPE_CHARS = /([.*+?^${}()|\[\]\\/])/g;

    const ESCAPED_DELIMETERS = delimeters.map(del => del.replace(EXCAPE_CHARS, '\\$1'));

    return ESCAPED_DELIMETERS;
  }

  async run() {}
}

export default App;

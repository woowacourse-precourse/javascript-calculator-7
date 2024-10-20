class App {
  async run() {}
}

// 입력: 사용자에게 덧셈할 문자열을 입력받는 메소드
getInput() {
  return new Promise((resolve) => {
    console.log('덧셈할 문자열을 입력해 주세요.'); 
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim()); 
    });
  });
}

 // 기본 구분자 기준 분리: 쉼표(,) 또는 콜론(:)을 구분자
splitNumbers(numbers, delimiter) {
  return numbers.split(new RegExp(`[${delimiter},:]`));
}

// 커스텀 구분자 기준 분리: "//"와 "\n" 사이에 위치하는 문자인 커스텀 구분자를 기준
extractDelimiter(input) {
  if (input.startsWith("//")) { 
    const [delimiterLine, ...numberLines] = input.split('\n'); 
    const delimiter = delimiterLine.substring(2); 
    const numbers = numberLines.join('\n'); 
    return [delimiter, numbers]; 
  }
  return [',', input]; 
}




export default App;

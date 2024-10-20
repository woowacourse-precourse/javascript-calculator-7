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

// 숫자 변환: 분리한 문자를 숫자로 변환하는 메소드
convertToNumbers(numbers) {
  return numbers.map(num => Number(num)); 
}

// 합 계산: 분리한 각 숫자의 합을 반환하는 메소드
calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0); 
}

// 출력: 덧셈 결과를 출력하는 메소드
printResult(result) {
  console.log(`결과 : ${result}`); 
}



export default App;

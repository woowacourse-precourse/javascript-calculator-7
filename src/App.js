import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // [1] 사용자 입력 받기, 앞 뒤 공백제거
    let inputValue = String(
      await Console.readLineAsync("덧셈 계산을 위한 문자열을 입력해주세요 : ")
    ).trim();
    console.log(
      `xxxxx(확인용 - 최초 입력값 = ${inputValue}) / type : ${typeof inputValue}`
    );

    // [2] 커스텀구분자 여부를 확인
    const CUSTOM_PATTERN = /^\/\//;
    const isCustom = CUSTOM_PATTERN.test(inputValue);
    console.log(`xxxxx(확인용 - 커스텀 구분자인가요? : ${isCustom})`);

    // [3] 커스텀구분자를 처리하는 함수 만들기
    const extractCustomDelimiter = (inputValue) => {
      const inputSplit = inputValue.split('\\n');
      const customDelimiter = inputSplit[0].replace('//', '');
      const customDelimiterNums = inputSplit[1];
      const customStringArray = customDelimiterNums.split(customDelimiter);
      const customNumbersArray = customStringArray.map(Number);
      console.log(
        `xxxxx(확인용 - 커스텀구분자 숫자배열 추출여부 : ${customNumbersArray})`
      );
      return customNumbersArray;
    };

    // [4] 일반구분자를 처리하는 함수 만들기
    const extractGeneralDelimiter = (inputValue) => {
      const generalStringArray = inputValue.split(/[,|;: ]+/);
      const generalNumbersArray = generalStringArray.map(Number);
      console.log(
        `xxxxx(확인용 - 일반구분자 숫자배열 추출여부 : ${generalNumbersArray})`
      );
      return generalNumbersArray;
    };

    // [5] 덧셈 계산 함수 만들기
    const sum = (numbersArray) => {
      return numbersArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    };

    // [6][동작] 구분자를 기준으로 숫자를 추출하고 숫자 모두 더하기
    if (isCustom) {
      console.log(`xxxxx(확인용 - 커스텀구분자 if문 들어감`);
      const customNumbersArray = extractCustomDelimiter(inputValue);
      const customResult = sum(customNumbersArray);
      console.log(
        `xxxxx(확인용 - 커스텀 구분자 최종 결과 : ${customResult})`
      );
      Console.print(`결과 : ${customResult}`);
    } else {
      console.log(`xxxxx(확인용 - 일반구분자 if문 들어감`);
      const generalNumbersArray = extractGeneralDelimiter(inputValue);
      const generalResult = sum(generalNumbersArray);
      console.log(`xxxxx(확인용 - 일반 구분자 최종 결과 : ${generalResult})`);
      Console.print(`결과 : ${generalResult}`);
    }


  }
}

export default App;

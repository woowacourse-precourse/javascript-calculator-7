import { Console } from '@woowacourse/mission-utils';

// 1. 입력을 문자열로 전환하거나 문자열만 받음 String()
async function getString() {
  try {
    const inputString = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return inputString;
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

// 2. 정규표현식, includes(), split() 등으로 :나 ,로 구분된 문자열 기준으로 숫자 합 반환
function computeResult(inputString, customString) {
  let regex;
  let formattedInput;
  if (customString) {
    regex = new RegExp(`[\\n:,${customString}]`);
    formattedInput = inputString.toString().replace(/^(?:\/\/)(\D)(?:\\n)/, ''); // 숫자만 남기기
  } else {
    regex = /[:,]/;
    formattedInput = inputString.toString();
  }
  const splitString = formattedInput.split(regex);
  console.log(splitString); // ERROR 처리를 위한 확인

  // \n 다음 숫자도 나눠주기
  // slice로 배열 복사
  // reduce
  const stringToNumber = splitString.map(Number);
  const compute = stringToNumber.reduce((acc, cur) => {
    return acc + cur;
  });

  return compute;
}

// 커스텀구분자
function customSeparator(inputString) {
  const regex = /^(?:\/\/)(\D)(?:\\n)/;
  const customString = inputString.match(regex);

  return customString ? customString[1] : null;
}

// splitString 변수 선언부를 function으로 뺀다.
// function에서 커스텀구분자 여부부터 확인하고, if문으로 split 정규표현식 안에 넣어준다. (변수로 이름 바꿈)

class App {
  async run() {
    const inputString = await getString();
    const customString = customSeparator(inputString);

    console.log(customString);

    const computeReturn = computeResult(inputString, customString);
    Console.print(`결과: ${computeReturn}`);
  }
}

export default App;

// 4. 예외처리로 ERROR
// - 커스텀 구분자가 앞부분에 선언되었는지와 문자(1)인지
// - 별도의 구분자가 들어갔는지
// - 양수인지
// 전체 async run을 catch로 잡아준다.

// const 변수 = 'JS';
// const regex = new RegExp(`${변수}`, 'g');
// console.log(regex); // /JS/g

// const str = 'JS공부JS';
// const result = str.match(regex); // ['JS', 'JS']
// console.log(result.length); // 2

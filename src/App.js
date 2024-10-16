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
function computeResult(inputString) {
  const splitString = inputString.toString().split(/[:,]/);
  const stringToNumber = splitString.map(Number);
  const compute = stringToNumber.reduce((acc, cur) => {
    return acc + cur;
  });

  return compute;
}

class App {
  async run() {
    const inputString = await getString();

    const computeReturn = computeResult(inputString);
    Console.print(`결과: ${computeReturn}`);
  }
}

export default App;

// 3. indexOf, split(), slice()로 커스텀 구분자
// 4. 예외처리로 ERROR
// - 커스텀 구분자가 앞부분에 선언되었는지와 문자(1)인지
// - 별도의 구분자가 들어갔는지
// - 양수인지

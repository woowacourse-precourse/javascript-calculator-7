import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = '[ERROR]: ';
class App {
  async run() {
    try {
      const userInput = await getUserInput().then((result) => result.trim());
      const separator = [':', ','];
      let formula = '';
      if (
        !(
          userInput.length > 0 &&
          (userInput.slice(0, 2) === '//' || !isNaN(userInput[0]))
        )
      ) {
        // 공백 제거후 값이 비어있거나 string이 '//' 혹은 숫자로 시작되지 않는경우 에러 반환
        throw '입력 형식이 올바르지 않습니다.';
      }

      if (userInput.slice(0, 2) === '//') {
        // "//"와 "\n"의 위치를 찾아서 그 사이 문자열을 추출
        const endIndex = userInput.indexOf('\\n');

        if (endIndex !== -1) {
          // "//"와 "\n" 사이에 문자열이 있는지 확인
          const customSeprator = userInput.slice(2, endIndex);

          if (!customSeparatorFormat(customSeprator)) {
            // 커스텀 구분자에 숫자나 공백이 포함된 경우 에러반환
            throw '커스텀 구분자에 공백이나 숫자는 포함할 수 없습니다.';
          }

          separator.push(customSeprator);
          formula = userInput.substr(endIndex + 2);
        } else {
          // \n이 없는 경우 에러 반환
          throw '커스텀 구분자를 사용하려면 \\n을 입력해주세요';
        }
      }

      Console.print(userNumber);
    } catch (error) {
      // Console.print(userInput);
      Console.print(ERROR_MESSAGE + error);
    }
  }
}

function customSeparatorFormat(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) || str[i] === ' ') {
      // 문자가 숫자이거나 공백이면 true 반환
      return false;
    }
  }
  // 숫자나 공백이 포함되지 않았으면 false 반환
  return true;
}

async function getUserInput() {
  try {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요: ',
    );
    return input;
  } catch (error) {
    throw error('입력이 잘못 되었습니다.');
  }
}

export default App;

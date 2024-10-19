import { MissionUtils } from '@woowacourse/mission-utils';



export function getUserInput(callback) {
  MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    .then((input) => {
      callback(input);
    }) // 입력된 값 callback 전달
    .catch((error) => {
      MissionUtils.Console.print(error);
    }); // 에러처리
}

// 에러 메시지 출력 함수
export function displayErrorMessage(message) {
  MissionUtils.Console.print(`[ERROR]: ${message}`);
}

// 결과 출력 함수
export function resultOutput(result) {
  MissionUtils.Console.print(`결과 : ${result}`);
}

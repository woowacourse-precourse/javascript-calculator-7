import { MissionUtils } from '@woowacourse/mission-utils';

// --- 사용자 입력 받기 ---
export function getUserInput() {
  return MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
}

// --- 에러 메시지 출력  ---
export function displayErrorMessage(message) {
  MissionUtils.Console.print(`${message}`);
}

// --- 결과 출력 ---
export function resultOutput(result) {
  MissionUtils.Console.print(`결과 : ${result}`);
}

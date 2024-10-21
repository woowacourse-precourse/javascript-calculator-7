import { Console } from '@woowacourse/mission-utils';

// 사용자 입력값을 비동기로 받는 메서드
export async function getInput() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    //console.log("사용자 입력값 : ", input);

    return input;
}

// 일반 메시지를 출력하는 메서드
export function printMessage(msg) {
    Console.log(msg);
}

// 에러 메시지를 출력하는 메서드
export function printErrorMsg(msg) {
    console.error("[ERROR] " + msg);
    //throw new Error("프로그램을 종료합니다.");
}
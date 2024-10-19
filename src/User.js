import { Console } from '@woowacourse/mission-utils';

export const getUserInput = async () => {
    const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    return userInput;
}

// 예외 처리 메서드
export const validateInput = (input) => {
    // null 또는 undefined인 경우
    if (input == null) {
        throw new Error('[ERROR] 정의되지 않은 수식입니다.');
    }

    return input;
}
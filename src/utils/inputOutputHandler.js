import { Console}  from "@woowacourse/mission-utils";

// 입력 메세지
const INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";

// 출력 메세지
const OUTPUT_MESSAGE = "결과 : "


// 입력 함수
export function readInput() {
    const INPUT = Console.readLineAsync(INPUT_MESSAGE);
    return INPUT;
}


// 출력 함수
export function printOutput(output) {
    Console.print(OUTPUT_MESSAGE + output);
}

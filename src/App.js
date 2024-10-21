import { Console } from '@woowacourse/mission-utils';

const DEFAULT_DELIMITER = /[,|:]/;
const ERROR_NEGATIVE_NUMBER =
    '[ERROR] 음수는 허용되지 않습니다.';
const ERROR_INVALID_FORMAT =
    '[ERROR] 입력 형식이 잘못되었습니다.';
const ERROR_INVALID_INPUT = '[ERROR] 잘못된 입력입니다.';

// 사용자로부터 입력(문자열)을 받음
function getInput() {
    return Console.readLineAsync(
        '덧셈할 문자열을 입력해주세요.\n'
    );
}

function parseDelimiter(input) {
    const end = input.indexOf('\\n');
    let delimiter = input.substring(2, end);

    const splitter = [
        ...delimiter.matchAll(/\[(.*?)\]/g),
    ].map((del) => del[1]);

    delimiter =
        splitter.length > 0
            ? new RegExp(
                  splitter
                      .map((d) =>
                          d.replace(
                              /[.*+?^${}()|[\]\\]/g,
                              '\\$&'
                          )
                      )
                      .join('|')
              )
            : delimiter;

    return { delimiter, input: input.substring(end + 2) };
}

function parseInput(input) {
    // 압력이 빈 문자열인 경우, 0을 반환
    if (input.trim() === '') return [0];
    // 입력값이 한 개일 경우 해당 숫자를 그대로 반환
    if (!isNaN(input)) return [Number(input.trim())];

    // 커스텀 구분자가 있는지 확인
    let delimiter = DEFAULT_DELIMITER;
    if (input.startsWith('//')) {
        // 여러 개의 커스텀 구분자 추출
        // return delimiter , remainingInput
        try {
            const {
                delimiter: customDelimiter,
                input: remainingInput,
            } = parseDelimiter(input);
            delimiter = customDelimiter;
            input = remainingInput;
        } catch (error) {
            throw new Error(ERROR_INVALID_FORMAT);
        }
    }
    // 문자열을 쉼표,콜론 혹은 커스텀 구분자로 분리하여 숫자 배열로 변환 숫자를 합산
    const numbers = input
        .split(delimiter)
        .map(validateData)
        .reduce((acc, curr) => acc + curr, 0);
    return numbers;
}

function validateData(input) {
    const num = Number(input);
    if (isNaN(num)) throw new Error(ERROR_INVALID_INPUT);
    if (num < 0) throw new Error(ERROR_NEGATIVE_NUMBER);
    return num;
}

class App {
    async run() {
        try {
            const input = await getInput();
            const result = parseInput(input);
            // 결과 출력
            Console.print(`결과 : ${result}`);
        } catch (error) {
            Console.print(error.message);
            throw error;
        }
    }
}

export default App;

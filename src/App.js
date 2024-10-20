import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 전달받은 문자열에서 구분자를 통해 숫자를 추출하고 덧셈한 결과를 반환하는 함수.
 * 입력 문자열에 커스텀 구분자가 포함될 수 있으며, 기본 구분자는 쉼표(,)와 콜론(:)이다.
 *
 * @param {string} operand - 사용자로부터 입력받은 문자열. 구분자와 숫자가 포함되어 있다.
 * @returns {number} 입력 문자열에서 추출한 숫자들의 덧셈 결과.
 */
function calculator(operand) {
    let sum = 0;
    let checkNumber = operand;
    const SEPARATOR = [',', ':']; // 기본 구분자: 쉼표(,)와 콜론(:)

    // 입력이 커스텀 구분자를 포함하는 경우
    if (operand.startsWith('//')) {
        // "//" 이후의 3번째 문자가 "\n"인 경우, 커스텀 구분자와 숫자 부분을 처리
        if (operand.startsWith('\\n', 3)) {
            SEPARATOR.push(operand.charAt(2)); // 커스텀 구분자를 SEPARATOR 배열에 추가
            checkNumber = operand.substring(5); // 숫자 부분을 추출하여 checkNumber에 저장
        }
    }

    // 구분자들을 사용해 문자열을 숫자로 분리하는 정규식 생성
    const regex = new RegExp(
        SEPARATOR.map((separator) => separator.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&')).join('|'),
        'g'
    );
    // 구분자를 기준으로 숫자를 분리
    checkNumber = checkNumber.split(regex);

    // 숫자 합계를 계산
    for (let i = 0; i < checkNumber.length; i++) {
        // 숫자가 아닌 값이 존재하는 경우 오류 발생
        if (isNaN(Number(checkNumber[i]))) {
            throw new Error('[ERROR] 구분자가 아니거나 숫자가 아닌 문자가 존재합니다.');
        }
        sum += Number(checkNumber[i]); // 숫자들을 합산
    }

    return sum; // 계산된 합계를 반환
}

class App {
    /**
     * 프로그램 실행의 시작점. 사용자로부터 문자열을 입력받아 그 문자열에서 숫자들을 추출한 후 합을 계산하고 결과를 출력.
     *
     * @async
     */
    async run() {
        try {
            // 사용자 입력을 받음 (비동기 처리)
            const operand = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');

            // 입력된 문자열이 공백 또는 빈 문자열인 경우, 결과 0을 반환
            if (!operand.trim()) {
                MissionUtils.Console.print('결과 : 0');
                return;
            }

            // 입력이 숫자나 '//'로 시작하지 않으면 예외 발생
            if (!/^\d/.test(operand) && !operand.startsWith('//')) {
                throw new Error("[ERROR] 입력값은 숫자나 '//'로 시작해야 합니다.");
            }

            // calculator 함수를 사용하여 입력된 문자열에서 숫자들의 합을 계산
            const result = calculator(operand);

            // 계산된 결과를 출력
            MissionUtils.Console.print('결과 : ' + result);
        } catch (error) {
            // 예외 발생 시 에러 메시지를 출력하고, 예외를 다시 던져서 상위에서 처리되도록 함
            MissionUtils.Console.print(error.message);
            throw error;
        }
    }
}

export default App;

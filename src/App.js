import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
    static calculate(input) {
        if (!input) return 0; // 빈 문자열이면 0 반환

        const processed_input = input.replace(/\\n/g, "\n"); // \n을 제대로 인식하기 위해 문자열 내 실제 줄바꿈으로 대체
        let separator = /[,:]/; // 기본 구분자 ,와 : 설정
        let numbers = processed_input; // 초기 numbers는 전체 입력 값으로 설정

        // 커스텀 구분자가 있는지 확인
        if (processed_input.startsWith("//")) {
            const matches = processed_input.match(/^\/\/([^\n]+)\n(.*)$/s);
            if (matches) {
                let custom_separator = matches[1];

                // 각 특수문자 의미를 없애고 정규식에서 사용할 수 있도록 이스케이프 처리
                custom_separator = custom_separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

                // 기본 구분자와 커스텀 구분자 함께 사용
                separator = new RegExp(`${custom_separator}|[,:]`, "g");

                // 실제 숫자 부분 추출
                numbers = matches[2];
            } else {
                // "//"로 시작했지만 "\n"으로 끝맺음 되지 않았을 경우
                throw new Error("[ERROR] 구분자가 제대로 설정되지 않았습니다.");
            }
        }

        // 구분자에 따라 문자열을 분리하여 숫자 처리
        const parsed_numbers = numbers.split(separator).map((num) => {
            const trimmed = num.trim();

            // input에 숫자를 안 입력한 경우
            if (trimmed === "") {
                throw new Error('[ERROR] 숫자가 입력되지 않았습니다.');
            }
            const parsed = parseInt(trimmed, 10);

            // 숫자를 입력해야 하는 곳에 문자열을 입력한 경우
            if (isNaN(parsed)) {
                throw new Error('[ERROR] 잘못된 위치에 문자열이 입력되었습니다.');
            }

            // 음수인 경우
            if (parsed < 0) {
                throw new Error('[ERROR] 음수는 허용되지 않습니다.');
            }
            return parsed;
        });

        // 파싱된 숫자들 누적해서 더하기
        return parsed_numbers.reduce((sum, num) => sum + num, 0);
    }
}

class App {
    async run() {
        try {
            const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
            const result = StringCalculator.calculate(input);
            if (result !== undefined) {
                Console.print(`결과 : ${result}`);
            }
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export default App;
import { handleError } from "./errorHandler.js";
import { ERROR_MESSAGES } from "./errorMessage.js";

export const calculateSum = (input) => {
    try {
        if(!input) return 0;
        let delimiter = /,|:/;
        if (input.startsWith("//")) {
            let delimiterEndIndex = input.indexOf("\n");

            // 줄바꿈 문자가 없으면 '\n' 문자열이 입력되었는지 확인
            if (delimiterEndIndex === -1) {
                delimiterEndIndex = input.indexOf("\\n");
            }

            if (delimiterEndIndex === -1) throw new Error(ERROR_MESSAGES.INVALID_FORMAT);

            // 구분자 설정
            delimiter = new RegExp(`[${input.slice(2, delimiterEndIndex)}]`); // 커스텀 구분자 처리
            input = input.slice(delimiterEndIndex + 2); // 구분자 이후의 숫자 문자열 추출 (줄바꿈 이후)
        }

        const numbers = input.split(delimiter).map(Number); // 추출된 숫자 문자열을 구분자 단위로 쪼개고 숫자로 변환

        if (numbers.some(isNaN)) throw new Error(ERROR_MESSAGES.NOT_A_NUMBER); // 배열에 NaN이 있으면 오류 발생

        return numbers.reduce((acc, curr) => acc + curr, 0); // reduce()를 사용해 배열의 합계를 계산
        // reduce() 메서드(배열을 하나의 값으로 줄이는 데 사용)를 사용해 배열을 순회하며 누적합을 계산하는 역할
        // 0은 초기값. 첫 번째 요소부터 차례차례 더해지기 시작한다.
    } catch (error) {
        handleError(error);
    }
};
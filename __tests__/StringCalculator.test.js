import { mainProcess } from "../src/MainProcess.js";
import ErrorMessages from "../src/constant/ErrorMessage.js";

describe("mainProcess", () => {

    test("정상 문자열 입력 1", () => {
        const input = "1:2,3";
        const result = mainProcess(input);
        expect(result).toBe(6);
    });

    test("정상 문자열 입력 2", () => {
        const input = "//*\n11*2*3*4";
        const result = mainProcess(input);
        expect(result).toBe(20);
    });

    test("숫자 하나만 입력", () => {
        const input = "1";
        const result = mainProcess(input);
        expect(result).toBe(1);
    });

    test("커스텀 구분자가 /인 경우", () => {
        const input = "///\n1/2/3";
        const result = mainProcess(input);
        expect(result).toBe(6);
    });

    test("커스텀 구분자가 \\인 경우", () => {
        const input = "//\\\\n1\\2\\3";
        const result = mainProcess(input);
        expect(result).toBe(6);
    });

    test("빈 문자열 입력", () => {
        const input = "";
        const result = mainProcess(input);
        expect(result).toBe(0);
    });

    test("다른 문자 입력", () => {
        const input = "1,2,k";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
    });

    test("음수 포함 입력", () => {
        const input = "//*\n1*-2*3*4";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NEGATIVE_NUMBER);
    });

    test("하이픈 입력", () => {
        const input = "1-2-3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
    });

    test("맨 앞에 ,가 먼저 오는 경우", () => {
        const input = ",1,2,3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
    });

    test("중간이 공백인 경우", () => {
        const input = "1, ,3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
    });

    test("맨 뒤에 ,가 오는 경우", () => {
        const input = "1,2,3,";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
    });

    test("구분자 외 다른 특수문자 사용", () => {
        const input = "1@2,3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_NON_NUMBER_CHARACTER);
    });

    test("커스텀 구분자의 위치 선언이 잘못된 경우", () => {
        const input = "1,2:3//*\n";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_CUSTOM_DELIMITER_POSITION);
    });

    test("구분자가 2개 이상 사용된 경우", () => {
        const input = "1,,2:3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_MULTIPLE_DEFAULT_DELIMITER);
    });

    test("커스텀 구분자가 2개 이상 사용된 경우", () => {
        const input = "//*\n1**2*3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_MULTIPLE_CUSTOM_DELIMITER);
    });

    test("커스텀 구분자가 선언을 두 번이상 한 경우", () => {
        const input = "//*\n//;\n1*2;3";
        expect(() => mainProcess(input)).toThrow(ErrorMessages.ERROR_MULTIPLE_DECLARE_CUSTOM_DELIMITER);
    });

});

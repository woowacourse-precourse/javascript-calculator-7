import Calculator from "../src/Calculator";
import { INPUT_ERROR } from "../src/constant.js";

describe("calculate 테스트", () => {
    test("구분자에 숫자 포함된 경우", async () => {
        const calculator = new Calculator("1q", "11q21q3");
        const result = 6;
        await expect(calculator.calculate()).toEqual(result);
    });

    test("커스텀 구분자와 기본구분자 혼합된 경우", async () => {
        const calculator = new Calculator("+", "1+1:1");
        const result = 3;
        await expect(calculator.calculate()).toEqual(result);
    });

    test.each(["-1,2,3", "1;2;3//;\n", "a,b,2", "1@2@3", "//q1q2q3"])(
        "에러 처리 테스트",
        async (value) => {
            const calculator = new Calculator(value);

            await expect(() => calculator.calculate().toThrow(INPUT_ERROR));
        }
    );
});

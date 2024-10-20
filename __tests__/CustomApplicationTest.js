import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("문자열 계산기", () => {
    test("빈 문자열 또는 공백 문자열 입력", async () => {
        const inputs = ["", "   "];
        mockQuestions(inputs);

        const app = new App();
        const logSpy = getLogSpy();

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 0"));

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 0"));
    });

    test("기본 구분자로 구분된 문자열 입력", async () => {
        const inputs = ["1,2:3", "10,20:30,40"];
        mockQuestions(inputs);

        const app = new App();
        const logSpy = getLogSpy();

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 100"));
    });

    test("커스텀 구분자 사용", async () => {
        const inputs = ["//;\\n1;2;3", "//-\\n1-2-3"];
        mockQuestions(inputs);

        const app = new App();
        const logSpy = getLogSpy();

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));
    });

    test("2자리 이상 숫자 처리", async () => {
        const inputs = ["12,345:67"];
        mockQuestions(inputs);

        const app = new App();
        const logSpy = getLogSpy();

        await app.run();
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 424"));
    });

    test("음수 입력 시 예외 발생", async () => {
        const inputs = ["1,-2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("유효하지 않은 문자 입력 시 예외 발생", async () => {
        const inputs = ["1,a,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("잘못된 커스텀 구분자 형식 입력 시 예외 발생", async () => {
        const inputs = ["//\\n1;2;3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });


    test("숫자 사이에 공백이 있을 경우 예외 발생", async () => {
        const inputs = ["1, 2,3", "1 ,2,3", "1,2 ,3"];
        mockQuestions(inputs);

        const app = new App();

        for (let i = 0; i < inputs.length; i++) {
            await expect(app.run()).rejects.toThrow("[ERROR]");
        }
    });
});
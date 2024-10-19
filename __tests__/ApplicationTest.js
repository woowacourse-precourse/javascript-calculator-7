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
    test("커스텀 구분자 사용", async () => {
        const inputs = ["//;\\n1"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 1"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("예외 테스트", async () => {
        const inputs = ["-1,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자 예외 테스트", async () => {
        const inputs = ["//;\\n1&2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("음의 소수 예외 테스트", async () => {
        const inputs = ["-1.5,-2.5,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("양의 소수 테스트", async () => {
        const inputs = ["1.5,2.5,3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 7"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("커스텀 구분자 사용, 양의 소수 사용 테스트", async () => {
        const inputs = ["//;\\n1;10;3,4.5"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 18.5"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("커스텀 구분자 . 테스트", async () => {
        const inputs = ["//.\\n1.22.345.4"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 372"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
});

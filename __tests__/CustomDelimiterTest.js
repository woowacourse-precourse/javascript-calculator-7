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
    test("커스텀 구분자(공백) 사용", async () => {
        const inputs = ["// \\n1 2 3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("커스텀 구분자(느낌표) 사용", async () => {
        const inputs = ["//!\\n1!2!3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("커스텀 구분자(알파벳) 사용", async () => {
        const inputs = ["//a\\n1a2a3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("커스텀 구분자(한글) 사용", async () => {
        const inputs = ["//가\\n1가2가3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("커스텀 구분자가 숫자인 경우", async () => {
        const inputs = ["//0\n10203"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자가 단일 문자가 아닌 경우", async () => {
        const inputs = ["//;;\n1;;2"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자 없이 지정 문자열만 있는 경우", async () => {
        const inputs = ["//\n1,2"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자 지정 이후 구분자로 시작하는 경우", async () => {
        const inputs = ["//;\n;1;2"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자 지정 이후 구분자로 끝나는 경우", async () => {
        const inputs = ["//;\n1;2;"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자가 연속되어 사용된 경우", async () => {
        const inputs = ["//;\n1;;2"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});

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
    test("빈 문자열 입력", async () => {
        const inputs = [""];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 0"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("쉼표 구분자 사용", async () => {
        const inputs = ["1,2"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 3"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("콜론 구분자 사용", async () => {
        const inputs = ["1:2"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 3"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("쉼표 구분자 연속 사용", async () => {
        const inputs = ["1,2,3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("콜론 구분자 연속 사용", async () => {
        const inputs = ["1:2:3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("쉼표 구분자 및 콜론 구분자 동시 사용", async () => {
        const inputs = ["1,2:3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

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

    test("기본 및 커스텀 구분자 혼합 사용", async () => {
        const inputs = ["//;\\n1,2:3;4"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 10"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
});

import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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

describe("기본 로직 테스트", () => {
    test("1) 공백 입력", async () => {
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

    test("2) 구분자가 없는 입력", async () => {
        const inputs = ["1"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 1"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("3) 공백이 포함된 입력", async () => {
        const inputs = ["1, 2"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 3"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("4) 구분자가 없는 입력", async () => {
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

    test("5) 2개의 구분자가 동시에 사용된 입력", async () => {
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

    test("6) 정상적으로 커스텀 구분자를 포함하여 작성한 입력", async () => {
        const inputs = ["//;\\n1;2;3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
});

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

    test("기본 구분자 사용", async () => {
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


    // 커스텀 구분자 없이 2자리 이상의 숫자 입력
    test("커스텀 구분자 없이 2자리 이상의 숫자가 입력될 때", async () => {
        const inputs = ["12,34:56"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 102"];  // 12 + 34 + 56 = 102

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    // 커스텀 구분자 2개 이상
    test("커스텀 구분자가 2개 이상일 때", async () => {
        const inputs = ["//;\\n//%\\n1;2%3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];  // 1 + 2 + 3 = 6

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    // 커스텀 구분자가 2개 이상이면서 음수 포함
    test("커스텀 구분자가 2개 이상이면서 음수가 포함될 때 예외 발생", async () => {
        const inputs = ["//;\\n//%\\n1;2%-3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");  // 음수 예외 처리
    });

    // 커스텀 구분자로 '-'가 들어갔을 때
    test("커스텀 구분자로 '-'가 들어갔을 때", async () => {
        const inputs = ["//-\\n1-2-3"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 6"];  // 1 + 2 + 3 = 6

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    // 커스텀 구분자로 숫자가 들어갔을 때
    test("커스텀 구분자로 숫자로 들어갔을 때", async () => {
        const inputs = ["//1\\n1213"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 5"];  // 2 + 3 = 5

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    // 빈 커스텀문자
    test("커스텀 구분자로 아무것도 들어가지 않았을 때", async () => {
        const inputs = ["//\\n1,2,34"];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ["결과 : 37"];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
});

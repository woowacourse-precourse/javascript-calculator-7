import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("문자열 계산기", () => {
    test("입력이 공백으로 시작하는 경우", async () => {
        const inputs = [" 1,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("입력이 공백으로 끝나는 경우", async () => {
        const inputs = ["1,2,3 "];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("입력으로 음수가 들어온 경우", async () => {
        const inputs = ["-1,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("구분자가 아닌 문자(물음표)가 있는 경우", async () => {
        const inputs = ["1?2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("구분자가 아닌 문자(알파벳)가 있는 경우", async () => {
        const inputs = ["1abc2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("쉼표 구분자가 연속되어 사용된 경우", async () => {
        const inputs = ["1,,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("콜론 구분자가 연속되어 사용된 경우", async () => {
        const inputs = ["1::2:3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("입력이 구분자로 시작하는 경우", async () => {
        const inputs = [",1,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("입력이 구분자로 끝나는 경우", async () => {
        const inputs = ["1:2:3:"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});

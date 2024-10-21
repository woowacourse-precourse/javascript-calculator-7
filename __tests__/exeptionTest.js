import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("예외 처리 테스트", () => {
    test("1) 숫자가 아닌 값을 포함", async () => {
        const inputs = ["a,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("2) 0이나 음수가 포함", async () => {
        const inputs = ["0,-2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("3) 잘못된 구분자", async () => {
        const inputs = ["1;2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("4) 커스텀 구분자 지정 형식이 잘못됨", async () => {
        const inputs = ["/;\n1;2;3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});

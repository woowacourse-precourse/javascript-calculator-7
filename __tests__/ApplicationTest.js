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
  describe("기본 기능", () => {
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

    test("기본 구분자(쉼표, 콜론)로 문자열 나누기", async () => {
      const inputs = ["1,2:3"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 1,2,3"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("커스텀 구분자 한 글자 사용", async () => {
      const inputs = ["//;\\n1;2"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 1,2"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });

  describe("예외 처리", () => {
    test("커스텀 구분자가 여러 글자일 경우 예외 처리", async () => {
      const inputs = ["//;;\\n1;2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 커스텀 구분자는 한 글자여야 합니다."
      );
    });

    test("구분자의 앞 또는 뒤에 숫자가 없는 경우 예외 처리", async () => {
      const inputs = ["//;\\n;"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 구분자의 앞 또는 뒤에 숫자가 없습니다."
      );
    });

    test("공백 포함한 숫자 예외 처리", async () => {
      const inputs = ["1, 2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 공백을 포함한 숫자는 허용되지 않습니다."
      );
    });

    test("음수 입력 시 예외 처리", async () => {
      const inputs = ["-1,2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 음수는 입력할 수 없습니다."
      );
    });
  });
});

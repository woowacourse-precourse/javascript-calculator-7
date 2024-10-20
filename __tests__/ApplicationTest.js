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
      const outputs = ["결과 : 6"];

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
      const outputs = ["결과 : 3"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("정상적인 숫자 입력에 대해 여러 구분자 사용", async () => {
      const inputs = ["//;\\n1;2,3"];
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

    test("커스텀 구분자가 비어있거나 정의되지 않은 경우", async () => {
      const inputs = ["//\\n1,2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 커스텀 구분자는 한 글자여야 합니다."
      );
    });

    test("구분자가 숫자로 시작하는 경우", async () => {
      const inputs = ["//1\\n1,2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 숫자는 구분자로 사용할 수 없습니다."
      );
    });

    test("숫자가 아닌 값 입력 시 예외 처리", async () => {
      const inputs = ["1,a,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 기본 구분자 외의 문자가 사용되었습니다."
      );
    });

    test("커스텀 구분자와 함께 숫자가 아닌 값 입력 시 예외 처리", async () => {
      const inputs = ["//;\\n1;a;3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 입력된 값 중 숫자가 아닌 항목이 있습니다."
      );
    });

    test("구분자가 특수문자로 시작하는 경우", async () => {
      const inputs = ["//&\\n1&2"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 3"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("잘못된 형식의 커스텀 구분자 사용", async () => {
      const inputs = ["//abc\\n1,2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(
        "[ERROR] 커스텀 구분자는 한 글자여야 합니다."
      );
    });
  });
});

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

describe("전체 테스트", () => {

  describe("정상인 경우 테스트", () => {

    test("입력 값이 없을 때", async () => {
      const inputs = [""];
      mockQuestions(inputs);
      const logSpy = getLogSpy();
      const outputs = ["결과 : 0"];
      const app = new App();
      await app.run();
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      })
    })

    test("기본 구분자 사용 1", async () => {
      const inputs = ["1:2,3:4"];
      mockQuestions(inputs);
      const logSpy = getLogSpy();
      const outputs = ["결과 : 10"];
      const app = new App();
      await app.run();
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("기본 구분자 사용2", async () => {
      const inputs = ["4,55:55,0"];
      mockQuestions(inputs);
      const logSpy = getLogSpy();
      const outputs = ["결과 : 114"];
      const app = new App();
      await app.run();
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      })
    })

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
  })

  describe("비정상 입력 테스트", () => {

    test("커스텀 구분자 중 \\n 없음", async () => {
      const inputs = ["//;1;2,3:"];
      mockQuestions(inputs);

      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");

    })

    test("커스텀 구분자 중 // 없음", async () => {
      const inputs = [";\\n1;2,3:"];
      mockQuestions(inputs);

      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    })

    test("커스텀 구분자 형식을 지키지 않고 사용", async () => {
      const inputs = [";1:2,3"];
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    })

    test("허용되지 않은 구분자 사용", async () => {
      const inputs = ["1+2,3:4"];
      mockQuestions(inputs)

      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR]");
    })

    test("음수 입력 테스트", async () => {
      const inputs = ["-1,2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("숫자 외 문자 테스트", async () => {
      const inputs = ["1,a,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});
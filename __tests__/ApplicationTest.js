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

describe("문자열 덧셈 계산기 테스트", () => {

  // 기본 구분자 테스트
  test("쉼표 구분자를 사용한 입력", async () => {
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

  test("콜론 구분자를 사용한 입력", async () => {
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

  test("쉼표와 콜론을 혼합한 입력", async () => {
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

  test("빈 문자열 입력 시 0을 반환", async () => {
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

  // 커스텀 구분자 테스트
  describe("커스텀 구분자 사용 테스트", () => {

    test("커스텀 구분자 ';' 사용", async () => {
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

    test("커스텀 구분자 '***' 사용", async () => {
      const inputs = ["//***\\n1***2***3"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 6"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("커스텀 구분자와 기본 구분자 혼합 사용", async () => {
      const inputs = ["//;\\n1;2:3"];
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

  // 예외 테스트
  describe("예외 처리 테스트", () => {

    test("음수를 입력할 경우 예외 발생", async () => {
      const inputs = ["-1,2,3"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("구분자 뒤에 숫자가 없을 경우 예외 발생", async () => {
      const inputs = ["1,2,"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("커스텀 구분자 설정 후 공백 입력 시 예외 발생", async () => {
      const inputs = ["//;\\n"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

  });

  // 다양한 입력 케이스 테스트
  describe("다양한 입력 케이스 테스트", () => {

    test("1개의 숫자 입력", async () => {
      const inputs = ["5"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 5"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("2개의 숫자 입력", async () => {
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

    test("0을 포함한 숫자 입력", async () => {
      const inputs = ["0,1,2"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 3"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("숫자 사이에 공백 포함", async () => {
      const inputs = ["1 , 2 ,3"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 6"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("정수가 아닌 입력", async () => {
      const inputs = ["a,1,2"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("빈 입력 후 구분자만 입력", async () => {
      const inputs = [",,,"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("구분자 없이 여러 숫자 입력", async () => {
      const inputs = ["123"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 123"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("빈 입력 시", async () => {
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

    // 추가 테스트 케이스
    test("숫자가 하나만 있는 경우", async () => {
      const inputs = ["7"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 7"];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("숫자와 공백 혼합 입력", async () => {
      const inputs = ["1, 2 , 3"];
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
});

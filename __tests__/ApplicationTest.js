import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import ErrorMessages from "../src/ErrorMessage.js";

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

  test("정상 문자열 입력 1", async () => {
    const inputs = ["1:2,3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("정상 문자열 입력 2", async () => {
    const inputs = ["//*\n11,2*3:4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 20"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("숫자 하나만 입력", async () => {
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

  test("커스텀 구분자가 /인 경우", async () => {
    const inputs = ["///\n1/2/3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자가 \\인 경우", async () => {
    const inputs = ["//\\\\n1\\2\\3"];
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
    const outputs = [ErrorMessages.ERROR_EMPTY_STRING];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("다른 문자 입력", async () => {
    const inputs = ["1,2,k"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_NON_NUMBER_CHARACTER];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("음수 포함 입력", async () => {
    const inputs = ["//*\n1,-2*3:4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_NEGATIVE_NUMBER];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("구분자 외 다른 특수문자 사용", async () => {
    const inputs = ["1@2,3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_NON_NUMBER_CHARACTER];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자의 위치 선언이 잘못된 경우", async () => {
    const inputs = ["1,2:3//*\n"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_CUSTOM_DELIMITER_POSITION];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("구분자가 2개 이상 사용된 경우", async () => {
    const inputs = ["1,,2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_MULTIPLE_DELIMITER];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자가 2개 이상 사용된 경우", async () => {
    const inputs = ["//*\n1**2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_MULTIPLE_DELIMITER];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자가 선언을 두 번이상 한 경우", async () => {
    const inputs = ["//*\n//;\n1*2;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [ErrorMessages.ERROR_MULTIPLE_DECLARE_CUSTOM_DELIMITER];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

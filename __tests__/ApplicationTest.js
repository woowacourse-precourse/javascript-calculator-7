import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() =>
    Promise.resolve(inputs.shift())
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runTest = async (testCase) => {
  const { input, expectedOutput, expectError } = testCase;
  mockQuestions([input]);
  const app = new App();

  if (expectError) {
    await expect(app.run()).rejects.toThrow(expectedOutput);
  } else {
    const logSpy = getLogSpy();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedOutput)
    );
  }
};

describe("문자열 계산기", () => {
  const testCases = [
    { name: "빈 문자열 입력", input: "", expectedOutput: "결과 : 0" },
    {
      name: "기본 구분자(쉼표, 콜론)로 문자열 나누기",
      input: "1,2:3",
      expectedOutput: "결과 : 6",
    },
    {
      name: "커스텀 구분자 한 글자 사용",
      input: "//;\\n1;2",
      expectedOutput: "결과 : 3",
    },
    {
      name: "정상적인 숫자 입력에 대해 여러 구분자 사용",
      input: "//;\\n1;2,3",
      expectedOutput: "결과 : 6",
    },
    {
      name: "커스텀 구분자가 여러 글자일 경우 예외 처리",
      input: "//;;\\n1;2",
      expectedOutput: "[ERROR] 커스텀 구분자는 한 글자여야 합니다.",
      expectError: true,
    },
    {
      name: "구분자의 앞 또는 뒤에 숫자가 없는 경우 예외 처리",
      input: "//;\\n;",
      expectedOutput: "[ERROR] 구분자의 앞 또는 뒤에 숫자가 없습니다.",
      expectError: true,
    },
    {
      name: "공백 포함한 숫자 예외 처리",
      input: "1, 2,3",
      expectedOutput: "[ERROR] 공백을 포함한 숫자는 허용되지 않습니다.",
      expectError: true,
    },
    {
      name: "음수 입력 시 예외 처리",
      input: "-1,2,3",
      expectedOutput: "[ERROR] 음수는 입력할 수 없습니다.",
      expectError: true,
    },
    {
      name: "커스텀 구분자가 비어있거나 정의되지 않은 경우",
      input: "//\\n1,2",
      expectedOutput: "[ERROR] 커스텀 구분자는 한 글자여야 합니다.",
      expectError: true,
    },
    {
      name: "구분자가 숫자로 시작하는 경우",
      input: "//1\\n1,2",
      expectedOutput: "[ERROR] 숫자는 구분자로 사용할 수 없습니다.",
      expectError: true,
    },
    {
      name: "숫자가 아닌 값 입력 시 예외 처리",
      input: "1,a,3",
      expectedOutput: "[ERROR] 기본 구분자 외의 문자가 사용되었습니다.",
      expectError: true,
    },
    {
      name: "커스텀 구분자와 함께 숫자가 아닌 값 입력 시 예외 처리",
      input: "//;\\n1;a;3",
      expectedOutput: "[ERROR] 입력된 값 중 숫자가 아닌 항목이 있습니다.",
      expectError: true,
    },
    {
      name: "구분자가 특수문자로 시작하는 경우",
      input: "//&\\n1&2",
      expectedOutput: "결과 : 3",
    },
    {
      name: "잘못된 형식의 커스텀 구분자 사용",
      input: "//abc\\n1,2",
      expectedOutput: "[ERROR] 커스텀 구분자는 한 글자여야 합니다.",
      expectError: true,
    },
  ];

  testCases.forEach((testCase) => {
    test(testCase.name, async () => {
      await runTest(testCase);
    });
  });
});

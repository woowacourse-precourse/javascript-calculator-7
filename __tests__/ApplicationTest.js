import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { TEST_CASES } from "../src/constants/testConstants.js";

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
  TEST_CASES.forEach((testCase) => {
    test(testCase.name, async () => {
      await runTest(testCase);
    });
  });
});

import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const TEST_CASE = [
  {title: "커스텀 구분자 사용", testCaseInputs: "//;\\n1", testCaseOutputs: "결과 : 1"},
  // {title: "예외 테스트", inputs: "-1,2,3", outputs: ""},
]

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
  TEST_CASE.forEach(({title, testCaseInputs, testCaseOutputs}) => {
    // 에러 상황
    if (testCaseOutputs === "") {
        test(title, async () => {
          const inputs = testCaseInputs;
          mockQuestions(inputs);
      
          const app = new App();
      
          await expect(app.run()).rejects.toThrow("[ERROR]");
        });
        return
    }

    // 출력 상황
    test(title, async () => {
      const inputs = [testCaseInputs];
      mockQuestions(inputs);
  
      const logSpy = getLogSpy();
      const outputs = [testCaseOutputs];
  
      const app = new App();
      await app.run();
  
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  })  
});

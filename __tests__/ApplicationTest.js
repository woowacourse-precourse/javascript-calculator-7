import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {//테스트 목용
  MissionUtils.Console.readLineAsync = jest.fn();//사용자가 
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();//inpu배열에서 첫번째 값을 꺼내고 그 값을 Input에 저장. 즉 배열의 앞에서부터 하나씩 제거하면서 차례대로 값을 반환
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
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

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    
    mockQuestions(inputs);//하나씩 꺼내서

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});

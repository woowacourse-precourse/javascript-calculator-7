import { Console } from "@woowacourse/mission-utils";
import Caculator from "../src/Calculator";  

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();  
    return Promise.resolve(input); 
  });
};

describe("Caculator 클래스 입력 테스트", () => {
  test("getInput 메서드가 입력값을 제대로 받아오는지 확인", async () => {
    const inputs = ["//;\\n1;2;3"];  // 테스트 입력값
    mockQuestions(inputs);

    const calculator = new Caculator();
    const input = await calculator.getInput();

    // 입력값이 제대로 받아졌는지 확인
    expect(input).toBe("//;\\n1;2;3");
  });

  test("calculate 메서드 전체 흐름 테스트", async () => {
    const inputs = ["//;\\n1;2;3"];
    mockQuestions(inputs);

    const calculator = new Caculator();

    // 콘솔 출력 모킹
    const logSpy = jest.spyOn(Console, "print");

    await calculator.calculate();

    // 결과 출력 확인
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));  // 1 + 2 + 3 = 6
  });
});
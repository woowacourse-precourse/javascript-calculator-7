import { inputHandler } from "../src/handlers/inputHandler.js";
import { Console } from "@woowacourse/mission-utils";

describe("inputHandler 테스트", () => {

  beforeEach(() => {
    jest.spyOn(Console, "print").mockImplementation(() => {});
    jest.spyOn(Console, "readLineAsync").mockImplementation(() => Promise.resolve("1,2,3"));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Console.print가 올바른 메시지를 출력하는지 확인", async () => {
    await inputHandler();
    expect(Console.print).toHaveBeenCalledWith("덧셈할 문자열을 입력해 주세요."); // 메시지를 출력하는 지 검증
  });

  test("Console.readlineAsync로 입력을 받아서 반환하는지 확인", async () => {
    const input = await inputHandler();
    expect(input).toBe("1,2,3"); // 모킹된 값인 "1,2,3"이 반환되는지 검증
  });
});
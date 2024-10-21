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

  test("Console.readlineAsync로 입력을 받아서 반환하는지 확인", async () => {
    const INPUT = await inputHandler();
    expect(INPUT).toBe("1,2,3"); // 모킹된 값인 "1,2,3"이 반환되는지 검증
  });
});
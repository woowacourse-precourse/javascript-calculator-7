import { outputHandler } from "../src/handlers/outputHandler.js";
import { Console } from "@woowacourse/mission-utils";

describe("outputHandler 테스트", () => {

  beforeEach(() => {
    jest.spyOn(Console, "print").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("outputHandler가 메시지를 정상적으로 출력하는 지 확인", async () => {
    await outputHandler("message");
    expect(Console.print).toHaveBeenCalledWith("message");
  });
});
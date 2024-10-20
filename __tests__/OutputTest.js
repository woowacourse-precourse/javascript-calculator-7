import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/Output";

describe("printResult()", () => {
  const { Console } = MissionUtils;

  test("결과 출력", async () => {
    const spy = jest.spyOn(Console, "print");
    Output.printResult(6);

    expect(spy).toHaveBeenCalledWith("결과 : 6");
  });
});

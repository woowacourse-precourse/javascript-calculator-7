import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/Output";
import { RESULT_MESSAGE } from "../src/constants/printMessage";

describe("printResult()", () => {
  const { Console } = MissionUtils;

  test("결과 출력", async () => {
    const spy = jest.spyOn(Console, "print");
    Output.printResult(6);

    expect(spy).toHaveBeenCalledWith(`${RESULT_MESSAGE}6`);
  });
});

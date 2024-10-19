import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/Output";

describe("printResult()", () => {
  let output;
  const { Console } = MissionUtils;

  beforeEach(() => {
    output = new Output(6);
  });

  test("결과 출력", async () => {
    const spy = jest.spyOn(Console, "print");
    output.printResult();

    expect(spy).toHaveBeenCalledWith("결과 : 6");
  });
});

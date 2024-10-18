import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/Input";

const { Console } = MissionUtils;

/**
 *
 * @param {string[]} mockInputs
 */
const mockQuestions = (mockInputs) => {
  const spy = jest.spyOn(Console, "readLineAsync");
  spy.mockImplementation(() => {
    const mockInput = mockInputs.shift();
    return Promise.resolve(mockInput);
  });
};

describe("getPlusString()", () => {
  let input;

  beforeEach(() => {
    input = new Input();
  });

  afterEach(jest.restoreAllMocks);

  test("사용자가 한 번 입력 시 입력을 올바르게 반환해야 함", async () => {
    const mockInput = ["1,2,3"];
    mockQuestions(mockInput);

    const result = await input.getPlusString();
    expect(result).toEqual("1,2,3");
  });
});

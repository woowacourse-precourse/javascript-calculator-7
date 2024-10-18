import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/Input";

const { Console } = MissionUtils;

const getConsoleSpy = () => jest.spyOn(Console, "readLineAsync");

/**
 *
 * @param {string[]} mockInputs
 * @param {jest.SpyInstance} spyFunc
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

  test("입력 안내 메시지 출력", async () => {
    const mockInput = ["1,2,3"];
    const spy = getConsoleSpy();
    mockQuestions(mockInput, spy);

    await input.getPlusString();
    expect(spy).toHaveBeenCalledWith("덧셈할 문자열을 입력해 주세요.\n");
  });

  test("사용자가 한 번 입력 시 입력을 올바르게 반환해야 함", async () => {
    const mockInput = ["1,2,3"];
    mockQuestions(mockInput);

    const result = await input.getPlusString();
    expect(result).toEqual("1,2,3");
  });
});

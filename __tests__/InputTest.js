import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/Input";
import { IncludeZeroError, InvalidSeparatorError, InvalidCustomSeparatorError } from "../src/Error";

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

describe("findCustomSeparatorAndNumbers()", () => {
  const input = new Input();
  const { findCustomSeparatorAndNumbers } = input;

  test("커스텀 구분자가 없을 때 빈 배열과 연산 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("1,2,3")).toEqual({
      customSeparator: [],
      numbers: "1,2,3",
    });
  });

  test("커스텀 구분자가 1개일 때 구분자 문자열 배열과 연산 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("//;\n1;2;3")).toEqual({
      customSeparator: [";"],
      numbers: "1;2;3",
    });
  });

  test("커스텀 구분자가 여러개일 때 구분자 문자열 배열과 연산 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("//;\n//$\n1;2;3")).toEqual({
      customSeparator: [";", "$"],
      numbers: "1;2;3",
    });
  });
});

describe("validateNumbers()", () => {
  let input;

  beforeEach(() => {
    input = new Input();
  });

  afterEach(jest.restoreAllMocks);

  test("연산 문자열이 구분자와 양수로 이루어져 있으면 문자열 그대로 반환", async () => {
    const mockInput = ["1,2,3"];
    mockQuestions(mockInput);
    await input.getPlusString();

    expect(input.validateNumbers()).toBe("1,2,3");
  });

  test("연산 문자열에 0이 포함되어 있으면 IncludeZeroError 반환", async () => {
    const mockInput = ["0,1,2"];
    mockQuestions(mockInput);
    await input.getPlusString();

    expect(() => input.validateNumbers()).toThrow(IncludeZeroError);
  });

  test("연산 문자열이 등록된 구분자와 양수로 이루어져 있으면 문자열 그대로 반환", async () => {
    const mockInput = ["//;\n1,2;3"];
    mockQuestions(mockInput);
    await input.getPlusString();

    expect(input.validateNumbers()).toBe("1,2;3");
  });

  test("연산 문자열에 등록되지 않은 구분자가 포함되어 있으면 InvalidSeparatorError 반환", async () => {
    const mockInput = ["//;\n1,2;;3"];
    mockQuestions(mockInput);
    await input.getPlusString();

    expect(() => input.validateNumbers()).toThrow(InvalidSeparatorError);
  });
});

describe("validateSeparators()", () => {
  let input;

  beforeEach(() => {
    input = new Input();
  });

  afterEach(jest.restoreAllMocks);

  test("커스텀 구분자가 문자로 이루어져 있으면 입력값 그대로 반환", async () => {
    const mockInput = ["//;\n//$\n1,2,3"];
    mockQuestions(mockInput);
    await input.getPlusString();

    expect(input.validateSeparators()).toEqual([";", "$"]);
  });

  test("커스텀 구분자로 숫자가 입력되면 InvalidCustomSeparatorError 반환", async () => {
    const mockInput = ["//;\n//1\n1,2,3"];
    mockQuestions(mockInput);
    await input.getPlusString();

    expect(() => input.validateSeparators()).toThrow(InvalidCustomSeparatorError);
  });
});

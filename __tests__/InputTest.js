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

  test("빈 문자열일 때 빈 배열과 빈 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("")).toEqual({
      customSeparator: [],
      numbers: "",
    });
  });

  test("커스텀 구분자가 없을 때 빈 배열과 연산 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("1,2,3")).toEqual({
      customSeparator: [],
      numbers: "1,2,3",
    });
  });

  test("커스텀 구분자가 1개일 때 구분자 문자열 배열과 연산 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("//;\\n1;2;3")).toEqual({
      customSeparator: [";"],
      numbers: "1;2;3",
    });
  });

  test("커스텀 구분자가 여러개일 때 구분자 문자열 배열과 연산 문자열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("//;\\n//$\\n1;2;3")).toEqual({
      customSeparator: [";", "$"],
      numbers: "1;2;3",
    });
  });

  test("커스텀 구분자 중복 시 중복 제거된 배열 반환", async () => {
    expect(findCustomSeparatorAndNumbers("//;\\n//;\\n1;2;3")).toEqual({
      customSeparator: [";"],
      numbers: "1;2;3",
    });
  });
});

describe("validateNumbers()", () => {
  test("연산 문자열이 구분자와 양수로 이루어져 있으면 문자열 그대로 반환", async () => {
    expect(Input.validateNumbers("1,2,3", [])).toBe("1,2,3");
  });

  test("연산 문자열에 0이 포함되어 있으면 IncludeZeroError 반환", async () => {
    expect(() => Input.validateNumbers("0,1,2", [])).toThrow(IncludeZeroError);
  });

  test("연산 문자열이 등록된 구분자와 양수로 이루어져 있으면 문자열 그대로 반환", async () => {
    expect(Input.validateNumbers("1,2;3", [";"])).toBe("1,2;3");
  });

  test("연산 문자열에 등록되지 않은 구분자가 포함되어 있으면 InvalidSeparatorError 반환", async () => {
    expect(() => Input.validateNumbers("1,2;;3", [";"])).toThrow(InvalidSeparatorError);
  });
});

describe("validateSeparators()", () => {
  test("커스텀 구분자가 문자로 이루어져 있으면 입력값 그대로 반환", async () => {
    expect(Input.validateSeparators([";", "$"])).toEqual([";", "$"]);
  });

  test("커스텀 구분자로 숫자가 입력되면 InvalidCustomSeparatorError 반환", async () => {
    expect(() => Input.validateSeparators([";", "1"])).toThrow(InvalidCustomSeparatorError);
  });
});

describe("에러메시지 출력", () => {
  test("IncludeZeroError 에러 발생 시", () => {
    try {
      throw new IncludeZeroError();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 입력 값에 0이 포함되어 있습니다.\n 구분자와 양수로 구성된 문자열을 입력해주세요.");
    }
  });

  test("InvalidSeparatorError 에러 발생 시", () => {
    try {
      throw new InvalidSeparatorError();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 입력 값에 등록되지 않은 구분자가 포함되어 있습니다.\n 문자옆 앞부분의 '//'와 '\\n' 사이에 커스텀 구분자를 입력하거나, 덧셈할 문자열에 구분자와 양수만 포함되도록 입력해주세요.");
    }
  });

  test("InvalidCustomSeparatorError 에러 발생 시", () => {
    try {
      throw new InvalidCustomSeparatorError();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 커스텀 구분자는 문자로 입력해주세요.");
    }
  });
});

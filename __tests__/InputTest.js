import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/Input";
import { IncludeZeroError, InvalidSeparatorError, InvalidCustomSeparatorError } from "../src/Error";
import { ERROR_HEADER, ERROR_BODY, INPUT_MESSAGE } from "../src/constants";

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
  afterEach(jest.restoreAllMocks);

  test("입력 안내 메시지 출력", async () => {
    const mockInput = ["1,2,3"];
    const spy = getConsoleSpy();
    mockQuestions(mockInput, spy);

    await Input.getPlusString();
    expect(spy).toHaveBeenCalledWith(INPUT_MESSAGE);
  });

  test("사용자가 한 번 입력 시 입력을 올바르게 반환해야 함", async () => {
    const mockInput = ["1,2,3"];
    mockQuestions(mockInput);

    const result = await Input.getPlusString();
    expect(result).toEqual("1,2,3");
  });
});

describe("findCustomSeparatorAndNumbers()", () => {
  test("빈 문자열일 때 빈 배열과 빈 문자열 반환", async () => {
    expect(Input.findCustomSeparatorAndNumbers("")).toEqual({
      customSeparator: [],
      numbers: "",
    });
  });

  test("커스텀 구분자가 없을 때 빈 배열과 연산 문자열 반환", async () => {
    expect(Input.findCustomSeparatorAndNumbers("1,2,3")).toEqual({
      customSeparator: [],
      numbers: "1,2,3",
    });
  });

  test("커스텀 구분자가 1개일 때 구분자 문자열 배열과 연산 문자열 반환", async () => {
    expect(Input.findCustomSeparatorAndNumbers("//;\\n1;2;3")).toEqual({
      customSeparator: [";"],
      numbers: "1;2;3",
    });
  });

  test("커스텀 구분자가 여러개일 때 구분자 문자열 배열과 연산 문자열 반환", async () => {
    expect(Input.findCustomSeparatorAndNumbers("//;\\n//$\\n1;2;3")).toEqual({
      customSeparator: [";", "$"],
      numbers: "1;2;3",
    });
  });

  test("커스텀 구분자 중복 시 중복 제거된 배열 반환", async () => {
    expect(Input.findCustomSeparatorAndNumbers("//;\\n//;\\n1;2;3")).toEqual({
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
      expect(error.message).toBe(`${ERROR_HEADER} ${ERROR_BODY.INCLUDE_ZERO}`);
    }
  });

  test("InvalidSeparatorError 에러 발생 시", () => {
    try {
      throw new InvalidSeparatorError();
    } catch (error) {
      expect(error.message).toBe(`${ERROR_HEADER} ${ERROR_BODY.INVALID_SEPARATOR}`);
    }
  });

  test("InvalidCustomSeparatorError 에러 발생 시", () => {
    try {
      throw new InvalidCustomSeparatorError();
    } catch (error) {
      expect(error.message).toBe(`${ERROR_HEADER} ${ERROR_BODY.INVALID_CUSTOM_SEPARATOR}`);
    }
  });
});

describe("getCustomSeparatorAndNumbers()", () => {
  afterEach(jest.restoreAllMocks);

  test("정상 입력이 들어왔을 때 커스텀 문자 배열과 연산자 문자열 반환", async () => {
    const mockInput = ["//;\\n1;2;3"];
    const spy = getConsoleSpy();
    mockQuestions(mockInput, spy);

    const result = await Input.getCustomSeparatorAndNumbers("//;\\n1;2;3");
    expect(result).toEqual({ customSeparator: [";"], numbers: "1;2;3" });
  });

  test("비정상 입력 시 에러 반환", async () => {
    const mockInput = ["1;2;3"];
    const spy = getConsoleSpy();
    mockQuestions(mockInput, spy);

    await expect(() => Input.getCustomSeparatorAndNumbers("1;2;3")).rejects.toThrow(InvalidSeparatorError);
  });
});

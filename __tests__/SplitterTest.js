import Splitter from "../src/Splitter";
import { ErrorMessages } from "../src/Constant";

describe("Splitter 테스트", () => {
  test("splitInput : 매개변수로 빈 문자열이 오는 경우", () => {
    const input = "";
    const output = ["", ""];
    const result = Splitter.splitInput(input);
    expect(result).toEqual(output);
  });

  test("splitInput : 매개변수로 숫자 입력부만 오는 경우", () => {
    const input = "1,2,3";
    const output = ["", "1,2,3"];
    const result = Splitter.splitInput(input);
    expect(result).toEqual(output);
  });

  test("splitInput : 매개변수로 커스텀 구분자 입력부만 오는 경우", () => {
    const input = "//abc\\n";
    const output = ["//abc", ""];
    const result = Splitter.splitInput(input);
    expect(result).toEqual(output);
  });

  test("splitInput : 모든 입력부에 값이 입력된 경우", () => {
    const input = "//;\\n1,2,3";
    const output = ["//;", "1,2,3"];
    const result = Splitter.splitInput(input);
    expect(result).toEqual(output);
  });

  test("splitInput 함수가 \\n이 두 개 이상 있는 경우 에러를 발생시킴", () => {
    const input = "//\\n\\n1,2:3";

    expect(() => {
      Splitter.splitInput(input);
    }).toThrow(ErrorMessages.SPLITTER_SPLIT_INPUT);
  });

  test("addDelimiter : 매개변수로 정상 형식의 커스텀 구분자가 오는 경우", () => {
    const delimiterSection = "//;";
    const resultDelimiters = [";", ",", ":"];

    Splitter.addDelimiter(delimiterSection);

    expect(Splitter.getDelimiters()).toEqual(resultDelimiters);
  });

  test("addDelimiter : 매개변수로 비정상 형식의 커스텀 구분자가 오는 경우", () => {
    const delimiterSection = "/;";

    expect(() => {
      Splitter.addDelimiter(delimiterSection);
    }).toThrow(ErrorMessages.SPLITTER_ADD_DELIMITER);
  });

  test("splitNumberSection : 정상적으로 나뉘는 경우", () => {
    const input = "1,2,3";
    const output = ["1", "2", "3"];
    const result = Splitter.splitNumberSection(input);

    expect(result).toEqual(output);
  });
});

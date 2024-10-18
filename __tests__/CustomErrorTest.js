import CustomError from "../src/CustomError";

describe("CustomError 테스트", () => {
  test("에러 메시지는 '[ERROR]'로 시작해야 한다.", () => {
    const throwCustomError = () => {
      throw new CustomError("error message");
    };
    expect(throwCustomError).toThrow(/^\[ERROR\]/);
  });

  test("CustomError는 Error의 확장이어야 한다.", () => {
    const throwCustomError = () => {
      throw new CustomError("error message");
    };
    expect(throwCustomError).toThrow(Error);
  });
});

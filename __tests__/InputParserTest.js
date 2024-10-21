import InputParser from "../src/InputParser";

describe('InputParser 테스트', () => {
  test('커스텀 구분자가 없을 경우', () => { 
    const userInput = '1:2,3';
    const expected = [1,2,3];
    const parser = new InputParser();
    const numbers = parser.parse(userInput);
    expect(numbers).toStrictEqual(expected);
  });
  test("커스텀 구분자가 한글자 들어온 경우", () => {
      const userInput = "//;\\n1:2,3;4";
      const expected = [1, 2, 3, 4];
      const parser = new InputParser();
      const numbers = parser.parse(userInput);
      expect(numbers).toStrictEqual(expected);
  });

  test("커스텀 구분자가 두글자 이상 들어온 경우", () => {
      const userInput = "//;.\\n1:2,3;4.5";
      const expected = [1, 2, 3, 4, 5];
      const parser = new InputParser();
      const numbers = parser.parse(userInput);
      expect(numbers).toStrictEqual(expected);
    });
  test("구분자가 연속으로 들어온 경우", () => {
    const userInput = "//a\\n1:2:aa3a4";
    const expected = [1,2,3,4];
    const parser = new InputParser();
    const numbers = parser.parse(userInput);
    expect(numbers).toStrictEqual(expected);
  })

  test("구분자가 -인 경우", () => {
    const userInput = "//-\\n1:2-3-4-5";
    const expected = [1,2,3,4,5];
    const parser = new InputParser();
    const numbers = parser.parse(userInput);
    epxect(numbers).toStrictEqual(expected);
  })
})

describe('InputParser 예외 테스트', ()=>{
    test("커스텀 구분자에 아무것도 들어오지 않은 경우", () => {
      const userInput = "//\\n1:2,3";
      const parser = new InputParser();
      expect(parser.parse(userInput)).reject.toThrow("[ERROR]");
    });
    
    test("커스텀 구분자가 아닌 문자가 식에 들어온 경우", () => {
      const userInput = "//a\\n1:2h3";
      const parser = new InputParser();
      expect(parser.parse(userInput)).reject.toThrow("[ERROR]");
    });

    test("식에 들어온 수가 음수인 경우", ()=>{
      const userInput = "//n\\n1:2:-3";
      const parser = new InputParser();
      expect(parser.parse(userInput)).reject.toThrow("[ERROR]");
    });
})
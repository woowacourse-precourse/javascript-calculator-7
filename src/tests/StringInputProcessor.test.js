import StringInputProcessor from '../classes/StringInputProcessor';

describe('StringInputProcessor', () => {
  let processor;

  beforeEach(() => {
    processor = new StringInputProcessor();
  });

  test('should process input with default delimiters', () => {
    const input = '1,2:3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should throw error for invalid delimiters', () => {
    const input = '1;2'; // ';'은 유효하지 않은 구분자
    expect(() => {
      processor.processInput(input);
    }).toThrow('[ERROR] 허용되지 않은 구분자: ; 가 입력되었습니다. 입력 문자열을 확인해주세요.');
  });

  test('should process input with custom delimiters', () => {
    const input = '//;\n1;2;3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });
});

import StringInputProcessor from '../classes/StringInputProcessor';

describe('StringInputProcessor', () => {
  let processor;

  beforeEach(() => {
    processor = new StringInputProcessor();
  });

  // 정상 케이스
  test('정상 케이스. 기본 구분자로 입력을 처리', () => {
    const input = '1,2:3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 커스텀 구분자로 입력을 처리', () => {
    const input = '//;\n1;2;3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 입력 값이 빈 문자열인 경우', () => {
    const input = '';
    const result = processor.processInput(input);
    expect(result).toEqual([0]);
  });

  test('정상 케이스. 여러 개의 커스텀 구분자 정의', () => {
    const input = '//;\n//^\n//&\n1;2^3&4';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('정상 케이스. 2개 이상의 문자로 이뤄진 커스텀 구분자 정의 - 1', () => {
    const input = '//^;\n1^;2^;3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 2개 이상의 문자로 이뤄진 커스텀 구분자 정의 - 2', () => {
    const input = '//,.\n1,.2,.3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 2개 이상의 문자로 이뤄진 여러 개의 커스텀 구분자 정의', () => {
    const input = '//,.\n//^&&\n1,.2^&&3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 기호가 아닌 문자로 커스텀 구분자 정의', () => {
    const input = '//a\n1a2a3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 기호가 아닌 여러 개의 문자로 커스텀 구분자 정의', () => {
    const input = '//abc\n1abc2abc3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 기호가 아닌 여러 개의 문자로 다수의 커스텀 구분자 정의', () => {
    const input = '//abc\n//bbd\n1abc2bbd3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 기호가 아닌 문자와 기호인 문자로 커스텀 구분자 정의', () => {
    const input = '//a^b\n1a^b2a^b3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 기호가 아닌 문자와 기호인 문자로 각각의 커스텀 구분자 정의', () => {
    const input = '//ab\n//*\n1ab2*3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('정상 케이스. 기호가 아닌 문자와 기호인 문자로 다수의 커스텀 구분자 정의', () => {
    const input = '//a^b\n//d^&\n1a^b2d^&3';
    const result = processor.processInput(input);
    expect(result).toEqual([1, 2, 3]);
  });

  // 에러 케이스
  test('에러 케이스. 잘못된 구분자가 포함된 경우', () => {
    const input = '1;2';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 ';' 가 입력되었습니다.");
  });

  test('에러 케이스. 첫 문자가 구분자인 경우', () => {
    const input = ',1,2:3';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] ',' 구분자 앞에 숫자가 없습니다.");
  });

  test('에러 케이스. 마지막 구분자 이후에 숫자가 없는 경우', () => {
    const input = '1,2,3,';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] ',' 구분자 뒤에 숫자가 없습니다.");
  });

  test('에러 케이스. 공백 문자열이 포함된 경우', () => {
    const input = '1, ,3';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 ', ,' 가 입력되었습니다.");
  });

  test('에러 케이스. 숫자 대신 특수 문자가 포함된 경우', () => {
    const input = '1,@,3';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 ',@,' 가 입력되었습니다.");
  });

  test('에러 케이스. 숫자가 아닌 문자가 포함된 경우', () => {
    const input = '1,a,3';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 ',a,' 가 입력되었습니다.");
  });

  test('에러 케이스. 연속된 구분자가 포함된 경우', () => {
    const input = '1,,2';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 ',,' 가 입력되었습니다.");
  });

  test('에러 케이스. 잘못된 커스텀 구분자 정의', () => {
    const input = '//[;\n1;2;3';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 ';' 가 입력되었습니다.");
  });

  test('에러 케이스. 기호가 아닌 문자가 입력된 경우', () => {
    const input = '1a2';
    expect(() => {
      processor.processInput(input);
    }).toThrow("[ERROR] 허용되지 않은 구분자 'a' 가 입력되었습니다.");
  });
});

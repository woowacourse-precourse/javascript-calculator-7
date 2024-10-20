import StringSplitter from '../src/Model/StringSplitter.js';

describe('String Splitter 테스트', () => {
  describe('split() 메서드 테스트', () => {
    test.each([
      { input: '1,2,3', expectedOutput: ['1', '2', '3'] },
      { input: '4:5:6', expectedOutput: ['4', '5', '6'] },
      { input: '7,8:9,10', expectedOutput: ['7', '8', '9', '10'] },
      { input: '11:12,13', expectedOutput: ['11', '12', '13'] },
      { input: '14', expectedOutput: ['14'] },
      { input: '', expectedOutput: [''] },
    ])(
      '입력 "$input"에 대해 쉼표와 콜론을 기준으로 문자열을 분리',
      ({ input, expectedOutput }) => {
        const stringSplitter = new StringSplitter(input);
        expect(stringSplitter.split().string).toEqual(expectedOutput);
      },
    );

    test.each([
      { input: '//;\\n1', expectedOutput: ['1'] },
      { input: '//,\\n2,3', expectedOutput: ['2', '3'] },
      { input: '//:\\n4:5', expectedOutput: ['4', '5'] },
      { input: '//;\\n6;7', expectedOutput: ['6', '7'] },
    ])(
      '커스텀 구분자를 사용한 경우, 입력 "$input"에 대해 문자열을 분리',
      ({ input, expectedOutput }) => {
        const stringSplitter = new StringSplitter(input);
        expect(stringSplitter.split().string).toEqual(expectedOutput);
      },
    );
  });

  describe('toNumbers() 메서드 테스트', () => {
    test.each([
      { input: ['0', '1', '2'], expectedOutput: [0, 1, 2] },
      { input: ['4.1', '5', '6.3'], expectedOutput: [4.1, 5, 6.3] },
      { input: ['0'], expectedOutput: [0] },
      { input: [''], expectedOutput: [0] },
    ])(
      '입력 "$input"에 대해 문자열을 숫자로 변환',
      ({ input, expectedOutput }) => {
        const stringSplitter = new StringSplitter('');
        stringSplitter.string = input;
        expect(stringSplitter.toNumbers()).toEqual(expectedOutput);
      },
    );
  });
});

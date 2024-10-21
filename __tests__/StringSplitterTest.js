import StringSplitter from '../src/splitters/StringSplitter';

describe('StringSplitter', () => {
  test('쉼표와 콜론으로 문자열을 분리한다', () => {
    const input = '1,2:3';
    const delimiters = [',', ':'];
    const output = ['1', '2', '3'];

    const splitter = new StringSplitter();
    const result = splitter.split(input, delimiters);

    expect(result).toEqual(output);
  });

  test('쉼표, 콜론, 커스텀 구분자로 문자열을 분리한다', () => {
    const input = '1,2:3;4';
    const delimiters = [',', ':', ';'];
    const output = ['1', '2', '3', '4'];

    const splitter = new StringSplitter();
    const result = splitter.split(input, delimiters);

    expect(result).toEqual(output);
  });
});

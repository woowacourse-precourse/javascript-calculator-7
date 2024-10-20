import DelimiterExtractor from '../src/delimiterExtractors/DelimiterExtractor';

describe('DelimiterExtractor', () => {
  test('입력 문자열에서 커스텀 구분자 설정 부분을 제거한다', () => {
    const input = '//;\\n1;2;3';
    const output = '1;2;3';

    const delimiterExtractor = new DelimiterExtractor();
    const processedInput = delimiterExtractor.extractDelimiter(input);

    expect(processedInput).toBe(output);
  });

  test('커스텀 구분자를 올바르게 추출한다', () => {
    const input = '//;\\n1;2;3';
    const output = ';';

    const delimiterExtractor = new DelimiterExtractor();
    delimiterExtractor.extractDelimiter(input);

    expect(delimiterExtractor.getDelimiters()).toContain(output);
  });

  test('기본 구분자를 반환한다', () => {
    const output = [',', ':'];

    const delimiterExtractor = new DelimiterExtractor();

    expect(delimiterExtractor.getDelimiters()).toEqual(output);
  });

  test('기본 구분자에 커스텀 구분자를 더해 반환한다', () => {
    const input = '//;\\n1;2;3';
    const output = [',', ':', ';'];

    const delimiterExtractor = new DelimiterExtractor();
    delimiterExtractor.extractDelimiter(input);

    expect(delimiterExtractor.getDelimiters()).toEqual(output);
  });

  test('커스텀 구분자 설정 부분이 문자열의 맨 앞에 위치하지 않으면 예외를 발생시킨다', async () => {
    const input = '1;2;3//;\\n';

    const delimiterExtractor = new DelimiterExtractor();

    expect(() => delimiterExtractor.extractDelimiter(input)).toThrow(
      '[ERROR] 커스텀 구분자는 문자열의 맨 앞에 위치해야 합니다.'
    );
  });
});

import { parseCalculatorInput } from '../../src/utils/parseCalculatorInput';

describe('parseCalculatorInput', () => {
  it('커스텀 구분자가 있을 때 구분자와 값을 분리한다.', () => {
    const input = '//;\\n1;2;3';
    const [delimiter, values] = parseCalculatorInput(input);

    expect(delimiter).toBe(';');
    expect(values).toBe('1;2;3');
  });

  it('커스텀 구분자가 없을 때 구분자는 undefined이고, 입력 값 그대로를 반환한다.', () => {
    const input = '1,2,3';
    const [delimiter, values] = parseCalculatorInput(input);

    expect(delimiter).toBeUndefined();
    expect(values).toBe('1,2,3');
  });

  it('커스텀 구분자가 비어있을 때도 제대로 처리한다.', () => {
    const input = '//\\n1,2,3';
    const [delimiter, values] = parseCalculatorInput(input);

    expect(delimiter).toBe('');
    expect(values).toBe('1,2,3');
  });

  it('커스텀 구분자가 여러 문자로 이루어진 경우도 처리한다.', () => {
    const input = '//abc\\n1abc2abc3';
    const [delimiter, values] = parseCalculatorInput(input);

    expect(delimiter).toBe('abc');
    expect(values).toBe('1abc2abc3');
  });

  it('커스텀 구분자가 있을 때만 hasCustomDelimiter 함수가 true를 반환한다.', () => {
    const input = '//;\\n1;2;3';
    const [delimiter, values] = parseCalculatorInput(input);

    expect(delimiter).toBe(';');
    expect(values).toBe('1;2;3');
  });

  it('정확한 구분자가 없을 때 기본 구분자로 처리하지 않는다.', () => {
    const input = '1\\n2,3';
    const [delimiter, values] = parseCalculatorInput(input);

    expect(delimiter).toBeUndefined();
    expect(values).toBe('1\\n2,3');
  });
});

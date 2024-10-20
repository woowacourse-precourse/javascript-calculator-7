import App from '../App';
import StringInputReader from '../classes/StringInputReader';
import StringOutputWriter from '../classes/StringOutputWriter';

describe('통합 테스트', () => {
  let app;
  let inputReaderSpy;
  let outputWriterSpy;

  beforeEach(() => {
    app = new App();

    inputReaderSpy = jest.spyOn(StringInputReader.prototype, 'getInput');
    outputWriterSpy = jest.spyOn(StringOutputWriter, 'printResult');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // 정상 케이스
  test('1. 정상 케이스. 기본 구분자 사용', async () => {
    inputReaderSpy.mockResolvedValue('1,2:3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('2. 정상 케이스. 커스텀 구분자 사용', async () => {
    inputReaderSpy.mockResolvedValue('//;\n1;2;3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('3. 정상 케이스. 입력 값이 빈 문자열인 경우', async () => {
    inputReaderSpy.mockResolvedValue('');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(0);
  });

  test('4. 정상 케이스. 여러 개의 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//;\n//^\n//&\n1;2^3&4');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(10);
  });

  test('5. 정상 케이스. 2개 이상의 문자로 이뤄진 커스텀 구분자 정의 - 1', async () => {
    inputReaderSpy.mockResolvedValue('//^;\n1^;2^;3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('6. 정상 케이스. 2개 이상의 문자로 이뤄진 커스텀 구분자 정의 - 2', async () => {
    inputReaderSpy.mockResolvedValue('//,.\n1,.2,.3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('7. 정상 케이스. 기호가 아닌 문자로 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//a\n1a2a3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('8. 정상 케이스. 기호가 아닌 여러 개의 문자로 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//abc\n1abc2abc3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('9. 정상 케이스. 기호가 아닌 여러 개의 문자로 다수의 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//abc\n//bbd\n1abc2bbd3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('10. 정상 케이스. 기호가 아닌 문자와 기호인 문자로 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//a^b\n1a^b2a^b3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('11. 정상 케이스. 기호가 아닌 문자와 기호인 문자로 각각의 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//ab\n//*\n1ab2*3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  test('12. 정상 케이스. 기호가 아닌 문자와 기호인 문자로 다수의 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//a^b\n//d^&\n1a^b2d^&3');
    await app.run();
    expect(outputWriterSpy).toHaveBeenCalledWith(6);
  });

  // 에러 케이스
  test('1. 에러 케이스. 잘못된 구분자가 포함된 경우', async () => {
    inputReaderSpy.mockResolvedValue('1;2');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 ';' 가 입력되었습니다."
    );
  });

  test('2. 에러 케이스. 첫 문자가 구분자인 경우', async () => {
    inputReaderSpy.mockResolvedValue(',1,2:3');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] ',' 구분자 앞에 숫자가 없습니다."
    );
  });

  test('3. 에러 케이스. 마지막 구분자 이후에 숫자가 없는 경우', async () => {
    inputReaderSpy.mockResolvedValue('1,2,3,');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] ',' 구분자 뒤에 숫자가 없습니다."
    );
  });

  test('4. 에러 케이스. 공백 문자열이 포함된 경우', async () => {
    inputReaderSpy.mockResolvedValue('1, ,3');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 ', ,' 가 입력되었습니다."
    );
  });

  test('5. 에러 케이스. 숫자 대신 특수 문자가 포함된 경우', async () => {
    inputReaderSpy.mockResolvedValue('1,@,3');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 ',@,' 가 입력되었습니다."
    );
  });

  test('6. 에러 케이스. 숫자가 아닌 문자가 포함된 경우', async () => {
    inputReaderSpy.mockResolvedValue('1,a,3');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 ',a,' 가 입력되었습니다."
    );
  });

  test('7. 에러 케이스. 연속된 구분자가 포함된 경우', async () => {
    inputReaderSpy.mockResolvedValue('1,,2');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 ',,' 가 입력되었습니다."
    );
  });

  test('8. 에러 케이스. 잘못된 커스텀 구분자 정의', async () => {
    inputReaderSpy.mockResolvedValue('//[;\n1;2;3');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 ';' 가 입력되었습니다."
    );
  });

  test('9. 에러 케이스. 기호가 아닌 문자가 입력된 경우', async () => {
    inputReaderSpy.mockResolvedValue('1a2');
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자 'a' 가 입력되었습니다."
    );
  });
});

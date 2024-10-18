import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('문자열 계산기', () => {
  test('기본 구분자를 사용한 계산', async () => {
    const inputs = ['1,2,3'];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('결과 : 6'));
  });

  test('기본 구분자 사용', async () => {
    const inputs = ['2,4:8'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 14'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('기본 구분자 사용', async () => {
    const inputs = ['1,2;3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자 사용', async () => {
    const inputs = ['//;\\n1;2;3'];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('결과 : 6'));
  });

  test('커스텀 구분자 사용', async () => {
    const inputs = ['//;\\n1,2:3;4;5'];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('결과 : 15'));
  });

  test('커스텀 공백 구분자 사용', async () => {
    const inputs = ['// \\n1 2 3 4 6'];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('결과 : 16'));
  });
  

  test('빈 입력 처리', async () => {
    const inputs = [''];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('결과 : 0'));
  });

  test('음수 입력 예외 처리', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닌 입력 예외 처리', async () => {
    const inputs = ['1,a,3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자 뒤 숫자가 아닌 입력 예외 처리', async () => {
    const inputs = ['//;\\na;2;3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('첫번째에 delimiter 입력 예외 처리', async () => {
    const inputs = [',1,2,3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('마지막 숫자 뒤에 delimiter 입력 예외 처리', async () => {
    const inputs = ['1,2,3:'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('consecutive delimiter 입력 예외 처리', async () => {
    const inputs = ['1,,2,3::4'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('consecutive delimiter 입력 예외 처리', async () => {
    const inputs = ['//;;\\n1;;2;;3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 입력 아무것도 없을 경우 예외 처리', async () => {
    const inputs = ['//\\n1,2,3'];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

});

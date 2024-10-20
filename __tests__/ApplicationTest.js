import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('문자열 계산기', () => {
  test('기본 구분자 사용', async () => {
    const inputs = ['1,3:4'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 8'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용', async () => {
    const inputs = ['//;\\n1;2'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('음수 입력 시 예외를 발생시킨다', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자 설정 부분이 문자열의 맨 앞에 위치하지 않으면 예외를 발생시킨다', async () => {
    const inputs = ['1;2;3//;\\n'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자의 길이가 2 이상이면 예외를 발생시킨다', async () => {
    const inputs = ['//;]\\n1;2;3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

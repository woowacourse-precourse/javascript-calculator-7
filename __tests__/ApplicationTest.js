import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    console.log('입력값:', input); // 입력값을 출력해 확인
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('문자열 계산기', () => {
  test('기본 구분자 사용', async () => {
    const inputs = ['1,2:3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('빈 문자열 입력 시 예외 발생', async () => {
    const inputs = ['', '   ', '\n'];
    for (const input of inputs) {
      mockQuestions([input]);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR] 한 자리 이상의 문자열을 입력해주세요');
    }
  });

  test('음수 입력 시 예외 발생', async () => {
    const inputs = ['-1,2,3', '1,-2', '1,-2,-3'];
    for (const input of inputs) {
      mockQuestions([input]);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR] 음수는 입력할 수 없습니다');
    }
  });

  test('잘못된 문자가 포함된 경우 예외 발생', async () => {
    const inputs = ['1,2,a', '1:b:c', '1,2:!', 'abc'];
    for (const input of inputs) {
      mockQuestions([input]);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR] 구분자와 숫자 이외의 허용되지 않은 문자가 존재합니다');
    }
  });

  test('커스텀 구분자 사용', async () => {
    const inputs = [`//;\\n1;2;3`];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

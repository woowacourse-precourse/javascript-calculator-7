import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

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
  test('공백은 0으로 처리한다.', async () => {
    const inputs = ['', '    '];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 0'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('구분자로 가지는 문자열을 전달한 경우, 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.', async () => {
    const inputs = ['//-\\n1,2-3', '//-\\n1-2-30', '///\\n1/2:4'];

    mockQuestions(inputs);

    for (let i = 0; i < inputs.length; i++) {
      const logSpy = getLogSpy();
      const outputs = ['결과 : 6', '결과 : 33', '결과 : 7'];

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(outputs[i]));
    }
  });

  test('2자리 이상 숫자는 2개의 수가 아니라 하나의 수로 처리한다.', async () => {
    const inputs = ['12,100,38'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 150'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('잘못된 값은 예외로 처리한다.', async () => {
    const inputs = ['1;2,3', '1,a,2', '//-\\n1,2+3'];
    mockQuestions(inputs);

    for (let i = 0; i < inputs.length; i++) {
      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    }
  });
});

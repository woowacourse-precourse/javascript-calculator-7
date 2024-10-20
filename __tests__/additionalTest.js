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
  test('커스텀 구분자 사용', async () => {
    const inputs = ['//+\\n1+2'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('빈 문자열 입력', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 0'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each(['//]\n-1]2]3', '-1:2,3'])(
    '예외 테스트 - 음수 입력',
    async (input) => {
      const inputs = [input];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('숫자는 양수만 가능합니다.');
    }
  );

  test('예외 테스트 - 숫자만 입력된 경우', async () => {
    const inputs = ['123'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('구분자가 없습니다.');
  });

  test('예외 테스트 - 숫자가 입력되지 않은 경우', async () => {
    const inputs = ['**/-'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('숫자가 없습니다.');
  });

  test('예외 테스트 - 쉼표(,) 또는 콜론(:) 구분자 외에 다른 구분자가 있는 경우', async () => {
    const inputs = ['1*2:3'];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      '쉼표(,) 또는 콜론(:) 외 다른 구분자가 입력되었습니다.'
    );
  });

  test('예외 테스트 - 커스텀구분자 외에 다른 구분자가 있는 경우', async () => {
    const inputs = ['//*\\n1*2+3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '커스텀구분자 외에 다른 구분자가 입력되었습니다.'
    );
  });
});

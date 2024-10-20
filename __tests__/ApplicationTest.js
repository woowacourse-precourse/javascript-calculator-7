import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constant/message.js';

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
  test.each([
    { inputs: ['//;\\n1;2000;30'], expected: '결과 : 2031' },
    { inputs: ['1,2:3'], expected: '결과 : 6' },
    { inputs: ['1.5:2:3'], expected: '결과 : 6.5' },
  ])('정상 동작 테스트', async ({ inputs, expected }) => {
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});

describe('예외 테스트', () => {
  test('미입력', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.empty);
  });

  test('커스텀 구분자 - 음수', async () => {
    const inputs = ['//+\\n1+-2+3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.negativeNumber);
  });

  test('기본구분자 - 구분자 뒤 숫자 미입력', async () => {
    const inputs = ['1,2,'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.missingNumber);
  });

  test('유효하지 않은 구분자', async () => {
    const inputs = ['1,2-3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.invalidDelimiter);
  });

  test('기본 구분자 - 음수', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.defaultStart);
  });

  test('커스텀 구분자 - 포맷', async () => {
    const inputs = ['//\\n1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.customForamt);
  });

  test('커스텀 구분자 - 길이', async () => {
    const inputs = ['//-=\\n1-=2'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.length);
  });

  test('커스텀 구분자 - 온점', async () => {
    const inputs = ['//.\\n23.1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.period);
  });
});

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
  test('커스텀 구분자 사용 1', async () => {
    const inputs = ['//;\\n1'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 1'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용 2', async () => {
    const inputs = ['//!\\n1!2!3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용 3', async () => {
    const inputs = ['//123\\n11232'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용 4', async () => {
    const inputs = ['//\\n1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자 사용 5', async () => {
    const inputs = ['//1/a/b\\n11/a/b23'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 24'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용 6', async () => {
    const inputs = ['//.\\n1.2.3.4.5.6.7.8.9.10'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 55'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용 7', async () => {
    const inputs = ['//-\\n1-2'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('음수 테스트 1', async () => {
    const inputs = ['-1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('음수 테스트 2', async () => {
    const inputs = ['-1,2'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('음수 테스트 3', async () => {
    const inputs = ['//-\n0--1,2'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닌 문자열 입력', async () => {
    const inputs = ['1,2,3,4,5,a'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('큰 수', async () => {
    const inputs = [
      '99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
    ];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 1e+308'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('0이 포함되어 있는 경우', async () => {
    const inputs = ['0'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
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
    const inputs = ['//;\\n1'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 1'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용2', async () => {
    const inputs = ['//.\\n1.2.3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('길이가 긴 커스텀 구분자 사용', async () => {
    const inputs = ['//123\\n13,21233'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 18'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('길이가 긴 커스텀 구분자가 여러개 있을경우', async () => {
    const inputs = ['//123\\n//22\\n13,21233221'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 19'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자 생성이 문자열 맨 앞이 아닐경우 예외 테스트', async () => {
    const inputs = ['//.\\n1,2,3.4//;\\n5'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자가 여러개일 경우', async () => {
    const inputs = ['//;\\n//hi\\n1,2:3hi4;5hi6'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 21'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('입력값이 없는 경우', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 0'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자에 이스케이프 시퀀스가 들어가는 경우', async () => {
    const inputs = ['//\\t\\n1\\t2'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자에 이스케이프 시퀀스가 여러개 들어가는 경우', async () => {
    const inputs = ['//\\t\\a\\n1\\t\\a2\\t\\a3,4'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 10'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('이스케이프 시퀀스를 가진 커스텀 구분자가 여러개 들어가는 경우', async () => {
    const inputs = ['//\\t\\n//\\a\\n1\\a2\\t,3:4'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 10'];

    const app = new App();
    await app.run();

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자에 특수문자가 들어가는 경우', async () => {
    const meta = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '()',
      '`',
      '~',
      '-',
      '_',
      '+',
      '=',
      '[',
      ']',
      '[]',
      '{',
      '}',
      '{}',
      ';',
      ':',
      "'",
      '"',
      "''",
      '""',
      '<',
      ',',
      '.',
      '>',
      '/',
      '?',
      '\\',
      '|',
    ];
    meta.forEach(async m => {
      const inputs = [`//${m}\\n1${m}2,3`];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ['결과 : 6'];

      const app = new App();
      await app.run();

      outputs.forEach(output => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });
});

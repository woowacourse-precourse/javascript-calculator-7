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

  test('예외 테스트', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('(추가) 문자열 계산기 - 입력', () => {
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

  test('문자열 양끝에 공백 포함', async () => {
    const inputs = [String.raw` //;t\n1;t5  `];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('문자열 사이에 공백 포함', async () => {
    const inputs = ['//;\n1; 2'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('(추가) 문자열 계산기 - 기본 구분자', () => {
  test('입력된 문자열에 기본 구분자가 포함되어 있지 않은 경우', async () => {
    const inputs = ['123'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 123'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('(추가) 문자열 계산기 - 커스텀 구분자', () => {
  test('커스텀 구분자가 명시되지 않은 경우', async () => {
    const inputs = ['//\n12'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자로 숫자가 입력된 경우', async () => {
    const inputs = ['//2\n125'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test(`커스텀 구분자로 '\'가 사용된 경우 허용`, async () => {
    const inputs = [String.raw`//\\n15\7\2`];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 24'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자로 `/`가 사용된 경우 허용', async () => {
    const inputs = [String.raw`///\n56/4/3`];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 63'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('파싱 후 문자열에 커스텀 구분자가 포함되어 있지 않은 경우', async () => {
    const inputs = ['//;\n125'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('파싱 후 문자열에 문자가 없거나 공백으로만 이루어져 있는 경우', async () => {
    const inputs = ['//;\n;'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('(추가) 문자열 계산기 - 구분자 파싱 후', () => {
  test('빈 문자열일 경우', async () => {
    const inputs = [';'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닌 값이 포함되어 있을 경우', async () => {
    const inputs = ['1;a;3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('음수가 포함되어 있을 경우', async () => {
    const inputs = ['1;-4;87'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

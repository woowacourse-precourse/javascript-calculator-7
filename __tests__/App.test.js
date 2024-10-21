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

describe('App', () => {
  it('구분자 , 를 인식하여 계산 결과를 출력한다.', async () => {
    const inputs = ['1,2'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('구분자 : 를 인식하여 계산 결과를 출력한다.', async () => {
    const inputs = ['1:2'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('구분자 ,: 를 인식하여 계산 결과를 출력한다.', async () => {
    const inputs = ['1:2,3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('커스텀 구분자를 인식하여 결과를 출력한다.', async () => {
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

  it('다양한 커스텀 구분자를 인식하여 결과를 출력한다.', async () => {
    const inputs = ['//abc\\n1a1b1c1,1:1'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('빈 입력값은 0으로 결과를 출력한다.', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();

    const logSpy = getLogSpy();
    const outputs = ['결과 : 0'];

    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('입력 값을 더하여 결과를 출력한다.', async () => {
    const inputs = ['1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('큰 숫자 입력값을 계산하여 결과를 출력한다.', async () => {
    const inputs = ['99999999999999999999999,1'];
    mockQuestions(inputs);

    const app = new App();

    const logSpy = getLogSpy();
    const outputs = ['결과 : 100000000000000000000000'];

    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('계산 범위 양식에 맞지 않는 것을 인식하여 에러를 표시한다.', async () => {
    const inputs = ['1,'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  it('입력에 음수가 나올 경우 에러를 표시한다.', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

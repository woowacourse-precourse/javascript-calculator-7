import App from '../src/controller/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Game from '../src/controller/Game.js';

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

    const game = new Game();
    await game.process();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const game = new Game();

    await expect(game.process()).rejects.toThrow('[ERROR]');
  });

  test('기본 구분자 사용', async () => {
    const inputs = ['1,2:3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const game = new Game();
    await game.process();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('다양한 커스텀 구분자 사용', async () => {
    const inputs = ['//!\\n1!2!3', '//b\\n1b2b3b4'];

    for (const input of inputs) {
      mockQuestions([input]);
      const logSpy = getLogSpy();
      const expectedSum = input
        .split('\\n')[1]
        .split(input[2])
        .reduce((acc, cur) => acc + Number(cur), 0);
      const outputs = [`결과 : ${expectedSum}`];

      const game = new Game();
      await game.process();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    }
  });

  test('소수점 처리', async () => {
    const inputs = ['0.5,0.1,0.2', '//;\\n1.5;0.2;0.3'];
    for (const input of inputs) {
      mockQuestions([input]);

      const game = new Game();
      await expect(game.process()).rejects.toThrow('[ERROR]');
    }
  });
});

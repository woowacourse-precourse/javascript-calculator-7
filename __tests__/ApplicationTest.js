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

  describe('기능 요구 사항에 기재된 내용 테스트', () => {
    describe('커스텀 구분자가 없는 경우', () => {
      test('아무것도 입력되지 않은 경우 0을 반환한다', async () => {
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

      test('기본 구분자가 있는 경우 기본 구분자를 기준으로 분리한 각 수의 합을 반환한다', async () => {
        const inputs = ['1,2:3,,4:::5'];
        mockQuestions(inputs);

        const logSpy = getLogSpy();
        const outputs = ['결과 : 15'];

        const app = new App();
        await app.run();

        outputs.forEach((output) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
      });
    });

    describe('커스텀 구분자가 있는 경우', () => {
      test('커스텀 구분자가 올바른 위치에 정의되지 않은 경우 에러를 발생시킨다', async () => {
        const inputs = ['1:2//;\\n:3'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('커스텀 구분자가 숫자로만 구성된 경우 에러를 발생시킨다', async () => {
        const inputs = ['//12\\n1:2:3'];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow('[ERROR]');
      });
    });
  });

  describe('기능 요구 사항에 기재되지 않은 내용 테스트', () => {
    test('커스텀 기본자와 함께 기본 구분자가 주어지는 경우 모두를 구분자로 사용한다', async () => {
      const inputs = ['//;\\n1;2:3,4'];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ['결과 : 10'];

      const app = new App();
      await app.run();

      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test('커스텀 구분자가 빈 값인 경우 기본 구분자를 기준으로 분리한 각 수의 합을 반환한다', async () => {
      const inputs = ['//\\n1,2:3,,4:::5'];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});

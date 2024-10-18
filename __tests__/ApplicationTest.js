import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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

const runCalculatorTestCorrect = async (input, output) => {
  const inputs = [input];
  const outputs = [`결과 : ${output}`];
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();
  await app.run();
  outputs.forEach(output => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
};

const runCalculatorTestError = async input => {
  const inputs = [input];
  mockQuestions(inputs);

  const app = new App();

  await expect(app.run()).rejects.toThrow('[ERROR]');
};

describe('문자열 계산기', () => {
  describe('커스텀 구분자 사용', () => {
    describe('커스텀 구분자 1개', () => {
      test('숫자 1개 입력', async () => {
        await runCalculatorTestCorrect('//;\n1', '1');
      });
      test('숫자 3개 입력', async () => {
        await runCalculatorTestCorrect('//v\n1v23v456', '480');
      });
    });
    describe('커스텀 구분자 2개', () => {
      test('숫자 1개 입력', async () => {
        await runCalculatorTestCorrect('//;v\n1', '1');
      });
      test('숫자 3개 입력', async () => {
        await runCalculatorTestCorrect('//;v\n1v23;456', '480');
      });
    });
    describe('특수한 구분자 3개', () => {
      test('숫자 1개 입력', async () => {
        await runCalculatorTestCorrect('//;v\b\n1', '1');
      });
      test('숫자 3개 입력', async () => {
        await runCalculatorTestCorrect('//;v\b\n1\\23b456', '480');
      });
      test('중복된 특수한 구분자 & 숫자 3개 입력', async () => {
        await runCalculatorTestCorrect('//;vv\n1v23v456', '480');
      });
    });
  });

  describe('기본 구분자 사용', () => {
    test('빈 문자열 입력', async () => {
      await runCalculatorTestCorrect('', '0');
    });
    test('숫자 1개 입력', async () => {
      await runCalculatorTestCorrect('1', '1');
    });
    test('숫자 3개 입력', async () => {
      await runCalculatorTestCorrect('1,2:3', '6');
    });
    test('숫자 10개 입력', async () => {
      await runCalculatorTestCorrect('1,2:3,4:5,6:7,8:9,10', '55');
    });
    test('큰 수 입력', async () => {
      await runCalculatorTestCorrect('999999999,1', '1000000000');
    });
  });

  describe('예외 테스트', () => {
    test('0 입력', async () => {
      await runCalculatorTestError('0');
    });
    test('음수 입력', async () => {
      await runCalculatorTestError('-1,2,3');
    });
    test('기본 구분자 외의 구분자 사용', async () => {
      await runCalculatorTestError('1\\2');
    });
    test('커스텀 구분자 외의 구분자 사용', async () => {
      await runCalculatorTestError('\\;\n1,2');
    });
    test('숫자 외의 문자 입력', async () => {
      await runCalculatorTestError('\\;\na');
    });
    test('숫자 중간에 커스텀 구분자 사용', async () => {
      await runCalculatorTestError('1,2:3//;\n4;5');
    });
    test('구분자를 마지막에 삽입', async () => {
      await runCalculatorTestError('1,2,');
    });
    test('커스텀 구분자 지정이 올바르지 않은 경우', async () => {
      await runCalculatorTestError('//\n1,2,3');
    });
  });
});

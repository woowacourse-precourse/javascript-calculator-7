import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('문자열 계산기', () => {
  describe('커스텀 구분자 사용', () => {
    test('숫자 1개 입력 시 해당 숫자를 출력한다.', async () => {
      await runCalculatorTestCorrect('//;vrw\n1', '1');
    });
    test('2개 이상의 숫자 입력 시 커스텀 구분자를 기준으로 분리하여 값을 더해 출력한다.', async () => {
      await runCalculatorTestCorrect('//;vowe\n1v20w300w4000', '4321');
    });
    test('특수한 구분자를 사용했을 때 해당 커스텀 구분자를 기준으로 분리하여 값을 더해 출력한다.', async () => {
      await runCalculatorTestCorrect('//;|v\\n1v20\\300|4000', '4321');
    });
  });

  describe('기본 구분자 사용', () => {
    test('빈 문자열 입력 시 0을 출력한다', async () => {
      await runCalculatorTestCorrect('', '0');
    });
    test('숫자 1개 입력 시 해당 숫자를 출력한다.', async () => {
      await runCalculatorTestCorrect('1', '1');
    });
    test('2개 이상의 숫자 입력 시 기본 구분자를 기준으로 분리하여 값을 더해 출력한다.', async () => {
      await runCalculatorTestCorrect('1,20:300,4000', '4321');
    });
  });

  describe('예외 테스트', () => {
    test('0 입력 시 에러를 출력한다.', async () => {
      await runCalculatorTestError('0');
    });
    test('음수 입력 시 에러를 출력한다.', async () => {
      await runCalculatorTestError('-1');
    });
    test('기본 구분자 외의 구분자 사용시 에러를 출력한다.', async () => {
      await runCalculatorTestError('1\\2');
    });
    test('커스텀 구분자 외의 구분자 사용시 에러를 출력한다.', async () => {
      await runCalculatorTestError('\\;\n1,2');
    });
    test('숫자 외의 문자 입력시 에러를 출력한다.', async () => {
      await runCalculatorTestError('\\;\na');
    });
    test('숫자 중간에 커스텀 구분자 사용시 에러를 출력한다.', async () => {
      await runCalculatorTestError('1,2:3//;\n4;5');
    });
    test('구분자를 마지막에 삽입시 에러를 출력한다.', async () => {
      await runCalculatorTestError('1,2,');
    });
    test('커스텀 구분자 지정이 올바르지 않을 시 에러를 출력한다.', async () => {
      await runCalculatorTestError('//\n1,2,3');
    });
  });
});

function mockQuestions(inputs) {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
}

function getLogSpy() {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
}

async function runCalculatorTestCorrect(input, output) {
  const inputs = [input];
  const outputs = [`결과 : ${output}`];
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();
  await app.run();
  outputs.forEach(output => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
}

async function runCalculatorTestError(input) {
  const inputs = [input];
  mockQuestions(inputs);

  const app = new App();

  await expect(app.run()).rejects.toThrow('[ERROR]');
}

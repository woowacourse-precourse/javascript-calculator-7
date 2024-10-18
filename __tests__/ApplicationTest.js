import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants/message.js';

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

const runAppAndCheckOutput = async (inputs, outputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();

  const app = new App();
  await app.run();

  outputs.forEach(output => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
};

const runAppAndExpectError = async (inputs, errorMessage) => {
  mockQuestions(inputs);
  const app = new App();
  await expect(app.run()).rejects.toThrow(errorMessage);
};

describe('문자열 계산기', () => {
  test('정상 입력', async () => {
    await runAppAndCheckOutput(['1,2,3'], ['결과 : 6']);
    await runAppAndCheckOutput(['1:2:3'], ['결과 : 6']);
    await runAppAndCheckOutput(['1,2:3'], ['결과 : 6']);
    await runAppAndCheckOutput(['1.1,2.1:3'], ['결과 : 6.2']);
    await runAppAndCheckOutput(['1.1,2.1,3.'], ['결과 : 6.2']);
  });
  test('커스텀 구분자 사용', async () => {
    await runAppAndCheckOutput(['//;\\n1'], ['결과 : 1']);
    await runAppAndCheckOutput(['//a\\n1a2a3'], ['결과 : 6']);
  });
  test('커스텀 구분자로 특수문자', async () => {
    await runAppAndCheckOutput(['//%\\n1%2%3'], ['결과 : 6']);
  });
  test('커스텀 구분자로 공백', async () => {
    await runAppAndCheckOutput(['// \\n1 2'], ['결과 : 3']);
  });
  test('커스텀 구분자로 백슬래쉬', async () => {
    await runAppAndCheckOutput(['//\\\\n1\\2'], ['결과 : 3']);
    await runAppAndCheckOutput(['//\\\\n1\\2,3'], ['결과 : 6']);
  });
  test('제로값 입력 처리', async () => {
    await runAppAndCheckOutput(['0,0,1'], ['결과 : 1']);
    await runAppAndCheckOutput(['01,0,1'], ['결과 : 2']);
  });
  test('빈 문자열 입력 처리', async () => {
    await runAppAndCheckOutput([''], ['결과 : 0']);
    await runAppAndCheckOutput(['//;\\n'], ['결과 : 0']);
  });
  test('커스텀 구분자가 2자 이상일 경우 예외', async () => {
    await runAppAndExpectError(
      ['//;;\\n1;;2;;3'],
      ERROR_MESSAGE.invalidCustomSeparatorLength,
    );
    await runAppAndExpectError(
      ['//aa\\n1aa2aa3'],
      ERROR_MESSAGE.invalidCustomSeparatorLength,
    );
  });
  test('등록되지 않은 구분자 사용 예외', async () => {
    await runAppAndExpectError(['1,2;3'], ERROR_MESSAGE.invalidInput);
  });

  test('음수 입력 예외', async () => {
    await runAppAndExpectError(['-1,2,3'], ERROR_MESSAGE.invalidInput);
  });

  test('구분자가 시작이나 끝에 있을 때 예외', async () => {
    await runAppAndExpectError(['1,2,'], ERROR_MESSAGE.hasBoundarySeparator);
    await runAppAndExpectError([',1,2'], ERROR_MESSAGE.hasBoundarySeparator);
    await runAppAndExpectError([','], ERROR_MESSAGE.hasBoundarySeparator);
  });

  test('빈 커스텀 구분자 예외', async () => {
    await runAppAndExpectError(
      ['//\\n1,2,3'],
      ERROR_MESSAGE.invalidCustomSeparator,
    );
  });

  test('구분자가 연속으로 올 때 예외', async () => {
    await runAppAndExpectError(['1,2::3'], ERROR_MESSAGE.consecutiveSeparators);
    await runAppAndExpectError(
      ['//;\\n1;;2::3,4'],
      ERROR_MESSAGE.consecutiveSeparators,
    );
  });

  test('허용되지 않은 문자가 있을 때 예외', async () => {
    await runAppAndExpectError(['1,2:3,sdf'], ERROR_MESSAGE.invalidInput);
    await runAppAndExpectError(['1,2:3,^'], ERROR_MESSAGE.invalidInput);
  });

  test('공백이 포함된 입력 예외', async () => {
    await runAppAndExpectError(['1, 2'], ERROR_MESSAGE.invalidInput);
  });

  test('.는 커스텀 구분자로 허용되지 않음', async () => {
    await runAppAndExpectError(
      ['//.\\n1.2.3'],
      ERROR_MESSAGE.invalidCustomSeparatorDot,
    );
  });

  test('잘못된 소수점 입력 예외', async () => {
    await runAppAndExpectError(['1..2,3'], ERROR_MESSAGE.consecutiveDots);
  });
});

// __tests__/ApplicationTest.js

import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

/**
 * 사용자 입력을 모킹하는 함수
 * @param {string[]} inputs - 순서대로 입력될 문자열 배열
 */
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

/**
 * Console.print 메서드를 스파이하는 함수
 * @returns {jest.SpyInstance} - 스파이 인스턴스
 */
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('문자열 계산기 - 기본 기능', () => {
  test('빈 문자열 입력 시 0을 반환한다', async () => {
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

  test('숫자 하나를 입력하면 해당 숫자를 반환한다', async () => {
    const inputs = ['3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 3'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('쉼표 구분자로 숫자를 더한다', async () => {
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

  test('쉼표와 콜론 구분자로 숫자를 더한다', async () => {
    const inputs = ['1,2:3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('음수를 입력하면 예외를 발생시킨다', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR] 음수는 입력할 수 없습니다.'));
  });

  test('유효하지 않은 입력값이 있으면 예외를 발생시킨다', async () => {
    const inputs = ['1,a,3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR] 유효한 숫자가 아닙니다.'));
  });
});

describe('문자열 계산기 - 커스텀 구분자', () => {
  test('단일 커스텀 구분자를 사용하여 숫자를 더한다(;)', async () => {
    const inputs = ['//;\n1;2;3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test('단일 커스텀 구분자를 사용하여 숫자를 더한다(@)', async () => {
    const inputs = ['//@\n1@2@3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  //커스텀 구분자 혀용시 테스트 진행
  test('여러 커스텀 구분자를 사용하여 숫자를 더한다', async () => {
    const inputs = ['//[;][*]\n1;2*3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  //커스텀 구분자 혀용시 테스트 진행
  test('여러 문자로 구성된 커스텀 구분자를 사용하여 숫자를 더한다', async () => {
    const inputs = ['//[***][%%]\n1***2%%3'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  //커스텀 구분자 혀용시 테스트 진행
  test('여러 커스텀 구분자를 사용하고 유효하지 않은 입력값을 포함할 경우 예외를 발생시킨다', async () => {
    const inputs = ['//[;][*]\n1;2*a'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR] 유효한 숫자가 아닙니다.'));
  });
});

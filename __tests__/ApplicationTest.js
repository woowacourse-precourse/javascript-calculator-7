import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

// 사용자 입력을 모킹하는 함수
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// MissionUtils.Console.print 메서드에 대한 스파이를 설정하는 함수
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear(); // 호출 기록을 초기화
  return logSpy;
};

describe('문자열 계산기', () => {
  test('기본 구분자 사용', async () => {
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

  // 빈 문자열 입력 시 예외가 발생하는 테스트 케이스
  test.each(['', '   ', '\n'])('빈 문자열 입력 시 예외 발생', async (input) => {
    mockQuestions([input]);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 한 자리 이상의 문자열을 입력해주세요');
  });

  // 음수 입력 시 예외가 발생하는 테스트 케이스
  test.each(['-1,2,3', '1,-2', '1,-2,-3'])('음수 입력 시 예외 발생', async (input) => {
    mockQuestions([input]);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 음수는 입력할 수 없습니다');
  });

  // 잘못된 문자가 포함된 경우 예외가 발생하는 테스트 케이스
  test.each(['1,2,a', '1:b:c', '1,2:!', 'abc'])('잘못된 문자가 포함된 경우 예외 발생', async (input) => {
    mockQuestions([input]);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 구분자와 숫자 이외의 허용되지 않은 문자가 존재합니다');
  });

  test('커스텀 구분자 사용', async () => {
    const inputs = [`//;\\n1;2;3`]; // 커스텀 구분자를 사용한 입력
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 6'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

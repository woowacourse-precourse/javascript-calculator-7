import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
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
    const inputs = [
      '//;\\n1',
      '//<\\n1<2',
      '//>\\n//<\\n1>2<3',
      '//>\\n0.1>0.2',
    ];
    const outputs = ['결과 : 1', '결과 : 3', '결과 : 6', '결과 : 0.3'];
    const logSpy = getLogSpy();

    inputs.forEach(async (input) => {
      const output = outputs.shift();
      mockQuestions(input);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', async () => {
    const inputs = [
      '-1,2,3',
      '1,2,3//;\\n',
      '//;\\n1,2,3//;\\n',
      '//;\\n1,2//>\\n3>4',
      '1,2//;\\n3,4',
      '',
      '3ㅁ3',
    ];

    inputs.forEach(async (input) => {
      mockQuestions(input);

      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});

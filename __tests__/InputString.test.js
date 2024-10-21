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

const checkSuccess = async (inputs, expectedOutputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();
  await app.run();
  expectedOutputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
};

// 성공 케이스
describe('입력 문자열 예외 테스트 : 성공', () => {
  const successCases = [
    { name: '\\ 를 커스텀 구분자로 사용', inputs: ['//\\\\n1\\2,3'], outputs: ['결과 : 6'] },
    { name: '] 를 커스텀 구분자로 사용', inputs: ['//]\\n1]2,3'], outputs: ['결과 : 6'] },
    { name: '| 를 커스텀 구분자로 사용', inputs: ['//|\\n1|2,3'], outputs: ['결과 : 6'] },
    { name: '[ 를 커스텀 구분자로 사용', inputs: ['//[\\n1[2:3'], outputs: ['결과 : 6'] },
    { name: '- 를 커스텀 구분자로 사용', inputs: ['//-\\n-1,2:3'], outputs: ['결과 : 6'] },
    { name: '/ 를 커스텀 구분자로 사용', inputs: ['///\\n1/2:3'], outputs: ['결과 : 6'] },
    { name: '\' 를 커스텀 구분자로 사용', inputs: ['//\'\\n1\'2:3'], outputs: ['결과 : 6'] },
    { name: '\" 를 커스텀 구분자로 사용', inputs: ['//\"\\n1\"2:3'], outputs: ['결과 : 6'] },
    { name: ': 를 커스텀 구분자로 사용', inputs: ['//:\\n1,2:3'], outputs: ['결과 : 6'] },
    { name: '.를 커스텀 구분자로 사용', inputs: ['//.\\n1.2.3.4'], outputs: ['결과 : 10'] },
    { name: '한글을 커스텀 구분자로 사용', inputs: ['//ㄱ\\n1ㄱ2,3:4'], outputs: ['결과 : 10'] },
    { name: '알파벳을 커스텀 구분자로 사용', inputs: ['//a\\n1a2.3:4'], outputs: ['결과 : 7.3'] },
    { name: '구분자만 쓰기', inputs: ['::::::'], outputs: ['결과 : 0'] },
    { name: '계산 문자열에 커스텀 구분자만 쓰기', inputs: ['//@\\n@@@@'], outputs: ['결과 : 0'] },
    { name: '아무것도 입력하지 않음', inputs: [''], outputs: ['결과 : 0'] },
    { name: '공백 입력', inputs: ['  '], outputs: ['결과 : 0'] },
    { name: '앞에 공백을 두고 문자열 작성', inputs: ['  1,2'], outputs: ['결과 : 3'] },
    { name: '중간에 공백을 두고 문자열 작성', inputs: ['  1, 2'], outputs: ['결과 : 3'] },
    { name: '뒤에 공백을 두고 문자열 작성', inputs: ['  1, 2  '], outputs: ['결과 : 3'] },
    { name: '커스텀 구분자 지정 문자열만 입력', inputs: ['//;\\n'], outputs: ['결과 : 0'] },
    { name: '두자리수 입력', inputs: ['10:20'], outputs: ['결과 : 30'] },
    { name: '소수점이 포함된 숫자 입력', inputs: ['1.2:3'], outputs: ['결과 : 4.2'] },
  ];

  successCases.forEach(({ name, inputs, outputs }) => {
    test(name, async () => {
      await checkSuccess(inputs, outputs);
    });
  });
});

// 오류 케이스
describe('입력 문자열 예외 테스트 : 오류 발생', () => {
  const errorCases = [
    { name: '두개 이상의 커스텀 문자:\\\\', inputs: ['//\\\\\\n1\\2'], errorMessage: '[ERROR] 커스텀 구분자는 단일 문자를 사용해야합니다.' },
    { name: '커스텀 문자 작성하지 않음', inputs: ['//\\n1\\2'], errorMessage: '[ERROR] 커스텀 구분자 지정 형식에 맞지 않거나 커스텀 구분자가 작성되지 않았습니다.' },
    { name: '문자열에 0입력', inputs: ['0,1'], errorMessage: '[ERROR] 입력 문자열에 0이나 음수가 포함되어 있습니다.' },
    { name: '커스텀 구분자 형식 맞지 않는 것', inputs: ['/0,1'], errorMessage: '[ERROR] 커스텀 구분자 지정 형식에 맞지 않거나 커스텀 구분자가 작성되지 않았습니다.' },
    { name: '커스텀 구분자 형식과 문자열에 0 입력', inputs: ['//;\\n0,1'], errorMessage: '[ERROR] 입력 문자열에 0이나 음수가 포함되어 있습니다.' },
    { name: '유효하지 않은 구분자로 시작', inputs: [';\\n0,1'], errorMessage: '[ERROR] 입력 문자열에 유효하지 않은 구분자가 있습니다.' },
    { name: '0 을 커스텀 구분자로 사용', inputs: ['//0\\n102'], errorMessage: '[ERROR] 커스텀 구분자는 숫자를 사용할 수 없습니다.' },
    { name: '유효하지 않은 구분자 사용', inputs: ['1;2'], errorMessage: '[ERROR] 입력 문자열에 유효하지 않은 구분자가 있습니다.' },
  ];

  errorCases.forEach(({ name, inputs, errorMessage }) => {
    test(name, async () => {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow(errorMessage);
    });
  });
});

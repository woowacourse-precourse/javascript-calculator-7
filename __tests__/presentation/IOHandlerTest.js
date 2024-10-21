import { MissionUtils } from '@woowacourse/mission-utils';
import IOHandler from '../../src/presentation/IOHandler.js';

describe("getInput 메서드 테스트", () => {

  const mockReadLineAsync = (input) => {
    MissionUtils.Console.readLineAsync = jest.fn().mockResolvedValue(input);
  };
  
  test('getInput 메서드가 올바른 프롬프트 메시지를 출력하는지 확인', async () => {
    const input = '1,2,3';
    const expectedPrompt = '덧셈할 문자열을 입력해 주세요.\n';
    mockReadLineAsync(input);

    const readLineSpy = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    const ioHandler = new IOHandler();
    await ioHandler.getInput();

    expect(readLineSpy).toHaveBeenCalledWith(expectedPrompt);
  });

  test.each([
    { input: '', expected: '' },
    { input: '1', expected: '1' },
    { input: '1,2,3', expected: '1,2,3' },
    { input: '//:\\n2:3:4', expected: '//:\\n2:3:4' },
    { input: 'sadfa', expected: 'sadfa' },
  ])('getInput 메서드가 입력받은 문자열 "$input"을 반환하는지 확인', async ({ input, expected }) => {
    mockReadLineAsync(input);

    const ioHandler = new IOHandler();
    const result = await ioHandler.getInput();

    expect(result).toBe(expected);
  });
});

describe("displayResult 메서드 테스트", () => {
  test.each([
    { input: 0, expected: '결과 : 0' },
    { input: 1, expected: '결과 : 1' },
    { input: 123, expected: '결과 : 123' },
  ])('displayResult 메서드가 입력받은 결과값을 출력하는지 확인', (testCase) => {
    const { input, expected } = testCase;
    const printSpy = jest.spyOn(MissionUtils.Console, 'print');
    const ioHandler = new IOHandler();
    ioHandler.displayResult(input);

    expect(printSpy).toHaveBeenCalledWith(expected);
  });
});

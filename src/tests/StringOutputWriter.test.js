import StringOutputWriter from '../classes/StringOutputWriter';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('StringOutputWriter', () => {
  test('should print result to console', () => {
    const result = 6;
    StringOutputWriter.printResult(result);

    expect(Console.print).toHaveBeenCalledWith('결과 : 6');
  });
});

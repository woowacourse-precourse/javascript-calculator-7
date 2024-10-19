import StringInputReader from '../classes/StringInputReader';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('StringInputReader', () => {
  test('should read input from console', async () => {
    const mockInput = '1,2,3';
    Console.readLineAsync.mockResolvedValue(mockInput);

    const inputReader = new StringInputReader();
    const result = await inputReader.getInput();

    expect(result).toBe(mockInput);
    expect(Console.readLineAsync).toHaveBeenCalled();
  });
});

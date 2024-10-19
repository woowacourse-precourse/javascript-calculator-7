import App from '../App';
import StringInputReader from '../classes/StringInputReader';
import StringInputProcessor from '../classes/StringInputProcessor';
import StringCalculator from '../classes/StringCalculator';
import StringOutputWriter from '../classes/StringOutputWriter';

jest.mock('../classes/StringInputReader');
jest.mock('../classes/StringInputProcessor');
jest.mock('../classes/StringCalculator');
jest.mock('../classes/StringOutputWriter');

describe('App', () => {
  test('should run the full process', async () => {
    const mockInput = '1,2,3';
    const mockProcessedInput = [1, 2, 3];
    
    StringInputReader.prototype.getInput.mockResolvedValue(mockInput);
    StringInputProcessor.prototype.processInput.mockReturnValue(mockProcessedInput);
    StringCalculator.sum.mockReturnValue(6);

    const app = new App();
    await app.run();

    expect(StringInputReader.prototype.getInput).toHaveBeenCalled();
    expect(StringInputProcessor.prototype.processInput).toHaveBeenCalledWith(mockInput);
    expect(StringCalculator.sum).toHaveBeenCalledWith(mockProcessedInput);
    expect(StringOutputWriter.printResult).toHaveBeenCalledWith(6);
  });
});

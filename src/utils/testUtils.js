import { MissionUtils } from '@woowacourse/mission-utils';

export const mockMultipleQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  inputs.forEach((input) => {
    MissionUtils.Console.readLineAsync.mockImplementationOnce(() => Promise.resolve(input));
  });
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

export const expectResults = async (app, outputs) => {
  const logSpy = getLogSpy();
  for (const output of outputs) {
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    logSpy.mockClear();
  }
};

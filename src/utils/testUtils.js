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
  const promiseArray = outputs.map((output) => {
    return async () => {
      await app.run();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      logSpy.mockClear();
    };
  });
  await Promise.all(promiseArray);
};

export const expectToThrow = async (app, inputs) => {
  const promiseArray = [];
  for (let i = 0; i < inputs.length; i += 1) {
    promiseArray.push(async () => {
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  }
  await Promise.all(promiseArray);
};

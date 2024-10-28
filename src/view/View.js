import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGES } from '../constants/messages.js';

export const getCarNames = async () => {
  const inputs = await Console.readLineAsync(
    PROMPT_MESSAGES.INPUT_ADDITION_CAR
  );
  return inputs;
};

export const getAttempts = async () => {
  const attempts = await Console.readLineAsync(PROMPT_MESSAGES.INPUT_ATTEMPTS);
  return attempts;
};

export const displayRaceProgress = (cars) => {
  cars.forEach((car) => {
    Console.print(`${car.name} : ${car.distance}`);
  });
  Console.print(`\n`);
};

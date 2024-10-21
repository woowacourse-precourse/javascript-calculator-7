import { MESSAGE } from './message/message.js';
import { NUMBERS } from './number/number.js';
import { SEPARATOR } from './separator/separator.js';

export const CONSTANTS = Object.freeze({ ...NUMBERS, ...SEPARATOR, ...MESSAGE });

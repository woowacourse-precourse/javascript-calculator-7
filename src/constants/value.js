export const SPECIAL_CHARACTERS = Object.freeze({
  colon: ':',
  comma: ',',
  slash: '/',
  newline: '\n',
});

export const INDEX = Object.freeze({
  start: 0,
  next: 1,
  newline: -1,
  separator: 2,
});

export const DEFAULT_SEPARATOR = new RegExp(
  `[${SPECIAL_CHARACTERS.colon + SPECIAL_CHARACTERS.comma}]`,
);

export const FORMAT = Object.freeze({
  default: /^[1-9][0-9]*([,:][1-9][0-9]*)*/,
  custom: /^\/\/[a-zA-Z`~!@#$%^&*()_+\-=[\]{}\\|;':",./<>?]+\n/,
});

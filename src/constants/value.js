export const INDEX = Object.freeze({
  start: 0,
  next: 1,
  newline: -2,
  separator: 2,
});

export const DEFAULT_SEPARATOR = /[:,]/;

export const FORMAT = Object.freeze({
  default: /^[1-9][0-9]*([,:][1-9][0-9]*)*/,
  custom: /^\/\/[a-zA-Z`~!@#$%^&*()_+\-=[\]{}\\|;':",./<>?]+\\n/,
});

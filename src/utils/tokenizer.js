export function tokenizer(str, delimiters, validators = []) {
  if (!str) {
    return [];
  }

  const delimiterRegExp = new RegExp(`[${delimiters.join('')}]`);
  const tokens = str.split(delimiterRegExp);

  tokens.forEach((value) => {
    validators.forEach((validator) => {
      if (!validator(value)) {
        throw new Error('잘못된 입력 형식이에요.');
      }
    });
  });

  return tokens;
}

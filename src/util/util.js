const _reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const _pipe =
  (...fns) =>
  (x) =>
    _reduce((v, f) => f(v), x, fns);

//커스텀 구분자 추출 함수
const extractCustomDelimiter = (input) => {
  if (input.startsWith('//')) {
    const delimiter = input.indexOf('\\n');
    const customDelimiter = input.substring(2, delimiter);
    return customDelimiter;
  }
  return null;
};

export { _reduce, _pipe, extractCustomDelimiter };

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const go = (...args) => reduce((a, f) => f(a), args);

//커스텀 구분자 추출 함수
const extractCustomDelimiter = (input) => {
  if (input.startsWith('//')) {
    const delimiter = input.indexOf('\\n');
    const customDelimiter = input.substring(2, delimiter);
    return customDelimiter;
  }
  return null;
};

export { reduce, go, extractCustomDelimiter };

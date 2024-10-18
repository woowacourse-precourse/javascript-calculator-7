function validateNumbers(parsedArray) {
  return parsedArray.map((value) => {
    const number = Number(value);

    if (Number.isNaN(number))
      throw new Error('[ERROR] 구분자 이외의 문자열이 포함되어 있습니다.');

    return number;
  });
}

export default validateNumbers;

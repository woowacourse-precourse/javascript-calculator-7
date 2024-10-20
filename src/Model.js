class Model {
  calculate(input) {
    // 커스텀 구분자 찾는 정규표현식
    const regex = /^\/\/(.+)\\n/;
    const match = input.match(regex);

    let stringNumbers;
    if (match) {
      const customDelimiter = match[1];
      const newInput = input.replace(regex, ''); // 커스텀 구분자를 정의한 부분 제거
      stringNumbers = newInput.split(customDelimiter); // 커스텀 구분자로 split
    } else {
      stringNumbers = input.split(/[,|:]/); // 쉼표와 콜론 구분자 사용
    }

    // 숫자 합 계산 및 음수 처리
    const sum = stringNumbers.reduce((acc, number) => {
      if (number.includes('-')) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다');
      }
      return acc + Number(number);
    }, 0);

    return sum;
  }
}

export default Model;

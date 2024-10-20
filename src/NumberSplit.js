//커스텀 구분자확인, 숫자 추출 로직

class NumberSplit {
  static split(input, delimiters) {
    let parts = [input];

    delimiters.forEach((delimiter) => {
      parts = parts.flatMap((part) => part.split(delimiter));
    });

    return parts
      .map((part) => part.trim())
      .filter((part) => part !== "" && !part.startsWith("//"));
  }
}

export default NumberSplit;

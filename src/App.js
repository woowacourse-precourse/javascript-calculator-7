class App {
  async run() {}
  /**
   *
   * @param {*} input
   * @returns
   * 있다면 list로 반환
   * 없다면 null
   *
   * "//;,//|/\\n1;2;3"
   * 인식 x 케이스
   */

  // 여러개일 수 있음
  findCustomCharNList(input) {
    // 문자열 앞부분의 "//"와 "\n" 사이에 존재한다.

    let obj = {
      customCharString: null,
      numberList: null,
    };

    const preCharRegex = /^\/\//; // 문자열이 //로 시작하는지 확인
    const afterCharRegex = /\\n/; // 보기에는 \n

    const hasPreChar = preCharRegex.test(input);
    const hasEndChar = afterCharRegex.test(input);

    console.log(`hasEndChar : ${hasEndChar}`);

    if (hasPreChar && hasEndChar) {
      let [customCharStr, numberList] = input.split(afterCharRegex);

      obj.customCharString = String.raw`${customCharStr.substring(
        input.search(preCharRegex) + 2,
        input.search(afterCharRegex)
      )}`;

      // afterCharRegex부터 끝까지
      obj.numberList = numberList;
    }

    return obj;
  }

  splitByComma(input) {
    return splitBySeperaterChar(":", input);
  }

  splitBySemiColumn(input) {
    return splitBySeperaterChar(";", input);
  }

  splitBySeperaterChar(sepChar, input) {
    let result;
    if (!!input) {
      const numbers = input.split(sepChar);
      result = this.sum(numbers);
      Console.print(result);
      return result;
    }
  }

  sum(splitedList) {
    let result = splitedList.reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    }, 0);

    return result;
  }
}

export default App;

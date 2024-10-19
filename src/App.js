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

  /**
   * 불필요한 검사 막기 위한 함수
   * @param {*} numberList 순회할 가치가 있는 숫자 "리스트" 형식만 들어와야함
   * @returns
   * 
   *  let checkObj = {
      valid: true,
      value: null,
    };
   * 
   */
  checkNumberList(numberList) {
    let checkObj = {
      valid: true,
      value: null,
    };

    if (numberList.length === 0) {
      checkObj.valid = false;
      checkObj.value = 0;
    }

    if (numberList.length == 1) {
      checkObj.valid = false;
      checkObj.value = numberList[0];
    }

    return checkObj;
  }
}

export default App;

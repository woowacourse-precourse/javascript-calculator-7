import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let seperatorCharList = [",", ":"];

    let USER_INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
    let inputString = String.raw`${USER_INPUT}`;

    let obj = this.splitByNewLineChar(inputString);
    let { customSeperatorString, numberString } = obj;

    if (customSeperatorString) {
      customSeperatorString.split("").forEach((elem) => {
        seperatorCharList.push(elem);
      });
    } else {
      // 커스텀 구분자가 없는 경우
      // 일반인 경우
      numberString = inputString;
    }

    let statusOfNumberList = this.checkNumberList(
      Boolean(customSeperatorString),
      numberString
    );

    if (!statusOfNumberList.valid) {
      Console.print(`결과 : ${statusOfNumberList.value}`);
      return;
    }

    let splitedList = numberString.split(
      this.getSeperatorRegex(seperatorCharList)
    );

    const numberList = splitedList.map((elem) => {
      const numElem = Number(elem);
      if (isNaN(numElem)) {
        throw Error("[ERROR]: 숫자가 아닙니다.");
      }
      return numElem;
    });

    numberList.forEach((elem) => {
      if (elem < 0) {
        throw Error("[ERROR]: 양수가 아닙니다.");
      }
    });

    let result = this.sum(numberList);

    Console.print(`결과 : ${result}`);
  }

  /**
   *
   * @param {*} input
   * @returns
   */
  splitByNewLineChar(input) {
    let obj = {
      customSeperatorString: null,
      numberString: null,
    };

    const doubleSlashRegex = /^\/\//; // 문자열이 //로 시작하는지 확인
    const newLineCharRegex = /\\n/; // 보기에는 \n

    // const regex = /^\/\/*\\n/; // 문자열이 //로 시작하는지 확인
    const regex = doubleSlashRegex.test(input) && newLineCharRegex.test(input);

    if (!regex) {
      return obj;
    }

    let [customSeperatorString, numberString] = input.split(
      newLineCharRegex,
      2
    );

    customSeperatorString = customSeperatorString.split(doubleSlashRegex)[1];

    obj.customSeperatorString = customSeperatorString;
    obj.numberString = numberString;

    return obj;
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

  getSeperatorRegex(seperatorCharList) {
    // let finalRe = new RegExp(lower.source + "|" + upper.source);
    // todo: 특수기호도 잘 인식되는지 마지막에 확인할것
    let regexArr = seperatorCharList.map((elem) => {
      if (elem === "\\") {
        return new RegExp("\\" + elem);
      } else {
        return new RegExp(elem);
      }
    });

    let regexString = "";

    for (let i = 0; i < regexArr.length; i++) {
      if (i === regexArr.length - 1) {
        regexString += regexArr[i].source;
      } else {
        regexString += regexArr[i].source + "|";
      }
    }

    return new RegExp(regexString);
  }
}

export default App;

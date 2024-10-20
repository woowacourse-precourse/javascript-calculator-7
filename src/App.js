import { Console } from "@woowacourse/mission-utils";

const seperatorChar = [",", ":"];

class App {
  async run() {
    let USER_INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
    let inputString = String.raw`${USER_INPUT}`;

    let obj = this.findCustomCharNList(inputString);
    let { customCharString, numberList } = obj;

    if (customCharString) {
      customCharString.split("").forEach((elem) => {
        seperatorChar.push(elem);
      });
    } else {
      // 커스텀 구분자가 없는 경우
      // 일반인 경우
      numberList = inputString;
    }

    let statusOfNumberList = this.checkNumberList(numberList);

    if (!statusOfNumberList.valid) {
      Console.print(`결과 : ${statusOfNumberList.value}`);
      return;
    }

    /**
     * 1.,가 있다면 ,기준으로 배열로 분리한다.
     * 2.:가 있다면 그 안에 분리 되지 않은 :를 기준으로 분리한다.
     * 3. 나머지 연산자도 마찬가지로 반복한다.
     */

    let splitedList = [];
    let splitedFlag = false;

    for (let i = 0; i < seperatorChar.length; i++) {
      if (numberList.includes(seperatorChar[i])) {
        if (!splitedFlag) {
          splitedFlag = true;
          splitedList = numberList.split(seperatorChar[i]);
        } else {
          splitedList.forEach((elem, idx) => {
            if (elem.includes(seperatorChar[i])) {
              // 이전 인자 제거
              splitedList.splice(idx, 1);
              splitedList.push(...elem.split(seperatorChar[i]));
            }
          });
        }
      }
    }

    let result = this.sum(splitedList);
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

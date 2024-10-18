import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.seps = [',', ':'];
    this.result = 0;
    this.inputs = "";
    this.debugFlag = false;
    this.customeFlag = false;
    this.error = false;
  }

  async read() {
    this.inputs = await Console.readLineAsync("enter the string with seperators: ");
  }

  isCustomSep() {
    if(
      this.inputs.slice(0, 2) === "//" && 
      this.inputs.slice(3, 5) === "\\n") {
      //// TODO //X\n 명확한 순서로 입력받은 경우로 수정할 필요있음
      this.seps.push(this.inputs[2]);
      this.customeFlag = true;
    } else {
    
      this.customeFlag = false;
    }
  }

  async sol() {
    let val = "";
    let sum = 0;

    for(let i = this.customeFlag ? 5 : 0; i < this.inputs.length; i++) {
      //this.inputs[i]
      //   //^\n1^23^4,6_10
      if(!isNaN(Number(this.inputs[i]))) { /// 숫자인 경우
        val += this.inputs[i];
      } else { /// 구분자인 경우
        if(val === "") {
          this.error = true;
          return;
        }

        if(this.seps.includes(this.inputs[i])) {
          sum += Number(val);
          val = "";
        } else {
          this.error = true;
          return;
        }
      }
    }

    sum += Number(val);

    await Console.print("결과 : " + sum);
  }

  errorHandling() {
    throw Error("[ERROR]");
  }

  debug(inputString, testCount) {
    Console.print("-------------------------------");

    Console.print(`${testCount + 1}번째 테스트 케이스 : ${inputString}`);

    let val = "";
    let sum = 0;

    this.error = false;
    this.inputs = inputString;
    this.customeFlag = false;
    this.seps = ['.', ','];

    this.isCustomSep();

    if(this.customeFlag) Console.print('custom flag on');
    else Console.print('custome flag off');


    for(let i = this.customeFlag ? 5 : 0; i < inputString.length; i++) {
      //this.inputs[i]
      //   //^\n1^23^4,6_10
      if(!isNaN(Number(inputString[i]))) { /// 숫자인 경우
        // Console.print(i + "번째 시행");
        // Console.print(i + "번째 값 : " + inputString[i]);
        val += inputString[i];
      } else { /// 구분자인 경우
        if(val === "") {
          this.error = true;
          break;
        }

        if(this.seps.includes(inputString[i])) {
          sum += Number(val);
          val = "";
        } else {
          this.error = true;
          break;
        }
      }
      // Console.print("tmp 값 : " + val);
      // Console.print(sum);
    }

    sum += Number(val);
    if(this.error) {
      Console.print(`[Error]발생`);
    } else {
      Console.print(`${testCount + 1}번째 테스트 케이스 결과 : ${sum}`);
    }


    Console.print("-------------------------------");
  }

  async run() {
    this.debugFlag = true;

    const testInput = 
    ["//^\\n1^23^4,6,10", "1,2,3,4,5", "//^\\n-1^3,1,2",
      "//&\\n11&2&3,5,7", "1/2/3/4/5", "//(\\n1(2(3(4",
      "//-\\n1-2-34"
    ];

    if(this.debugFlag) {
      testInput.forEach((e, i) => {
        this.debug(e, i);
      });
    } else {
      await this.read();
      this.isCustomSep();
      this.sol();

      if(this.error) throw Error("[ERROR] : 잘 못된 문자열을 입력받았습니다");
    }
  }
}

// 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

// 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
// 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
// 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
// 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
// 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

export default App;

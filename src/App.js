import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    var ERROR_MESSAGE = "[ERROR] ";
    var SUM = 0;

    function throwError(ERROR) {
      console.log((ERROR_MESSAGE += ERROR));
      throw new Error();
    }

    // async function printResult() {
    MissionUtils.Console.readLine(
      "덧셈할 문자열을 입력해 주세요.\n",
      (INPUT) => {
        var NUM_LIST = [];
        var NUM = "";
        var SEPARATOR = "";
        var START_IDX = 1;
        var ERROR_MESSAGE = "[ERROR] ";
        // var SUM = 0;

        function throwError(ERROR) {
          console.log((ERROR_MESSAGE += ERROR));
          throw new Error();
        }

        if ((INPUT.slice(0, 2) == "//") & (INPUT.slice(4, 6) == "\\n")) {
          // console.log(`1.first if statement`);
          if (!!parseInt(INPUT.slice(2, 3))) {
            // process.stdout.write(ERROR_MESSAGE);
            throwError(`구별자가 숫자입니다.`);
          }
          START_IDX = 6;
          SEPARATOR = [INPUT.slice(2, 3)];
        } else if ((INPUT[0] != 0) & !parseInt(INPUT[0])) {
          if (INPUT[0] == undefined) {
            // console.log(`1.second if, first if statement`);
            console.log(`결과 : 0`);
            return;
          } else if (INPUT.trim() == "") {
            // console.log(`1.second if, second else if`);
            // process.stdout.write(ERROR_MESSAGE);
            throwError(`숫자를 입력하시지 않으셨습니다.`);
          } else {
            // process.stdout.write(ERROR_MESSAGE);
            throwError(`숫자가 아닌 것으로 연산을 시작했습니다.`);
            // console.log(`1.second if, third else`);
          }
        } else {
          NUM = INPUT[0];
          // console.log("1.second else");
        }
        for (var IDX = START_IDX; IDX < INPUT.length; IDX++) {
          // console.log(`IDX: ${IDX}, NUM: ${NUM}, NUM_LIST: ${NUM_LIST}`);
          if (
            (!!SEPARATOR & (INPUT[IDX] == SEPARATOR)) |
            (!SEPARATOR & ((INPUT[IDX] == ",") | (INPUT[IDX] == ":")))
          ) {
            // console.log(`NUM: ${NUM}`);
            if (parseInt(NUM).toString() == NUM) {
              if (IDX < INPUT.length - 1) {
                NUM_LIST.push(parseInt(NUM));
                NUM = "";
              } else {
                // process.stdout.write(ERROR_MESSAGE);
                throwError(`구별자로 끝났습니다.`);
              }
            } else {
              // process.stdout.write(ERROR_MESSAGE);
              throwError(`구별자나 숫자가 아닌 것을 입력하셨습니다.`);
            }
          } else NUM += INPUT[IDX];
        }

        if (parseInt(NUM).toString() != NUM) {
          // console.log(`2.first if`);
          if (NUM.trim() == "") {
            // process.stdout.write(ERROR_MESSAGE);
            throwError(`숫자를 입력하시지 않으셨습니다.`);
            // console.log(`first if, first if`);
          }
          // console.log("2.first if, error");
          throwError(`구별자나 숫자가 아닌 것을 입력하셨습니다.`);
        } else {
          // console.log(`2.first if, second else`);
          NUM_LIST.push(parseInt(NUM));
        }

        SUM = NUM_LIST.reduce((ACCU, CURR, IDX) => {
          return (ACCU += CURR);
        }, 0);

        MissionUtils.Console.print(`결과: ${SUM}`);
      }
    );
    // printResult().then(
    //   function(value) {MissionUtils.Console.print(`결과: ${SUM}`);},
    //   function(error) {throwError();}
    // );
  }
}
export default App;

//   );
//   // MissionUtils.Console.print();
//   MissionUtils.Console.readLine(
//     "덧셈할 문자열을 입력해 주세요.\n",
//     (INPUT) => {
//       var NUM_LIST = [];
//       var NUM = "";
//       var SEPARATOR = "";
//       var START_IDX = 1;
//       var ERROR_MESSAGE = "[ERROR] ";
//       // var SUM = 0;

//       function throwError(ERROR) {
//         console.log((ERROR_MESSAGE += ERROR));
//         throw new Error();
//       }
//       // console.log(INPUT.slice(0, 2), INPUT.slice(3, 6));
//       // console.log(
//       //   INPUT.slice(0, 2) == "//",
//       //   INPUT.slice(3, 6) == "\\n",
//       //   INPUT.slice(3, 5) == "\\",
//       //   INPUT.slice(4, 5) == "\n",
//       //   INPUT.slice(4, 6) == "\\n"
//       // );
//       if ((INPUT.slice(0, 2) == "//") & (INPUT.slice(4, 6) == "\\n")) {
//         // console.log(`1.first if statement`);
//         if (!!parseInt(INPUT.slice(2, 3))) {
//           // process.stdout.write(ERROR_MESSAGE);
//           throwError(`구별자가 숫자입니다.`);
//         }
//         START_IDX = 6;
//         SEPARATOR = [INPUT.slice(2, 3)];
//       } else if ((INPUT[0] != 0) & !parseInt(INPUT[0])) {
//         if (INPUT[0] == undefined) {
//           // console.log(`1.second if, first if statement`);
//           console.log(`결과 : 0`);
//           return;
//         } else if (INPUT.trim() == "") {
//           // console.log(`1.second if, second else if`);
//           // process.stdout.write(ERROR_MESSAGE);
//           throwError(`숫자를 입력하시지 않으셨습니다.`);
//         } else {
//           // process.stdout.write(ERROR_MESSAGE);
//           throwError(`숫자가 아닌 것으로 연산을 시작했습니다.`);
//           // console.log(`1.second if, third else`);
//         }
//       } else {
//         NUM = INPUT[0];
//         // console.log("1.second else");
//       }
//       for (var IDX = START_IDX; IDX < INPUT.length; IDX++) {
//         // console.log(`IDX: ${IDX}, NUM: ${NUM}, NUM_LIST: ${NUM_LIST}`);
//         if (
//           (!!SEPARATOR & (INPUT[IDX] == SEPARATOR)) |
//           (!SEPARATOR & ((INPUT[IDX] == ",") | (INPUT[IDX] == ":")))
//         ) {
//           // console.log(`NUM: ${NUM}`);
//           if (parseInt(NUM).toString() == NUM) {
//             if (IDX < INPUT.length - 1) {
//               NUM_LIST.push(parseInt(NUM));
//               NUM = "";
//             } else {
//               // process.stdout.write(ERROR_MESSAGE);
//               throwError(`구별자로 끝났습니다.`);
//             }
//           } else {
//             // process.stdout.write(ERROR_MESSAGE);
//             throwError(`구별자나 숫자가 아닌 것을 입력하셨습니다.`);
//           }
//         } else NUM += INPUT[IDX];
//       }

//       if (parseInt(NUM).toString() != NUM) {
//         // console.log(`2.first if`);
//         if (NUM.trim() == "") {
//           // process.stdout.write(ERROR_MESSAGE);
//           throwError(`숫자를 입력하시지 않으셨습니다.`);
//           // console.log(`first if, first if`);
//         }
//         // console.log("2.first if, error");
//         throwError(`구별자나 숫자가 아닌 것을 입력하셨습니다.`);
//       } else {
//         // console.log(`2.first if, second else`);
//         NUM_LIST.push(parseInt(NUM));
//       }

//       SUM = NUM_LIST.reduce((ACCU, CURR, IDX) => {
//         return (ACCU += CURR);
//       }, 0);
//       }
//     );
//   }
// }

// export default App;

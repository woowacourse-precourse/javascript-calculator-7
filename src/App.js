import { Console } from "@woowacourse/mission-utils";

function findSeparator(arr) {
  let separatorList = [];
  for (let element of arr) {
    if (element.startsWith("//")) {
      if (element.includes(",") || element.includes(":")) {
        throw new Error(
          "[Error] 커스텀 구분자에는 쉼표 또는 콜론을 지정할 수 없습니다."
        );
      } else {
        separatorList.push(element.replace("//", ""));
      }
    }
  }
  return separatorList;
}

class App {
  async run() {
    //입력 받는 법
    const input = await Console.readLineAsync("문자열 입력: ");
    let arr = input.split("\\n");
    let separatorList = [",", ":"];
    let answer = 0;

    //커스텀 구분자로 지정했는지 확인 -> 쉼표 또는 콜론이면 에러 출력
    separatorList = [...separatorList, ...findSeparator(arr)];

    //커스텀 구분자 개수
    const custom = separatorList.length - 2;
    arr = arr.slice(custom);

    //여러 구분자들로 split을 할 수 있도록 구분자들을 하나의 문자열로
    let deli = "";
    for (let index = 0; index < separatorList.length; index++) {
      if (index == separatorList.length - 1) deli += separatorList[index];
      else deli += separatorList[index] + "|";
    }

    //deli 문자열로 RegExp 객체를 생성해서 split에 활용
    deli = new RegExp(deli);
    let numList = arr[0].split(deli);

    //숫자가 아닌 값이 있는지 확인
    for (const element of numList) {
      if (element == "") {
        continue;
      }
      const checkNum = parseInt(element);
      if (checkNum > 0) {
        answer += checkNum;
      } else if (checkNum <= 0) {
        throw new Error("[ERROR] 양수만 입력할 수 있습니다.");
      } else {
        throw new Error("[ERROR] 숫자만 입력해야 합니다.");
      }
    }

    //출력
    // Console.print(numList);
    Console.print("결과 : " + answer);
  }
}

export default App;

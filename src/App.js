import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");//사용자 입력

    let splitter = new RegExp(`[,:]+`);// 구분자
    let nums = str.split(splitter);//구분자를 기준으로 문자열을 split
    let sum = 0;//합을 저장할 변수

    //배열에 있는 수를 sum에 더해줌
    nums.forEach(num => {
      sum += Number(num);
    })
    
    //결과값 출력
    Console.print("결과 : ");
    Console.print(sum);
  }
}

export default App;

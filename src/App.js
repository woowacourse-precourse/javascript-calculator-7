import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");//사용자 입력

    let splitter = new RegExp(`[,:]+`);//구분자

    //커스텀 구분자가 있는지 검사
    str = str.replace('\\n', '\n');
    const PATTERN = /^\/\/.\n/;
    let customsplitter;
    if(PATTERN.test(str)){
      customsplitter = str[2];
      str = str.slice(4)//커스텀 구분자가 있는 부분을 제거
      splitter = new RegExp(`[,:;${customsplitter}]+`);//커스텀 구분자를 구분자 목록에 추가
    }

    //구분자로 문자열 split
    let nums = str.split(splitter);

    //배열에 있는 수를 sum에 더해줌
    let sum = 0;
    nums.forEach(num => {
      if(num<0){
        throw new Error("[ERROR] : 음수를 입력했습니다");//음수가 있으면 error
      }
      sum += Number(num);
    })

    if(isNaN(sum)){ throw new Error("[ERROR] : 잘못된 입력입니다 ");}//잘못된
    sum = "결과 : "+ sum; //출력할 결과
    Console.print(sum);
  }
}

export default App;
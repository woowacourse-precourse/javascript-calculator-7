import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 숫자 합계를 저장할 변수 초기화
    let sum = 0;  
    
    // 시작 인덱스 초기화 (0부터 시작)
    let startIndex = 0;
    
    // Console.readLineAsync를 사용하여 문자열을 비동기적으로 입력받기
    const input = await Console.readLineAsync("숫자를 입력해주세요.");  
    
    // 문자열의 길이만큼 반복 (startIndex가 input의 길이보다 작을 때까지 반복)
    while (startIndex < input.length) { 
      // 쉼표(,)가 있는 첫 번째 위치를 찾기 (startIndex부터 시작)
      let fIndex = input.indexOf(',', startIndex);
      
      // 콜론(:)이 있는 첫 번째 위치를 찾기 (startIndex부터 시작)
      let sIndex = input.indexOf(':', startIndex);

      // 쉼표(,)가 없을 경우 fIndex에 문자열 끝 부분의 인덱스를 저장
      if (fIndex === -1) fIndex = input.length;  

      // 콜론(:)이 없을 경우 sIndex에 문자열 끝 부분의 인덱스를 저장
      if (sIndex === -1) sIndex = input.length;  

      // 두 구분자(쉼표 또는 콜론) 중 먼저 등장한 위치를 nextIndex에 저장
      const nextIndex = Math.min(fIndex, sIndex);  

      // startIndex에서 nextIndex까지의 문자열을 숫자로 변환하여 number에 저장
      const number = input.substring(startIndex, nextIndex);

      // number를 숫자(Number)로 변환하여 sum에 더해줌
      sum += Number(number);

      // startIndex를 다음 구분자의 바로 뒤로 이동하여 다음 숫자를 찾을 준비
      startIndex = nextIndex + 1;
    }

    // 계산된 숫자 합계를 콘솔에 출력
    Console.print(`합계: ${sum}`);
  }
}

export default App;

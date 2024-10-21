import { Console } from "@woowacourse/mission-utils";

class App {
  
  async run() { 
    // * 커스텀 스트링있는지 확인하는 부분 (//ㄹ\n) => 있다 : true, 없다 : false
    const isCustomString = (str) => {
      const pattern = /(\/\/.*?\\n)/; //로시작하고 \n로 끝나는 패턴
      const customStringIndex = str.search(pattern); // 해당 패턴이 있는지 찾는다.
      // console.log('1.customStringIndex',customStringIndex);
      if( customStringIndex !== -1){ /// 커스텀 패턴을 찾으면
        return true;
      } else{ // 커스텀 패턴을 못 찾으면 
        return false;
      }
    }

    // * 커스텀 스트링 가운대 기준값 찾는 부분 (//ㄹ\n) -> ㄹ 
    const getCustomStandard = (str) =>{
      if(isCustomString(str)){ // 커스텀 스트링이 있다면,
        const startIndex = str.indexOf(`//`)+2; // `//`를 찾아서 그 길이만큼 인덱스를 더한다.
        const endIndex = str.indexOf('\\n'); // 끝 인덱스를 구한다.
        const customStandard = str.substring(startIndex,endIndex); // 시작, 끝값 사이의 서브스트링 기준값을 추출한다.
        // console.log('2.customStandard',customStandard,'dfs');
        return customStandard
      }
      
      return ``; // 만약, 커스텀 스트링이 없다면 그냥 빈 배열을 반환한다.
    }

    // 커스텀 구분자 내의 특수 문자를 이스케이프하는 함수 o => \o
    const escapeRegexCharacters = (str) => {
      return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`); // 모든 특수 문자를 이스케이프
    };


    // * 최종 결과를 얻는 코드 
    const getResult= (answer) => {

      //! 예외 입력값이 비어있거나 null일 경우
      if (answer.length ===0) {
        return 0;
      }
      //! 예외 음수 값이 입력되는 경우
      const minusPattern = /-\d*/g;
      const minusNumberIndex = answer.search(minusPattern); // 해당 패턴이 있는지 찾는다.
      if( minusNumberIndex !== -1){ /// 음수 패턴을 찾으면
        throw new Error('[ERROR]');
      } 

      
      //* 1. 커스텀스트링과 , : 값으로 split()한다.
    
      //* 1.1.커스텀스트링과 함께 split하기 위한 정규식을 구한다.
      const customStandard = getCustomStandard(answer); // 커스텀 스트링 기준
      // console.log('3.customStandard',customStandard);

      // const escapedCustomStandard = escapeRegexCharacters(customStandard); // 이스케이프 처리
      // console.log('4.escapedCustomStandard',escapedCustomStandard);
      
      // const pattern = `[,:]|(${escapedCustomStandard})`; //  [ , : 혹은 커스텀 기준] 값을 찾는 정규식
      const pattern = `[${customStandard},:]`; //  [ , : 혹은 커스텀 기준] 값을 찾는 정규식
      const regex = new RegExp(pattern,'g'); // 패턴을 정규식 형태로 변환.

      
      //* 1.2.split()을 진행한다. (아직 //, \n이 남아있다.)
      const answerArr = answer.split(regex); // 결과예시 : [ '1', '2', '3//', '\n' ]
      // console.log('5. answerArr', answerArr);

      //* 2. split()된 변수 내에서 //와 \n을 제거한다.
      answerArr.forEach((element,index) =>{
        const pattern = /(\/\/)|(\\n)/g; // \\, \n를 찾는 정규식, g는 replaceAll를 사용하기 때문에, 전역 문자를 찾아야 해서이다.
        answerArr[index] = element.replaceAll(pattern,``);
        answerArr[index] = answerArr[index].replace(`\\`, ``); // \\ 만 남아도 삭제 
      });

      // console.log('6.answerArr', answerArr);

      //*3. 마지막으로 결과 배열을 순회하며 모든 값을 더한다.
      let result = 0;
      answerArr.forEach((element) => {
        result += Number(element); // Number함수로 문자열-> 숫자로 형변환.
        if ( isNaN(result)){
          throw new Error('[ERROR]');
          
        }
      })
      //* 4. 결괏값을 출력한다.
      return result;
    }
    
    
    // * 입력 
   
      
    try {
      const answer = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = getResult(answer);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      // reject 되는 경우
        // 예외 발생 시 에러 메시지를 출력
      // Console.print(error);  // 에러 메시지 출력
      return Promise.reject(error);  //! Promise reject 처리 => 예외를 던져준다.
    }


    
    
  }
}

export default App;


// const a = '1,2343:4//ㄹ\n23432ㄹ234';
// const a = '1,2:3//ㄹ\n';
// const a = "1,2";
// const a = ""; // 0
// const a = "1,2,3"; // 6
// const a = "1,2:3" // 6
//;\n1;2;3 // 6

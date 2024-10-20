// 문자열로 받은 인풋값에서 숫자를 추출해 숫자열로 파싱해주는 함수입니다.

const parseInput = (inputStr) => {
    try {
        // 기본 구분자 설정 및 숫자부분을 반환할 변수에 일단 입력값 정의
        let defaultDlm = [',', ':'];
        let resultStr = inputStr;
        let numbersPart = inputStr;
  
        // 커스텀 구분자가 있는지 체크
        if (inputStr.startsWith('//') && inputStr.includes('\\n')) {
            const firstDlm = inputStr.indexOf('//');
            const lastDlm = inputStr.lastIndexOf('\\n');
            let customDlm = inputStr.substring(firstDlm + 2, lastDlm);
  
            // 커스텀구분자가 이스케이프 처리될 문자일 경우도 정상처리하기 위해 백슬래시 추가
            if (customDlm.startsWith('\\')) {
            customDlm = '\\' + customDlm;
            }
  
            // 커스텀 구분자가 공백을 제거했을 때 전부 숫자로만 이루어져 있는 경우 에러 반환
            if (!isNaN(customDlm.trim()) && customDlm.trim() !== '') {
            throw new Error('[ERROR] 커스텀 구분자를 숫자만으로 만들 수 없습니다.');
            }
  
            // 커스텀 구분자 정의 부분 자르기
            numbersPart = inputStr.substring(lastDlm + 2);

            // 구분자 배열에 커스텀 구분자 추가
            defaultDlm.push(customDlm);
        }

        // 최종 구분자를 정규표현식으로 만들어 split
        // 이전 로직과 달리 //\n 안에 작성한 구분자가 하나의 세트로 작동하도록 로직 변경
        //  -> ([]배열 삭제 및 '|'으로 join)
        const finalDlm = new RegExp(defaultDlm.join('|'), 'g');
        resultStr = numbersPart.split(finalDlm);
        
        // 배열 요소에 0이 있는지 확인 후 있다면 Error 발생
        // 숫자 변환 전 문자열 상태에서 체크하는 이유는 예제코드에 따르면 ''은 0으로 변환되어야하기 때문에
        // 이 코드가 먼저 실행되지 않고 ''->0으로 변환된 뒤 실행되면 0이 포함되었다고 생각해 에러를 반환할 수 있음
        if (resultStr.includes('0')) {
            throw new Error('[ERROR] 입력값에 0이 포함되어있습니다. 양수를 입력해주세요.');
        } 
  
        // 각각 분리된 문자열의 타입을 숫자열로 변환
        const resultNum = resultStr.map(Number);
  
        // 숫자로 변환되지 않은 배열값이 있는지 검사
        if (!resultNum.every((x) => !isNaN(x))) {
            throw new Error('[ERROR] 숫자열로 변환되지 않는 입력이 포함됐습니다.');
        }
  
        // 음수가 있는지 검사
        // -> every()메소드를 쓰면 모두 음수여야 에러를 던지므로 some()메소드로 변경해 음수가 하나라도 포함되어있을경우 에러반환
        if (resultNum.some((x) => x < 0)) {
            throw new Error('[ERROR] 음수가 포함되어있습니다. 양수를 입력해주세요.');
        }
  
      return resultNum;

    } catch (error) {
      throw error;
    }
  };
  
  export default parseInput;
  
const parseInput = (inputStr) => {
    try {
        // 기본 구분자 설정 및 숫자부분을 반환할 변수에 일단 입력값 정의
        let defaultDlm = [',', ':'];
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

            // 커스텀 구분자의 시작이나 끝에 숫자가 있으면 ERROR 반환
            // 커스텀 구분자의 중간에 숫자가 있더라도 숫자가 아닌 문자(공백 포함)로 감싸진 경우 정상작동
            // isNan은 공백을 0(숫자열)로 반환하기 때문에 praseInt()사용
            if (!isNaN(parseInt(customDlm.charAt(0))) || !isNaN(parseInt(customDlm.charAt(customDlm.length - 1)))) {
                throw new Error('[ERROR] 커스텀 구분자를 숫자로 시작하거나 끝낼 수 없습니다.');
            }

            defaultDlm.push(customDlm);
            numbersPart = inputStr.substring(lastDlm + 2);
        }

        // 여러 구분자를 포함한 정규표현식 생성 (커스텀 구분자 포함)
        const finalDlm = new RegExp(`[${defaultDlm.join('')}]`, 'g');

        // 구분자에 의해 숫자 문자열을 분리
        const resultStr = numbersPart.split(finalDlm);

        // 배열 요소에 0이 있는지 확인 후 있다면 Error 발생
        // 숫자 변환 전 문자열 상태에서 체크하는 이유는 ""은 0으로 변환되어야하기 때문
        if (resultStr.includes('0')) {
            throw new Error('[ERROR] 입력값에 0이 포함되어있습니다. 양수를 입력해주세요.')
        }

        // 각각 분리된 문자열의 타입을 숫자열로 변환
        const resultNum = resultStr.map(Number);

        // 숫자로 변환되지 않은 배열값이 있는지 검사
        if (!resultNum.every(x => !isNaN(x))) {
            throw new Error('[ERROR] 숫자열로 변환되지 않는 입력이 포함됐습니다.');
        }

        // 음수가 있는지 검사 
        // -> every()메소드를 쓰면 모두 음수여야 에러를 던지므로 some()메소드로 변경해 음수가 하나라도 포함되어있을경우 에러반환
        if (resultNum.some(x => x < 0)) {
            throw new Error('[ERROR] 음수가 포함되어있습니다. 양수를 입력해주세요.');
        }

        return resultNum;
    } catch (error) {
        throw error;
    }
};

export default parseInput;

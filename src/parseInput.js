const parseInput = (inputStr) => {
    try {
        // 기본 구분자 설정 및 숫자부분을 반환할 변수에 일단 입력값 정의
        let defaultDlm = [',', ':'];
        let numbersPart = inputStr;

        // 커스텀 구분자가 있는지 체크
        if (inputStr.startsWith('//') && inputStr.includes('\\n')) {
            const firstDlm = inputStr.indexOf('//');
            const lastDlm = inputStr.indexOf('\\n');
            const customDlm = inputStr.substring(firstDlm + 2, lastDlm);

            defaultDlm.push(customDlm);
            numbersPart = inputStr.substring(lastDlm + 2);
        }

        // 여러 구분자를 포함한 정규표현식 생성 (커스텀 구분자 포함)
        const finalDlm = new RegExp(`[${defaultDlm.join('')}]`, 'g');

        // 구분자에 의해 숫자 문자열을 분리
        const resultStr = numbersPart.split(finalDlm);

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

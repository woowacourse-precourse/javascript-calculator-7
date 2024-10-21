class StringCalculator {
    static calculate(input) {
        if (!input || input.trim() === '') {
            return 0;
        }

        let delimiters = [',', ':']; // 기본 구분자
        let numbers = input;

        // 커스텀 구분자 처리
        const customDelimiterMatch = input.match(/^\/\/(.)\n/);
        if (customDelimiterMatch) {
            const customDelimiter = customDelimiterMatch[1]; // 커스텀 구분자
            delimiters.push(customDelimiter); // 구분자 배열에 추가
            numbers = input.split('\n')[1]; // 숫자 부분만 추출
        }

        // 구분자를 기반으로 숫자 분리
        const numberList = numbers.split(new RegExp(`[${delimiters.join('')}]`));

        // 숫자 리스트 필터링 및 변환
        const parsedNumbers = numberList.map((num) => parseInt(num, 10)).filter((num) => !isNaN(num));

        // 숫자가 없으면 오류 발생
        if (parsedNumbers.length === 0) {
            throw new Error('[ERROR] 숫자가 입력되지 않았습니다.');
        }

        // 숫자를 모두 더해서 반환
        return parsedNumbers.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;

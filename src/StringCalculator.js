class StringCalculator {
    static add(input) {
        // 빈 문자열 처리
        if (input === "") return 0; 

        // 기본 구분자 처리
        let delimiter = /,|:/; 
        let numbers = input;

        // 이스케이프 문자 처리를 위한 변환
        numbers = numbers.replace(/\\n/, "\n");

        // 커스텀 구분자 처리
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            if (delimiterEndIndex === -1) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

            // 커스텀 구분자 추출
            const customDelimiter = numbers.substring(2, delimiterEndIndex);
            if (customDelimiter.length === 0) {
                throw new Error("[ERROR] 잘못된 구분자입니다.");
            }

            delimiter = new RegExp(`[${customDelimiter}]`); // 커스텀 구분자 설정
            numbers = numbers.substring(delimiterEndIndex + 1); // 구분자 이후 숫자 추출
        }

        // 숫자 배열로 변환, 음수 및 잘못된 입력 처리
        const numberArray = numbers.split(delimiter).map((num) => {
            const parsedNum = parseInt(num, 10);
            if (isNaN(parsedNum) || parsedNum < 0) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }
            return parsedNum;
        });

        // 숫자 합산 후 반환
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;

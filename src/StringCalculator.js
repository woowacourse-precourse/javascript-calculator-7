class StringCalculator {
    static add(input) {
        // 빈 문자열 처리
        if (input === "") return 0;

        // 기본 구분자 처리
        let delimiter = /,|:/; 
        let numbers = input;

        // 커스텀 구분자 처리
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            delimiter = new RegExp(`[${numbers.substring(2, delimiterEndIndex)}]`);
            numbers = numbers.substring(delimiterEndIndex + 1); // 구분자 이후 숫자 추출
        }

        const numberArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;

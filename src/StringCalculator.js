class StringCalculator {
    static add(input) {
        // 빈 문자열 처리
        if (input === "") return 0;

        // 기본 구분자 처리
        let delimiter = /,|:/;
        let numbers = input;

        const numberArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;

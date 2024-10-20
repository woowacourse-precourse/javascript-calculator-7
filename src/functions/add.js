export function add(input) {
    if (input === "") {
        return 0;
    }

    let delimiter = /[,|:]/; // 기본 구분자 설정

    if (input.startsWith("//")) {
        const parts = input.split("\\n");

        if (parts.length < 2 || parts[1].trim() === "") {
            throw new Error('[ERROR] 잘못된 입력 형식입니다.');
        }

        const customDelimiter = parts[0].slice(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = RegExp(`[${customDelimiter},:]`);
        input = parts[1];
    }

    const numbers = input
        .split(delimiter)
        .filter(num => num !== "") // 구분자가 중복되어도 연산되도록 필터링
        .map(num => {
            const parsedNum = Number(num);
            if (isNaN(parsedNum)) {
                throw new Error('[ERROR] 숫자가 아닌 값이 포함되었습니다.');
            } else if (parsedNum < 0) {
                throw new Error('[ERROR] 양수로만 이루어져야 합니다.');
            }
            return parsedNum;
        });

    return numbers.reduce((sum, num) => sum + num, 0);
}

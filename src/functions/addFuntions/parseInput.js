// 입력 파싱 함수: 커스텀 구분자와 숫자 부분을 분리
export function parseInput(input) {
    let delimiter = /[,|:]/; // 기본 구분자

    if (input.startsWith("//")) {
        const parts = input.split("\\n");

        if (parts.length < 2 || parts[1].trim() === "") {
            throw new Error('[ERROR] 잘못된 입력 형식입니다.');
        }

        const customDelimiter = parts[0].slice(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(`[${customDelimiter},:]`); // 기본 구분자와 혼용 가능
        input = parts[1];
    }

    return { numbers: input, delimiter }; // 파싱된 값 반환
}
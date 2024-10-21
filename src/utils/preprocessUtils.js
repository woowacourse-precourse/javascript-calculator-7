// 커스텀 구분자를 추출하고 그 외 처리 문자열과 함께 반환한다.
const getCustomSeperatorAndTargetString = (str) => {
    const start = "//";
    const end = "\\\\n"; // \n -> \\n 으로 정규표현식에 넣기 위해선 다음과 같이 변환

    if (str.startsWith(start)) {
        const reg = new RegExp(`^${start}(\\D)${end}(.+)`);
        const result = str.match(reg);

        if (result === null) {
            // 예외사항 : \n으로 끝나지 않음, 커스텀 구분자가 문자열 또는 빈값
            throw new Error("[ERROR] 커스텀 구분자는 문자만 가능합니다.")
        } else return {
            customSeperator: result[1],
            targetString: result[2]
        }
    }

    return {
        customSeperator: null,
        targetString: str
    }
}
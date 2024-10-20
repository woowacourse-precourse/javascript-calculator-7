class Common {
    // 기본형인지 커스텀 타입인지 구분하는 메서드
    checkType(input) {
        const regExp = new RegExp(/^(\/\/.+\\n)/g);

        if (input.match(regExp) !== null) {
            return "custom";
        }

        return "default";
    }

    validationError() {
        return new Error("[ERROR] 입력값의 형식이 잘못되었습니다.");
    }
}

export default Common;
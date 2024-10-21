import { Console } from "@woowacourse/mission-utils";

export default class Exception {
    separatorLengthError(separator){
        if (separator.length >= 2){
            throw new Error("[ERROR] 커스텀 문자가 지정 길이를 초과합니다.");
        }
    }
}
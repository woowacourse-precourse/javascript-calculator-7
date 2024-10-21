# javascript-calculator-precourse

## 프로젝트 개요
이 프로젝트는 문자열로 입력된 숫자를 덧셈하여 결과를 반환하는 간단한 계산기입니다.
쉼표(,)와 콜론(:)을 구분자를 사용할 수 있으며, 커스텀 구분자도 지원합니다.

## 기능 목록

1. **기본 입력 구분자 처리**
   - 입력된 문자열에서 쉼표(`,`)와 콜론(`:`)을 구분자로 숫자를 분리하여 합산합니다.
   - 예: `""` => `0`, `"1,2"` => `3`, `"1,2,3"` => `6`, `"1,2:3"` => `6`

2. **커스텀 구분자 지원**
   - 문자열 앞부분에 `"//"`와 `"\n"` 사이에 커스텀 구분자를 지정할 수 있습니다.
   - 예: `"//;\n1;2;3"`과 같은 입력의 경우, 세미콜론(`;`)을 구분자를 사용하여 합산합니다.
   - 예: `"//|\n1|2|3"` => `6`

3. **빈 문자열 처리**
   - 빈 문자열이 입력된 경우 `0`을 반환합니다.
   - 예: `""` => `0`

4. **잘못된 입력에 대한 에러 처리**
   - 음수나 숫자가 아닌 값이 입력된 경우 `[ERROR]`로 시작하는 메시지와 함께 예외를 발생시킵니다.
   - 예: `"-1,2,3"` => `[ERROR] 음수는 허용되지 않습니다.`

5. **입력 값의 합산 결과 출력**
   - 모든 입력 값을 합산하여 콘솔에 결과를 출력합니다.
   - 예: `"1,2:3"` 입력 시 `결과 : 6` 출력

## 요구 사항
- **Node.js 버전**: 20.17.0 이상
- **테스트 도구**: Jest 사용
- **라이브러리**: `@woowacourse/mission-utils`를 사용하여 사용자 입력 및 출력 처리

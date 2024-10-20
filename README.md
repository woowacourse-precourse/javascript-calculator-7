# javascript-calculator-precourse

## 개요
문자열을 입력받아 쉼표(,) 또는 콜론(:)을 기준으로 분리된 숫자들의 합을 계산하는 프로그램입니다. 또한 커스텀 구분자를 지원하며, 잘못된 입력 시 오류 메시지를 출력합니다.

## 기능 목록
1. 빈 문자열 입력 시 0을 반환한다.
2. 쉼표(,) 또는 콜론(:)으로 구분된 숫자들의 합을 반환한다.
3. 커스텀 구분자를 사용할 수 있다. (형식: `//[구분자]\n[숫자]`)
4. 음수 입력 시 예외를 발생시키고, "[ERROR]"로 시작하는 오류 메시지를 출력한다.
5. 숫자가 아닌 값이 포함되면 예외를 발생시키고, "[ERROR]"로 시작하는 오류 메시지를 출력한다.
6. 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
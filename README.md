# javascript-calculator-precourse

# 문자열 덧셈 계산기

## 구현할 기능 목록

1. 빈 문자열을 입력할 경우 0을 반환한다. 예외처리 우선
2. 쉼표(,) 또는 콜론(:)을 구분자로 사용하여 문자열을 분리한 후 각 숫자의 합을 반환한다.
    - 예시: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
3. 초기값은 기존의 쉽표와 콜론이며, "//"와 "\n" 사이의 문자를 구분자로 지정할 수 있다.

4. 잘못된 입력 값이 들어올 경우, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.
5. 입력된 문자열의 숫자들을 추출하여 덧셈 결과를 출력한다.

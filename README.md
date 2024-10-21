# javascript-calculator-precourse

# 문자열 덧셈 계산기

## 기능 목록

1. 빈 문자열을 입력할 경우 0을 반환한다.

2. 쉼표(,)를 구분자로 사용하여 숫자들을 분리하여 합산한다.

3. 콜론(:)을 구분자로 사용하여 숫자들을 분리하여 합산한다.

4. 커스텀 구분자를 지정할 수 있다.

   - 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 사용한다.
   - 예: "//;\n1;2;3" -> 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 된다.

5. 입력값에 음수가 포함될 경우 예외를 발생시킨다.

6. 잘못된 입력값이 들어올 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.

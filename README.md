# javascript-calculator-precourse

# 문자열 덧셈 계산기

## 구현 기능 목록

1. 문자열 입력받기
   1. 사용자로부터 문자열 입력 받는다.
   2. 입력된 문자열이 null 또는 빈 문자열이라면, 0을 반환한다.

2. 커스텀 구분자 파악하기
   1. 입력 문자열이 //로 시작하면, \n 이전까지의 문자를 커스텀 구분자로 설정한다.

3. 커스텀 구분자 / 기본 구분자 문자열 분리하기
   1. 커스텀 구분자가 있을 경우, 해당 구분자를 기준으로 문자열을 분리한다.
   2. 커스텀 구분자가 없을 경우, 기본 구분자(쉼표, 콜론)를 기준으로 문자열을 분리한다.

4. 숫자 추출 및 합 계산하기
   1. 분리된 문자열에서 숫자를 추출한다.
   2. 문자열에 숫자가 아닌 값이 있다면 [ERROR] 메시지 출력 후, 프로그램을 종료한다.
      1. 음수를 입력한 경우, [ERROR] 메시지를 출력한다.
   3. 추출된 숫자들의 합 계산한다.

5. 결과 출력하기
   1. 계산된 숫자들의 합 출력한다.
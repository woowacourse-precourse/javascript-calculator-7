# javascript-calculator-precourse

### 1. Console 함수 테스트

`@woowacourse/mission-utils` 의 Console 함수에 익숙해진다.

### 2. 덧셈 함수 구현

`//, \n` 입력에 주의하며 구현한다.

### 3. test 통과하도록 보정

`__tests__/ApplicationTest.js` 파일을 참고해 예외 처리를 진행한다.

1주차 구현에서 헤맸던 부분은 습관적으로 try-catch 형태로 구현했기 때문에 2번째 test case를 통과하지 못했다.

error를 throw 하는지 test에서 체크하고 있었기 때문에, try catch로 잡아서 정상 종료하기 보다, 덧셈 함수 내에서 error를 throw해서 종료되도록 구현해야 했다.

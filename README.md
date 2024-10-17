# javascript-calculator-precourse

## 미션 - <문자열 덧셈 계산기 🧮> 기능 구현 목록

- [x] 문자열 입력 받기.
  - [x] `덧셈할 문자열을 입력해 주세요.` 시작 문구 출력.
    - [x] `Console.print()` 사용.
  - [x] `Console.readLineAsync()` 사용.

<br>

- [x] 결과 계산하기.
  - [x] 구분자로 분리한 숫자 배열 생성.
    - [x] 정규표현식 사용하여 `,`와 `:`으로 분리.
    - [x] 커스텀 구분자로 분리.
  - [x] 생성된 숫자 배열을 `reduce` 내장 메소드 사용하여, 합 계산.

<br>

- [x] 결과 출력하기.
  - [x] `Console.print()` 사용.

<br>

- [x] 예외 처리하기.
  - [x] "[ERROR]"로 시작하는 메시지와 함께 Error를 발생.
  - [x] Operand가 숫자가 아닌 경우 Error 처리.
  - [x] 구분자가 아닌 다른 문자 포함된 경우, 구분자를 잘못 입력한 경우 Error 처리.
  - [x] 음수 포함된 경우 Error 처리.
  - [x] 애플리케이션 종료.

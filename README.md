# javascript-calculator-precourse

## 기능 구현

### 입력 부분(inputView)

- [x] `덧셈할 문자열을 입력해 주세요.` 문구를 출력한다.
- [x] 문구 출력과 동시에 덧셈할 문자열을 입력받는다.
  - [x] @woowacourse/mission-utils에서 제공하는 Console.readlineAsync()를 사용한다.

### 기능 수행 부분

#### 1차 진행

- [] 구분자와 숫자 분리

  - [x] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 구분자와 숫자로 분리한다.
  - [x] 커스텀 구분자(//와 \n사이 입력되는 문자)가 존재하는 문자열을 구분자와 숫자로 분리한다.
  - [x] 커스텀 구분자가 쉼표 또는 콜론인 경우는 기본 구분자와 동일하게 작동하게 한다.
  - [x] 구분자가 존재하지 않는 문자열은 입력받은 문자열을 하나의 숫자로 분리한다.
  - [x] 빈 문자열은 0으로 분리한다.
  - [x] 기본 구분자와 커스텀 구분자가 섞인 문자열인 경우 올바르게 분류한다.

- [x] 구분자와 분리된 숫자를 모두 더한다.

#### 2차 개선

- [x] 빈 문자열인지 확인
- [x] 올바른 문자열인지 확인

  - [x] 1차적으로 커스텀 구분자 존재하는지 확인하고, 있으면 커스텀 구분자 배열에 저장하며 문자열에서 삭제
    - [x] 구분자에 -가 존재한다면 음수를 올바르게 처리하지 못하기에 무시함
  - [x] 2차적으로 기본 구분자, 커스텀 구분자를 filtering
  - [x] 3차적으로 filtering한 배열 검사
    - [x] 숫자만 남았다면 올바른 문자열
    - [x] 숫자가 없다면 올바르지 않은 문자열이기에 ERROR 발생
    - [x] 숫자와 문자가 남았다면 올바르지 않은 문자열이기에 ERROR 발생

- [x] filtering한 배열로 구분자와 분리된 숫자를 모두 더하기

### 출력 부분(outputView)

- [x] `결과 : ${숫자}` 문구를 출력한다.
  - [x] @woowacourse/mission-urils에서 제공하는 Console.print()를 사용한다.

## 예외 처리

- [x] 쉼표, 콜론, 커스텀 구분자 이외의 문자를 문자열에 포함하여 입력한 경우, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션을 종료한다.
- [x] 음수를 문자열에 포함하여 입력한 경우, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션을 종료한다.

## 테스트

- [x] 빈 문자열
- [x] 숫자만 존재하는 문자열
- [x] 기본 구분자와 숫자가 존재하는 문자열
- [] 커스텀 구분자만 존재하는 문자열
- [x] 커스텀 구분자와 숫자가 존재하는 문자열
- [x] 기본 구분자, 커스텀 구분자, 숫자가 존재하는 문자열
- [] 기본 구분자, 커스텀 구분자만 존재하는 문자열

# javascript-calculator-precourse

## 구현할 기능

- [ ] 사용자로부터 구분자와 양수로 구성된 문자열을 입력받는 기능
- [ ] 사용자로부터 입력받은 문자열이 유효한지 확인하는 기능
- [ ] 사용자로부터 입력받은 문자열을 계산하는 기능
- [ ] 계산한 결과를 형식에 맞게 출력하는 기능

<br>

## 기능별 명세

### 1. 시작하기

- `App.js`의 `run()`으로 프로그램을 시작한다.

  - 프로그램 시작과 동시에, `덧셈할 문자열을 입력해 주세요.` 문구와 함께 사용자의 입력을 기다린다.

### 2. 문자열 계산하기

- 입력받은 문자열을 리스트화 하여, 처음부터 끝까지 순회하면서 계산한다.

  - 숫자인 경우, 들어온 숫자의 자릿수를 고려하여 `numString` 에 `String`화 하여 더해준다.

  - 숫자가 아닌 경우, 덧셈 결과(`NumSum`)에 `Number`화 한 `numString`을 더해주고 `numString`을 초기화 해준다.

- 커스텀 구분자 계산하기

  - 커스텀 구분자를 사용할 경우, 특정 문자열 인덱스에 있는 문자를 커스텀 구분자로 지정.

### 3. 결과 출력하기

- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 출력

<br>

## 예외처리

### 사용자로부터 입력받은 문자열이 유효한지 확인

1. 문자열에 `0`으로 시작하는 숫자가 들어간 경우(`연속된 0의 경우에도 포함`)

   - `0`은 양수가 아니므로, 문자열에 `0`은 입력할 수 없도록 설정.

     → `[ERROR] 양수를 입력해야 합니다.` 에러를 발생시킴.

2. 커스텀 구분자 유효성 검사

   - 기존 구분자와 동일한 문자를 커스텀 구분자로 지정할 수 없도록 설정.

     → `[ERROR] 이미 있는 구분자를 커스텀 구분자로 지정할 수 없습니다.` 에러를 발생시킴.

   - 커스텀 구분자를 숫자로 지정할 경우, 덧셈을 할 수 없다고 판단하여 숫자는 커스텀 구분자로 지정할 수 없도록 설정.

     → `[ERROR] 커스텀 구분자를 숫자로 지정할 수 없습니다.` 에러를 발생시킴.

3. 문자열이 구분자로 끝나는 경우

   - 구분자는 숫자와 숫자 사이에 존재해야 함

     → `[ERROR] 구분자로 끝나는 문자열은 입력할 수 없습니다.` 에러를 발생시킴.

4. 문자열이 구분자로 시작하는 경우

   - 구분자는 숫자와 숫자 사이에 존재해야 함.

     → `[ERROR] 구분자로 시작하는 문자열은 입력할 수 없습니다.` 에러를 발생시킴.

5. 문자열에 공백을 입력하는 경우

   - 문자열에 공백을 입력할 수 없음.

     → `[ERROR] 문자열에 공백을 입력할 수 없습니다.` 에러를 발생시킴.

<br>

### 문자열 계산 확인

1. 최대값 설정

   - `Number.MAX_VALUE`를 넘어서는 수를 입력하거나, 더한 값이 넘어서는 경우.

     → `[ERROR] 계산기의 계산 범위를 넘어서는 수를 더할 수 없습니다.` 에러를 발생시킴.

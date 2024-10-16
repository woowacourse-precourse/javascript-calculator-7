# javascript-calculator-precourse

## 구현 기능 목록

### Order

동작 순서로 정리한 목록입니다.

- [x] 덧셈할 문자열을 입력 받는다.
- [x] 문자열 앞부분의 커스텀 구분자 여부를 확인한다.
- [ ] 커스텀 구분자가 존재하는 경우 커스텀 구분자를 함께 구분자로 사용하고 아닌 경우 기본 구분자만을 사용하여 분리된 문자열을 반환한다.
- [ ] 구분자를 기준으로 분리된 문자가 숫자가 아닌 경우 에러 메시지와 함께 에러를 발생시킨다.
- [ ] 구분자를 기준으로 분리된 문자가 양수가 아닌 경우 에러 메시지와 함께 에러를 발생시킨다.
- [ ] 분리된 문자열이 유효한 경우 각 숫자의 합을 반환한다.
- [ ] 문자열 덧셈 계산기를 실행시킨다.
- [ ] 에러가 발생한 경우 애플리케이션을 종료시킨다.

### Object

객체 위주로 정리한 목록입니다.

- View: input, output과 관련된 UI를 담당합니다.
- Calculator: 문자열 덧셈 계산과 관련된 기능을 담당합니다.
- Validator: 유효성을 검증하고 에러를 반환하는 기능을 담당합니다.
- App: 어플리케이션의 실행과 종료를 담당합니다.

#### View

- [x] 덧셈할 문자열을 입력 받는다.

#### Calculator

- [x] 문자열 앞부분의 커스텀 구분자 여부를 확인한다.
- [x] 커스텀 구분자가 존재하는 경우 커스텀 구분자를 함께 구분자로 사용하고 아닌 경우 기본 구분자만을 사용하여 분리된 문자열을 반환한다.
- [x] 분리된 문자열의 유효성을 확인하고 유효한 경우 각 숫자의 합을 반환한다.

#### Validator

- [ ] 구분자를 기준으로 분리된 문자가 숫자가 아닌 경우 에러 메시지와 함께 에러를 발생시킨다.
- [ ] 구분자를 기준으로 분리된 문자가 양수가 아닌 경우 에러 메시지와 함께 에러를 발생시킨다.

#### App

- [ ] 문자열 덧셈 계산기를 실행시킨다.
- [ ] 에러가 발생한 경우 애플리케이션을 종료시킨다.

## 구현중 수정된 목록

### Calculator

1. 커스텀 구분자가 존재하는 경우 커스텀 구분자를 함께 구분자로 사용하고 아닌 경우 기본 구분자만을 사용하여 분리된 문자열을 반환한다.

   - 커스텀 구분자가 존재하는 경우 커스텀 구분자를 함께 구분자로 사용하고 아닌 경우 기본 구분자만을 사용한다.
   - 결정된 구분자를 사용하여 분리된 문자열을 반환한다.

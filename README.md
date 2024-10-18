# javascript-calculator-precourse

## ✏️ 과제 진행 요구 사항 - 구현할 기능 목록

### 문자열 덧셈 계산기 흐름

- 문자열 입력 받기
- 입력받은 문자열의 구분 방식 결정 (쉼표, 콜론 또는 커스텀 구분자)
- 쉼표와 콜론을 사용하는 경우, 이를 기준으로 숫자를 분리
- 커스텀 구분자를 사용하는 경우, "//"와 "\n" 사이에 있는 구분자를 기준으로 숫자를 분리
- 구분자를 기준으로 나누어진 숫자들을 더한 후 결과 출력 및 프로그램 종료

## 함수 구현

### InputView
- getUserInput : : 사용자 입력을 받아 유효한 경우 반환하며, 그렇지 않은 경우 에러 처리

### OutputView
- printResult : 계산된 결과값을 출력

### InputValidation
- isValidateForm : 입력 형식이 올바른지 확인
- customDelimeterInputValidate : 커스텀 구분자를 사용하는 경우 입력 값의 유효성 확인
- defaultDelimterInputValidate : 기본 구분자를 사용하는 경우 입력 값의 유효성 확인

### CalculatorGenerator
- getResult : 계산된 결과 값 반환
- checkCustomDelimiter : 커스텀 구분자 사용 여부 확인
- calculatDelimiter : 기본 구분자를 사용하는 경우 값을 계산
- calculateCustomDelimiter : 커스텀 구분자를 사용하는 경우 값을 계산
- calculateNumber : 유효한 숫자 배열을 받아 값을 계산하여 반환

### Constants

#### ERROR_MESSAGE
- WRONG_INPUT_STRING : 입력 값이 문자열이 아닌 경우
- WRONG_INPUT_STRING_NEGATIVE : 입력 값에 음수가 포함된 경우
- WRONG_CUSTOM_DELIMETER : 커스텀 구분자 입력 시 잘못된 값이 있는 경우
- WRONG_DEFAULT_DELIMETER : 기본 구분자 입력 시 잘못된 값이 있는 경우

#### DEFAULT_DELIMITER
- 쉼표(,)와 콜론(:)을 기본 구분자로 사용

#### INPUT_MESSAGE , OUTPUT_MESSAGE
- COMPOUND_STRING : 입력 시 사용자에게 표시할 메시지
- RESULT : 계산 결과를 출력할 메시지


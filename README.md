# javascript-calculator-precourse


### `StringCalculator` 클래스의 메서드

### `run()`
- 프로그램의 시작 지점으로, 사용자의 입력을 받아 덧셈 결과를 출력하는 역할
- `Console.readLineAsync()`를 통해 비동기적으로 입력을 받으며, 오류 발생 시 메시지를 출력하고 프로그램을 계속 실행

### `add(input)`
- 입력된 문자열에서 숫자를 추출해 더한 결과를 반환
- 빈 문자열일 경우 0을 반환하고, 커스텀 구분자 및 기본 구분자를 처리
- 숫자를 추출한 뒤 양수 여부 및 유효성을 검증

### `isEmpty(input)`
- 입력값이 빈 문자열이거나 공백 문자열인지 확인하여 `true` 또는 `false`를 반환

### `parseInput(input)`
- 입력 문자열에서 커스텀 구분자를 추출하고, 기본 구분자(쉼표와 콜론)를 함께 반환
- 커스텀 구분자가 없는 경우 기본 구분자만 사용

### `splitNumbers(numbers, delimiters)`
- 주어진 구분자들을 기준으로 숫자를 분리하여 리스트로 반환
- 빈 값은 필터링하여 숫자 리스트에 포함되지 않도록 처리

### `validateNumbers(numberList)`
- 숫자가 아닌 값이 있거나, 음수가 포함된 경우 오류를 발생
- 숫자가 입력되지 않은 경우에도 오류 메시지를 출력

### `sumNumbers(numberList)`
- 주어진 숫자 리스트를 모두 더해 결과를 반환

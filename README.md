# javascript-calculator-precourse

## 구현할 기능

### 기능 요구 사항
**입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.<br>**

- 비동기로 사용자의 input을 받기 위한 함수 **async getUserInput()**
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환하는 함수 **sumNumbers()**.<br>
=> 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6<br>
- 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정하기 위한 함수 **customSeperator()** <br>
=> 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.<br>
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키기 위한 함수 **stopOperator()** <br>

### 코드 컨벤션
[JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)

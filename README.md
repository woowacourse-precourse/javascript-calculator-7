# :school: 우아한테크코스 7기 프리코스 1주차 미션 - 문자열 덧셈 계산기

## :clipboard: 구현할 기능 목록

### 1. 사용자 입력
- [X] 구분자(쉼표, 콜론), 양수로 구성된 문자열 입력 기능
- [X] 커스텀 구분자 입력 기능

### 2. 덧셈 계산기  
- [X] 사용자가 입력한 값(양수)을 추출하여 더하는 기능 

### 3. 메세지 출력
- [X] 계산 결과 출력 기능 (정상적으로 계산된 경우 결과 값 출력)
- [X] 예외 발생 시 [ERROR] 메시지 출력

### 4. 예외처리
#### 구분자와 양수로 구성된 문자열 입력
- [X] 사용자의 입력값이 공백일 경우 [ERROR]
- [X] 사용자의 입력값의 구분자 외의 값이 숫자가 아닌 문자가 포함되어 있는 경우 [ERROR]
- [X] 사용자의 입력값이 음수일 경우 [ERROR]
- [X] 사용자의 입력값의 구분자가 일관되지 않을 경우 [ERROR] ex) "//;\n1;2:3"과 같은 잘못된 형식
- [X] 사용자의 입력값의 구분자 외의 값에 공백이 포함되어 있는 경우 [ERROR]

5. jest 테스트
- 기본 구분자(쉼표, 콜론)를 통한 숫자 합산 테스트
- 커스텀 구분자 테스트
- 예외 처리 테스트

## :file_folder: 패키지 구조 및 파일명
```
- src
  - 📂 contants
  - - 📜 calculatorMessages.js
  - - 📜 errorMessages.js
  - 📂 controllers
  - - 📜 CalculatorController.js
  - 📂 errors
  - - 📜 AppError.js
  - - 📜 CalculatorError.js
  - - 📜 DelimiterError.js
  - 📂 models
  - - 📜 Calculator.js
  - - 📜 Delimiter.js
  - 📂 views
  - - 📜 InputView.js
  - - 📜 OutputView.js
  - App.js
  - index.js
```
### CalculatorController.js [문자열 덧셈 계산기의 메인이 되는 클래스]
* calculatorProcess
- 문자열을 입력받아 구분자, 값을 분리하여 값을 더한 후 사용자에게 보여줍니다.
* getDelimiter
- 사용자에게 문자열을 입력받아 구분자와 값을 분리한 뒤 this.#delimiter에 할당합니다
* getSumNumbers
- 구분자와 값을 통하여 더해준 뒤 this.#sum에 할당합니다.
* printOutput
- 사용자에게 더한 값을 출력합니다.

### getDelimiter.js [구분자 ,값을 담당하는 클래스]
* getDelimiter
- 입력받은 값을 공백, 기본 구분자, 커스텀 구분자를 구분합니다
* defaultDelimiter
- 입력받은 값에 기본 구분자와 값을 분리한 뒤 this.#delimiter, this.#operationText에 값을 할당합니다.
* customDelimiter
- 입력받은 값에 커스텀 구분자와 값을 분리합니다.
* validate
- 입력받은 문자열의 유효성 검사를 진행합니다.


## :computer: 커밋 메세지 컨벤션
```
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```

## 테스트 결과
<div style="display: flex">
    <img src="https://github.com/user-attachments/assets/b2437143-a971-4f6c-9185-e4d75431a7cb" style="width: 50%;">
</div>


## :high_brightness: 기능 구조
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
    - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
    - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
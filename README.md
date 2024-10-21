# javascript-calculator-precourse
# ➕ 문자열 덧셈 계산기
> 입력한 문자열에서 숫자를 추출하여 더하는 계산기 구현

## 프로젝트 구조
src  
├── Controller  
│   ├── isCommaSemicolonCondition.js  
│   ├── isCustomConditionCheck.js  
│   └── isInputEmpty.js  
├── Model  
│   └── addNumbers.js  
├── View  
│   ├── getUserInput.js  
│   ├── printErrorMessageForInputError.js  
│   ├── printErrorMessageForTypo.js  
│   └── printUserOutput.js  
└── App.js  

### 파일 설명
1. Controller
- isCommaSemicolonCondition.js
: 입력값에 콤마(,)나 세미콜론(;)이 포함되어 있는 입력인지 확인하고, 조건에 맞는지 확인합니다.

- isCustomConditionCheck.js
: 입력값에 사용자가 원하는 구분자로 사용되었는지 확인하며 조건에 맞는지 확인합니다.

- isInputEmpty.js
: 입력값이 비어있는지 여부를 확인합니다.

2. Model
- addNumbers.js
: 각 자리의 숫자를 더하는 함수입니다. 

3. View
- getUserInput.js
: 사용자로부터 입력을 받아오는 함수입니다.

- printErrorMessageForInputError.js
: 비어있는 입력값에 대한 오류에 대한 에러 메시지를 출력합니다.

- printErrorMessageForTypo.js
: 오타가 포함되어있는 입력값에 대한 에러 메시지를 출력합니다.

- printUserOutput.js
: 계산 결과를 사용자에게 출력합니다.

4. App.js
: 애플리케이션의 진입점(Entry Point)으로, Controller, Model, View를 조합하여 애플리케이션을 실행합니다.


<br/>

## ✅ 과제 요구 사항 체크리스트

- [O]  문자열 덧셈 계산기 저장소를 fork하고 clone하는 것으로 시작한다.
- [O]  기능을 구현하기 전 [README.md](http://README.md) 에 구현할 기능 목록을 정리해 추가한다.
- [O]  Git의 커밋 단위는 앞 단계에서 [README.md](http://REAME.md) 에 정리한 **기능 목록 단위로 추가**한다.
    - [O]  [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.

<br/>

## ✅ 기능 요구 사항 체크리스트 ⭐️

### 1. 입력

- [O]  ‘덧셈할 문자열을 입력해 주세요.’라는 문구를 사용자에게 보여준다.
    - [O]  변수(userInput)를 설정하여, 위 문구를 사용자가 본 뒤 입력한 값을 받는다.
    - [O]  Console.readLineAsync()으로 사용자 입력을 받는다.

### 2. 계산 1) 커스텀 문자를 사용하지 않은 경우

- [O]  커스텀 문자가 아닌 경우를 알 수 있는 조건문을 만든다.
    - [O]  userInput[짝수] === 숫자
        - [O] 0이 아닌 양수로 이루어진 숫자로 구성한다.  
    - [O]  userInput[홀수] === 쉼표(,) || 콜론(:)
- [O]  구분자(쉼표(,) or 콜론(:)을 기준으로 숫자를 분리하여 숫자만 추출한다.
- [O]  더한 값을 받는 변수를 만든다.
- [O]  해당 변수에 각 숫자의 합을 더한다.

### 2. 계산 2) 커스텀 문자를 사용한 경우

- [O]  커스텀 문자가 맞는 경우를 알 수 있는 조건문을 만든다.
    - [O]  1. 커스텀 문자 구분자를 만드는 문자를 인지하는 조건문
    userInput[0] === ‘/’ && 
    userInput[1] === ‘/’ && 
    userInput[3] === ‘\’ && 
    userInput[4] === ‘n’
    - [O]  2. 커스텀 문자만 구분자로 사용되어있는지 인지하는 조건문
    userInput[2] === 함수의 각 숫자 사이에 기입 된 것 (userInput[6~ 끝까지])
        - [O]  userInput 의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 인식한다.
        - 예를 들어 "//;\n1;2;3" 
    - [O] 3. 숫자를 입력한 부분에 숫자만 넣은지 확인하는 조건문
        - [O] 0을 제외한 양수로 이루어진 숫자로 구성한다.
- [O]  사용자 입력 값에서 숫자만 추출 한다.
- [O]  더한 값을 받는 변수를 만든다.
- [O]  해당 변수에 각 숫자의 합을 더한다.

### 3. 에러

- [O]  (1) 커스텀 사용 하지 않은 경우와 (2) 커스텀 사용하는 경우를 제외하면 에러가 뜨는 조건을 만든다.
    - [O]  에러시 '[ERROR] 잘못된 입력입니다. 프로그램을 종료하겠습니다.' 문구를 나타나게 한다.
    - [O]  에러를 발생시킨다.
    - [O]  이후, 애플리케이션은 종료시킨다.
- [O]  사용자가 아무것도 입력하지 않고 엔터를 사용한 것을 인지하는 조건을 만든다.
    - [O]  에러시 '[ERROR] 아무것도 입력하지 않으셨습니다. 프로그램을 종료하겠습니다.' 문구를 나타나게 한다. 
 
### 4. 결과 출력

- [O]  각 자리를 더한 값 ‘결과 : {더한 값 변수}’과 같은 형태로 출력한다.

<br/>

## ✅  프로그래밍 요구 사항 체크리스트

- [O]  Node.js 20.17.20버전에서 실행 가능해야 한다.
- [O]  프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- [O]  package.json 파일은 변경할 수 없으며, 제공된 라이브러리 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- [O]  프로그램 종료 시 `process.exit()` 를 호출하지 않는다.
- [O]  프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- [ ]  자바스크립트 코드 컨벤션을 지키면서 프로그램을 한다. (기본적으로 [JavaScript Stype Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙으로 한다.)

**라이브러리**

- [O]  `@woowacourse/mission-utils` 에서 제공하는 `Console` API를 사용하여 구현해야 한다.
    - [O]  사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()` 와 `Console.print()` 를 활용한다.

<br/>

## ✅ 과제 제출 전 체크 리스트

- [ ]  기능을 올바르게 구현했더라도 요구 사항에 명시된 출력 형식을 따르지 않으면 0점을 받게 된다.
- [ ]  기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.
테스트가 실패하면 점수가 0점이 되므로 제출하기 전에 반드시 확인한다.
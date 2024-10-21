### 🌟 이번주 목표
- Git, GitHub, IDE 등 실제 개발을 위한 환경에 익숙해진다.
- Javascript에 익숙해진다
- 새로운 용어를 학습한다
- clean code에 대해 생각해본다
- 사용자 경험을 생각해본다


### 📃 기능 요구사항
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.


### 🗄 디렉터리 구조
```plaintext
javascript-calculator/
├── __tests__/
│   └── ApplicationTest.js   # 테스트 코드
├── node_modules/            # 프로젝트 의존성 모듈들
├── src/
│   ├── App.js               # 프로그램 실행 시작점
│   ├── Calculator.js        # 계산기 로직이 포함된 클래스
│   ├── constants.js         # 상수 파일
│   ├── index.js             # 메인 진입점 파일
│   ├── utils.js             # 유틸리티 함수들
│   └── validators.js        # 입력값 검증 로직
├── .gitignore               # Git에서 제외할 파일 설정
├── package-lock.json        # 의존성 잠금 파일
├── package.json             # 프로젝트 설정 및 의존성 목록
└── README.md                # 프로젝트 설명 파일
```

### 🌊 플로우 설명
1. 사용자로부터 입력을 받는다
2. 입력받은 문자열이 빈 문자열은 아닌지 체크한다. 
  - 빈 값일 경우 예외를 발생시킨다
3. 입력받은 문자열이 커스텀 구분자를 포함하고 있는지 확인한다
  - 커스텀 구분자가 존재하는 경우
    - 해당 커스텀 구분자를 기본 구분자 배열에 추가한다.
    - 커스텀 구분자 설정 문자열을 제거한 입력값을 반환한다
  - 커스텀 구분자가 존재하지 않는 경우 입력받은 문자열 그대로 반환한다
4. 구분자로 입력된 문자열을 분리한다
5. 분리된 각 문자열 요소의 유효성을 검증한다
  - 음수가 있거나 지원하지 않는 문자가 있을 경우 예외를 발생시킨다
6. 유효한 숫자 배열을 숫자로 변환한 후 모두 더해 합계를 계산한다
7. 계산된 합계를 출력한다


### ✅ 기능 리스트
1. 사용자 입력 받기
2. 입력 값 검증
3. 커스텀 구분자 처리
4. 문자열 분리
5. 숫자 유효성 검증
6. 숫자 합산
7. 결과 출력


### ⚙ 기능별 함수 설명
1. **사용자 입력 받기** (`getInput`)
   - `getInput()` 메서드는 사용자로부터 문자열 입력을 받습니다.
   - `Console.readLineAsync(LOG_MESSAGE.START_MESSAGE)`를 통해 입력값을 비동기로 받아옵니다.

2. **입력 값 검증** (`validateEmptyInput`, `validateNumbers`)
   - 입력된 값이 빈 값인지 검증하는 함수는 `validateEmptyInput`입니다.
   - `validateNumbers()` 메서드는 숫자 배열에서 음수나 유효하지 않은 값을 검증하는 역할을 합니다.
     - `validateNegativeNumbers()`는 음수가 포함된 경우 예외를 발생시킵니다.
     - `validateInvalidNumbers()`는 숫자가 아닌 값이 포함된 경우 예외를 발생시킵니다.

3. **커스텀 구분자 처리** (`processCustomDelimiter`, `addCustomDelimiter`)
   - `processCustomDelimiter()` 메서드는 입력 문자열에 커스텀 구분자가 있는지 확인하고 이를 처리합니다.
   - 문자열에서 커스텀 구분자가 발견되면 `addCustomDelimiter()` 메서드를 호출해 구분자를 기본 구분자 배열에 추가합니다.
   - 커스텀 구분자는 `//`와 `\n` 사이에 위치한 문자열입니다.

4. **문자열 분리** (`splitByDelimiter`, `createDelimiterRegex`)
   - `splitByDelimiter()`는 입력된 문자열을 구분자를 기준으로 나누어 배열로 변환합니다.
   - `createDelimiterRegex()` 메서드는 구분자들을 정규 표현식으로 변환하여 문자열을 나누는 데 사용될 수 있도록 준비합니다.
   - 기본 구분자(쉼표 `,`, 콜론 `:`)뿐만 아니라 커스텀 구분자도 사용할 수 있습니다.

5. **숫자 유효성 검증** (`validateNumbers`)
   - `validateNumbers()` 메서드는 분리된 문자열에서 숫자가 유효한지 검증합니다.
   - 음수인지 또는 유효하지 않은 숫자가 포함되어 있는지 확인하고, 문제가 있을 경우 예외를 던집니다.

6. **숫자 합산** (`sumArray`)
   - `sumArray()`는 숫자 배열을 받아 `reduce()`를 사용해 각 숫자를 모두 더한 합계를 반환합니다.
   - `map(Number)`를 사용하여 배열 요소들을 숫자로 변환한 뒤 더하는 방식입니다.

7. **결과 출력** (`printMessage`)
   - 계산된 합계를 콘솔에 출력하는 메서드입니다.
   - `printMessage()`는 계산 결과를 메시지로 포맷팅하여 출력하며, 결과는 `${LOG_MESSAGE.RESULT_MESSAGE}${sum}` 형식으로 출력됩니다.


### 🙈 예외 처리
- **`validateEmptyInput`** : 입력이 공백일 경우 예외 발생.
- **`validateNegativeNumbers`** : 음수가 있을 경우 예외 발생.
- **`validateInvalidNumbers`** : 유효하지 않은 숫자나 공백이 있을 경우 예외 발생.


### 😘 사용자 경험
1. 명확한 안내 메시지 제공
  - **`EMPTY_INPUT`**, **`NEGATIVE_INPUT`** : 단순한 오류 메시지 대신, 문제 상황과 해결 방법을 제공합니다

2. 구체적인 해결 방법 제시
  - **`INVALID_INPUT`** : 입력된 값에 유효하지 않은 문자가 있을 경우, 기본 구분자와 커스텀 구분자 사용 방법에 대한 구체적인 정보를 제공하여 똑같은 실수가 반복되지 않도록 방지합니다


### ✨ 과제 진행 요구 사항
- 미션은 문자열 덧셈 계산기 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
  - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.


### 💻 프로그래밍 요구 사항
- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램의 요구 사항에 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드는 가독성을 지키면서 프로그래밍한다.
  - 기본적으로 [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)를 원칙으로 한다.

**라이브러리**
- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.
  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.
# 문자열 덧셈 계산기

## ✨ 과제 요구 사항

- 미션은 저장소를 포크하고 클론하는 것으로 시작한다.
- Git의 커밋 단위는 `README.md`에 정리한 기능 목록 단위로 추가한다.
  - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.

## 📋 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 아무것도 입력하지 않은 경우 0을 반환한다.
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]`로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 입출력 요구사항

#### 입력

- 구분자와 양수로 구성된 문자열

#### 출력

- 덧셈 결과

#### 실행 결과 예시

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

### 입출력 예시

| 입력       | 출력     |
| ---------- | -------- |
| 1,2        | 결과 : 3 |
| 1,2:3      | 결과 : 6 |
| //;\n1;2;3 | 결과 : 6 |

## 🔧 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.

# 🚀 설치 및 실행

```
npm install
npm start
```

# ✏️ 구현해야할 기능

### 1. 입력 기능

- [x] 사용자로부터 문자열을 입력을 받는다
- [x] 입력받은 값을 유효성 검사 함수에 넘긴다

### 2. 유효성 검사 기능

- [x] 입력된 문자열이 비어있거나, 0을 입력할 경우 0을 반환한다.
- [x] 문자열에 유효하지 않은 문자가 있는지 확인하고 에러를 발생시킨다.
  - [x] 음수가 포함되어 있으면 에러를 발생시킨다.
  - [x] 구분자에 유효하지 않은 값(문자열 등)이 있으면 에러를 발생시킨다.
  - [x] 구분자를 제외한 입력값에 숫자가 아닌 다른 값이 있으면 에러를 발생시킨다.

### 3. 구분자 처리 기능

- [x] 기본 구분자(쉼표, 콜론)을 기준으로 문자열을 분리한다.
- [x] 커스텀 구분자가 있는 경우, '//'와 '\n' 사이에 있는 구분자를 찾아 해당 구분자를 기준으로 문자열을 분리한다.

### 4. 숫자 합산 기능

- [x] 분리된 숫자를 모두 합산한다.

### 5. 출력 기능

- [x] 계산된 결과값을 출력한다.

### 6. 에러 처리

- [x] 입력된 값에 음수가 포함되어 있으면 에러메세지를 출력해야한다.
  - [x] `[ERROR_NEGATIVE_NUMBER] : 음수는 입력할 수 없습니다.`
- [x] 구분자를 제외한 입력 값에 문자를 입력할 수 없다.
  - [x] `[ERROR_INVALID_NUMBER] : 숫제를 제외한 문자는 입력할 수 없습니다.`
- [x] 구분자에 문자열이 들어올 수 없다.
  - [x] `[ERROR_INVALID_SEPARATOR] : 구분자에 문자열을 입력할 수 없습니다.`

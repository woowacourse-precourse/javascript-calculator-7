# javascript-calculator-precourse

## 문자열 덧셈 계산기

## 기능 목록

### "덧셈할 문자열을 입력해 주세요."란 문장의 출력과 함께 문자열을 입력 받습니다.

- "덧셈할 문자열을 입력해 주세요."을 출력합니다.
- 문자열을 입력받습니다.

### 입력값이 커스텀 구문자인지를 확인합니다.

- 입력값이 커스텀 구문자인 경우 `//`와 `\n` 사이의 커스텀 값을 커스텀 구분자로 저장하여 구분자 배열에 추가합니다.

### 구분자에 따라 숫자를 분리 후 배열에 저장합니다.

- 구분자 배열을 순회하며 값에 따라 문자열을 분리하여 추출된 숫자값을 배열에 저장합니다.

### 사용자가 잘못된 값을 입력했는지를 검증합니다.

- 입력받은 문자열이 기본, 커스텀 구분자 혹은 숫자가 아닌 값인지 검증합니다.
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]`로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료합니다.

### 추출된 숫자값 배열을 순회하며 합 구합니다.

- 추출된 숫자값들의 배열을 순회하며 총합을 구합니다.

### 결과를 출력합니다.

- 추출된 숫자값들의 총합을 출력합니다.

## 기능 요구사항

- [x] Node.js 20.17.0 버전에서 실행 가능해야 한다.
- [x] 프로그램 실행의 시작점은 App.js의 run()이다.
- [x] package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- [x] 프로그램 종료 시 process.exit()를 호출하지 않는다.
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
      기본적으로 JavaScript Style Guide를 원칙으로 한다.

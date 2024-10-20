# javascript-calculator-precourse

## 📍 요구사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기 구현

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열에서 구분자를 기준으로 분리한 각 숫자의 합 반환
- 커스텀 구분자 지정 가능하며 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용
- 잘못된 값 입력 시, 에러 발생 후 종료

## ✅ 구현해야 할 기능

- [x] 사용자 입력 받기
- [x] 입력값 유효성 검증
  - [x] 입력값이 없는 경우
  - [x] 입력값에 음수가 있는 경우
  - [x] `//`와 `\n` 사이에 문자가 앖는 경우
- [x] 커스텀 구분자 추출
- [x] 구분자를 기준으로 숫자 추출
- [x] 숫자 유효성 검증
- [x] 분리한 숫자들의 합 반환
- [x] 에러 처리

## 🖊️ 흐름도 설계

![흐름도](flowchart.png)

## 👩🏻‍💻 구현 내용 정리

### 1. 사용자 입력 받기

`@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 입력 구현

```js
export async function inputUserString() {
  const userInput = await MissionUtils.Console.readLineAsync(
    "덧셈할 문자열을 입력해 주세요.\n"
  );
  return userInput;
}
```

### 2. 입력값 유효성 검증

3가지 경우로 나눠서 구현

- 입력값이 없는 경우

```js
const emptyInput = (input) => {
  if (!input) throwError(ERROR_MESSAGES.INPUT_NOT_FOUND);
  return input;
};
```

- 입력값에 음수가 있는 경우

```js
const negativeInput = (input) => {
  if (/-\d/.test(input)) throwError(ERROR_MESSAGES.NEGATIVE_NUMBER);
  return input;
};
```

- //와 \n 사이에 커스텀 문자가 없는 경우로

```js
const nullCustomDelimiter = (input) => {
  if (/^\/\/\\n/.test(input)) throwError(ERROR_MESSAGES.CUSTOM_DELIMITER_NULL);
  return input;
};
```

### 3. 커스텀 구분자 추출

입력 받은 문자열과 정규 표현식을 사용하여 `match` 함수로 커스텀 구분자 추출

```js
export function getCustomDelimiter(string, regex) {
  const match = string.match(regex);

  if (match) return match[1];
  return null;
}
```

### 4. 구분자를 기준으로 숫자 추출

`split`, `map`, `filter` 함수를 활용하여 숫자 추출

```js
export function getNumber(string, delimiter) {
  return string
    .split(delimiter)
    .map((s) => s.trim()) // 각 요소에 대해 공백 제거
    .filter((s) => s !== ""); // 빈 문자열 요소 제거
}
```

### 5. 숫자 유효성 검증

구분자를 기준으로 분리한 숫자들이 숫자 타입인지 검증하기 위해 `isNaN` 활용

```js
export const isNumber = (value) => {
  if (isNaN(value)) return false;
  return true;
};
```

### 6. 분리한 숫자들의 합 반환

`reduce` 함수를 사용해 숫자들의 합 계산

```js
export const calculateSum = (nums) => {
  return nums.reduce((acc, val) => acc + parseInt(val), 0);
};
```

## 💥 트러블 슈팅

### 1. npm 버전이 안 맞아서 발생한 문제

- 에러 메시지

```
npm error code EBADENGINE
npm error engine Unsupported engine
npm error engine Not compatible with your version of node/npm: javascript-calculator@0.0.0
npm error notsup Not compatible with your version of node/npm: javascript-calculator@0.0.0
npm error notsup Required: {"npm":">=10.8.2","node":">=20.17.0"}
npm error notsup Actual:   {"npm":"10.8.1","node":"v22.3.0"}
```

**| 문제 상황**

`npm install`을 수행했는데 발생

**| 해결 방법**

최신 버전으로 npm 업데이트

### 2. import 시, .js 확장자가 없어서 발생한 문제

- 에러 메시지

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/soeun/Study/Woowacourse/precourse/javascript-calculator-7/src/utils/throwError' imported from /Users/soeun/Study/Woowacourse/precourse/javascript-calculator-7/src/validators/inputValidator.js
```

**| 문제 상황**

throwError 모듈을 import 했는데 발생

**| 해결 방법**

`import { throwError } from '../utils/throwError'` 로 되어 있던 것을 .js를 추가하여 `import { throwError } from '../utils/throwError.js'` 로 선언하여 해결

## 📖 참고 사항

- [정규표현식](https://velog.io/@ino5/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%B4-%ED%8A%B9%EC%A0%95-%ED%8C%A8%ED%84%B4-%EB%A7%8C%EC%A1%B1%ED%95%98%EB%8A%94%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)
- [match 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [trim 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

> javascript-calculator-precourse

## 구현 기능 목록 (ver.3)

## 1. 입력: `StringInputReader.js`

- 사용자에게 입력 대기 문자 출력

```js
덧셈할 문자열을 입력해 주세요.
```

- 사용자가 문자열을 입력.

```js
덧셈할 문자열을 입력해 주세요.
1,2:3
```

## 2. 입력 처리: `StringInputProcessor.js`

- 입력된 문자열이 빈 문자열이면 0을 반환.
- 커스텀 구분자를 식별하여 기본 구분자에 추가.
- 구분자로 문자열을 분리.
- 분리한 문자열 배열을 숫자 배열로 변환하여 반환.

## 3. 문자열 검증: `ProcessorValidator.js`

- 입력 처리 과정에서의 검증 함수를 모은 클래스.
- 입력 처리 후 숫자 요소로 이루어진 배열을 반환할 수 있도록 검증.
- 잘못된 구분자, 형식에 맞지 않는 값인 경우 등을 판별하여 에러를 `throw`.

## 4. 숫자 합산 `StringCalculator.js`

- 이전 과정에서 검증된 숫자 배열을 받음.
- 숫자 배열 각 요소의 합을 계산.
- 계산 결과를 반환.

## 5. 결과 출력: `StringOutputWriter.js`

- 결과값을 출력.

```jsx
결과 : 6
```

- 전체 입출력

```js
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

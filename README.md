# javascript-calculator-precourse
# 기능 목록
## 1. 구분자 추출하기
커스텀 구분자를 추출하여 저장하고, 남은 문자열을 반환합니다.

[ **추가 구현 사항** ]

커스텀 구분자는 **문자**만 가능하고, **여러 개 입력 받는 것도 가능**하다고 간주합니다.

*예를 들어, `//.\n//;\n1;2.3` 과 같이 커스텀 구분자를 입력 받을 수 있습니다.*
```javascript
// INPUT: 입력 문자열(inputString)
// OUTPUT: 커스텀 구분자 리스트 
function extractDelimeter(inputString) {}
```
## 2. 커스텀 구분자 부분 제거하기
문자열에서 커스텀 구분자 지정 부분을 제거하고, 연산 처리할 문자열을 반환합니다.
```javascript
// INPUT: 입력 문자열(inputString)
// OUTPUT: 입력 문자열에서 구분자, 커스텀 구분자를 제거한 문자열
function extractMathExpression(inputString) {}
```
## 3. 구분자 기반 분리하기
구분자, 커스텀 구분자로 분리하여 숫자 리스트를 반환합니다.

이 때, 커스텀 구분자에 이스케이프 처리가 필요한 문자가 존재할 수 있습니다.

이를 처리하기 위해 `3-1. 구분자 전처리 함수`를 사용합니다.
```javascript
// INPUT: 구분자, 커스텀 구분자 리스트(delimeters), 
// OUTPUT: 숫자 리스트
function splitDelimeter(expression, delimeters) {}
```
## 3-1. 커스텀 구분자 전처리하기
커스텀 구분자 중 '.'나 '*'과 같은 특수 문자는 정규 표현식 사용 시, 앞에 `\\`를 붙여서 이스케이프 처리를 해야 합니다.
```javascript
// INPUT: 커스텀 구분자 리스트(delimeters), 
// OUTPUT: 이스케이프 처리된 구분자 리스트
function escapeSpecialChars(delimeters) {}
```
## 4. 덧셈 연산하기
숫자 리스트 합계를 반환합니다.

이때, 숫자가 아닌 값이 리스트에 있다면 에러를 반환합니다.

이를 처리하기 위해 `4-1. 숫자 유효 검증 함수`를 사용합니다.
```javascript
// INPUT: 숫자 리스트(numbers)
// OUTPUT: 결과 값 또는 에러 출력
function addAllNumbers(numbers) {}
```
## 4-1. 숫자 유효 검증하기
```javascript
// INPUT: 숫자 리스트(numbers)
// OUTPUT: 모두 숫자이면 true, 유효하지 않은 값이 있다면 false 반환
function isNumbersValid(numbers) {}
```
# 기타 사항
- 커스텀 구분자는 문자만 가능하다고 간주합니다.
- 커스텀 구분자는 여러 개 지정할 수 있다고 간주합니다.
## 사용자가 잘못 입력한 경우
잘못된 값에 대한 정의는 다음과 같습니다.
- 음수 혹은 0 *(단, `-`를 구분자로 사용하는 경우는 제외)*
- 등록한 커스텀 구분자 외에 다른 구분자를 사용한 경우
- 이외에 형식을 갖추지 않은 아무 입력 (예. ALSFJWOIEFJsldkf323:lssl)
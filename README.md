# javascript-calculator-precourse

## 문자열 덧셈 계산기

## 기능 목록

### 1. 시작 문구를 출력

- 시작 문구 ‘덧셈할 문자열을 입력해 주세요.’를 출력한다.

### 2. 사용자로부터 덧셈할 문자열 입력

- 사용자로부터 덧셈할 문자열을 입력받는다.

### 3. 사용자로부터의 입력 값 검증

- 입력받은 문자열이 “//” 혹은 숫자가 아닌 값인지 검증한다.
- 만약 잘못된 값을 입력받은 경우, throw문을 사용해 “[ERROR]”로 시작하는 메시지와 함께 Error를 발생시키고 애플리케이션을 종료한다.

### 4. 문자열에서 커스텀 구분자에 해당되는 영역과 숫자에 해당되는 영역 분리

- 문자열이 “//”로 시작하는지 확인한다.
- 만약 “//”로 시작한다면, “//”부터 “\n”까지의 문자열을 커스텀 구분자로 저장한다.

### 5. 구분자에 따라 숫자 분리 후 배열 저장

- RegExp 생성자를 사용한 동적 정규표현식으로 기본 구분자인 쉼표와 콜론, 그리고 사용자가 입력한 커스텀 구분자를 기준으로 문자열을 split하여 배열로 저장한다.

### 6. 배열의 총합 구하기

- 문자열을 순회하면서 배열의 원소를 정수로 변환한 다음 총합에 더하는 것을 반복한다.

### 7. 결과 출력

- 저장된 총합의 내용을 출력한다.

## 기능 요구 사항

- 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항

- 입력: 구분자와 양수로 구성된 문자열
- 출력: 덧셈 결과

실행 결과 예시

```js
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

## 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.
- @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
  - 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

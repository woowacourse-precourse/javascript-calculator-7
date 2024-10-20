# javascript-calculator-precourse

### 문자열 덧셈 계산기

우아한 테크 코스 7기 프리코스 1주차 과제

## 1주차 학습 목표

- 다음 프리코스 과제 제출을 위한 `README` 공통 양식을 작성합니다.
- 입출력을 위해 `@woowacourse/mission-utils` 라이브러리의 `Console.readLineAsync()`와 `Console.print()` 사용법을 숙지합니다.
- 함수형으로 작성한 코드를 클래스 메서드를 활용해 리팩토링합니다.
- 정규식 활용법을 익힙니다.
- 사용자 입장에서 발생할 수 있는 다양한 예외 케이스를 고민합니다.

## 기능 정의

### 실행

- 실행 시 `덧셈할 문자열을 입력해 주세요.` 가 출력됩니다.

### 입력값 받기

- 사용자의 입력값에 따라 분기 처리할 유틸 함수를 작성합니다.
  - 빈 문자열, null → 0 반환
  - 숫자가 1개일 때 → 값을 그대로 반환
  - 기본 구분자(`콤마(,)`와 `콜론(:)`)로 분리합니다.
  - 커스텀 구분자로 시작할 때 `"//"`와`"\n"` 사이에 위치하는 구분자로 분리합니다.
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]`로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션을 종료합니다.
  - 하단 예외 케이스를 고려합니다.

### 숫자 추출과 더하기

- 입력값 3,4번 분기에서는 구분자를 기준으로 문자열을 분리 후 숫자로 변환하여 더합니다.
  - 예시
  ```tsx
  "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
  ```

### 출력

- 합산 결과를 정해진 양식으로 출력합니다.
  - 출력형식은 `결과 : 값` 입니다.
  - 실행 결과 예시
  ```tsx
  덧셈할 문자열을 입력해 주세요.
  1,2:3
  결과 : 6
  ```

## 고려사항 및 예외 케이스

예외 케이스는 구현 과정에서 수정 및 추가될 수 있습니다.

- 입력 요구 사항: 구분자와 양수로 구성된 문자열

- 구분자로 다른 특수문자가 포함될 수 있습니다.
  ```markdown
  //@\n1@2@3
  결과 : 6
  ```

### [ERROR] 출력 케이스

- 음수의 값
  ```tsx
  '-123';
  '-1,2:3';
  '//;\n1;-2;3';
  ```
- 숫자 형식이 아닌 값
  ```tsx
  'abcde';
  ```
- 구분자 없이 숫자로만 구성된 문자열
  ```tsx
  '1';
  '123';
  ```
- 구분자와 문자로만 구성된 문자열
  ```tsx
  'a.b:c';
  '//;\na;b;c';
  ```
- 문자와 숫자로만 이루어진 값
  ```tsx
  'a1b2c3';
  ```
- 커스텀 구분자 오류
  ```tsx
  '//;1;2;3';
  ```
- 커스텀 구분자가 있지만 값에 포함되지 않는 경우
  ```tsx
  '//;\n123';
  ```
- 커스텀 구분자가 숫자이거나 입력되지 않은 경우
  ```tsx
  '//2\n12324';
  '//\n1 2 3';
  ```

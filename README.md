# javascript-calculator-precourse

## 1주차 과제: 문자열 덧셈 계산기

입력 문자열에서 숫자를 추출하고 지정된 구분자를 기준으로 덧셈을 수행하는 문자열 계산기를 구현하시오.

## 구현 기능 목록

- **입력**

  - 임의의 문자열을 입력받는다.

- **로직 구현**

  > Point: 구분자 찾기, 올바른 형식인지 확인

  - 구분자가 될 수 있는 문자의 종류
    - 쉼표`(",")` 구분자
    - 콜론`(":")` 구분자
    - 커스텀 구분자: 문자열 앞부분의 `"//"`와 `"\n"` 사이의 문자
      - 단, 이 커스텀 구분자는 쉼표나 콜론을 제외한다.
  - 예외처리
    - 빈 문자열 또는 null 값을 입력할 경우
    - 음수가 포함된 경우
    - 커스텀 구분자가 아닌 문자가 포함된 경우

- **출력**
  - 조건부 출력
    - 입력 문자열이 계산 가능한 경우
      - `결과 : 구분자를 기준으로 분리한 각 숫자의 합`
    - 입력 문자열이 계산 불가능한 경우
      - 예외처리에 따른 error를 던져야 한다.
      - `[ERROR] + 에러 메시지`

## 프로젝트 구조

```json
📦src
 ┣ 📜App.js // 프로그램 입력 및 출력
 ┣ 📜calculator.js // 계산 로직 구현
 ┗ 📜index.js // 프로그램 실행
```

## To do

- **docs**

  - [ ] `README.md`에 구현할 기능 목록 작성
  - [ ] 1주차 회고 작성

- **feat**

  - [ ] [미션 유틸](https://github.com/woowacourse-projects/javascript-mission-utils) 사용
  - [ ] 하나의 유틸이 한 가지 일만 하는지 확인
  - [ ] [AngularJS commit conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#generating-changelogmd) 읽기
  - [ ] 기능 목록을 단위로 삼아 커밋
  - [ ] 테스트 코드 작성

- **style**
  - [ ] [airbnb style guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript) 읽기
  - [ ] 적절한 주석 작성

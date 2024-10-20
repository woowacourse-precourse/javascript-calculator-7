# javascript-calculator-precourse
- 기간: 2024.10.15 15:00 ~ 2024-10-22 00:00
- 미션: 문자열 덧셈 계산기
- Node.js 20.17.0 버전 이상
- Git 커밋 단위는 기능 목록 단위로 추가
  - AngularJS Git Commit Message Conventions을 참고
- 자바스크립트 코드 컨벤션 지키기(Airbnb JavaScript Style Guide)

## 구현할 기능 목록

- **쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달한 경우**
  - 구분자(쉼표(,), 콜론(:))를 기준으로 숫자를 분리한다.
  - 분리한 각 숫자의 합을 반환한다.

- **커스텀 구분자(문자열 앞부분에 "//"와 "\n" 사이에 위치하는 문자)를 가지는 문자열을 전달한 경우**
  - 커스텀 구분자(문자열 앞부분에 "//"와 "\n" 사이에 위치하는 문자)를 기준으로 숫자를 분리한다.
  - 분리한 각 숫자의 합을 반환한다.

- **사용자가 잘못된 값을 입력한 경우**
  - "[ERROR]"로 시작하는 메시지와 함께 Error 를 발생시킨다.
  - 애플리케이션 종료한다.
javascript-calculator-precourse
# 문자열 덧셈 계산기

## 구현 기능 목록
- 문자열 입력받기
- input 종류별
  - 공백
  - 구분자가 있는 문자열
    - 구분자 추출
  - 구분자가 없는 문자열
- 구분자를 기준으로 숫자 추출
- 각 숫자의 합 계산
- 잘못된 값 입력시 Error 출력 및 애플리케이션 종료

## 입출력 요구 사항
### 입력
- 구분자와 양수로 구성된 문자열
### 출력
- 덧셈 결과
```
결과 : 6
```
### 실행 결과 예시
```
  덧셈할 문자열을 입력해 주세요.
  1,2:3
  결과 : 6
```
## 프로그래밍 요구 사항
- 시작점은 App.js의 run()
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- JavaScript Style Guide를 원칙으로 한다.
- 라이브러리
  - @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
  - 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다

- @woowacourse/mission-utils 참고
  - https://www.npmjs.com/package/@woowacourse/mission-utils
# javascript-calculator-precourse

## 문자열 덧셈 계산기 구현할 기능 목록- turtlehwan

- [x] 사용자 입출력 기능
- [x] 기본 구분자(, :) 인식 기능
  - 문자열을 `Number()`로 변환 후 확인하는 것이 효과적일까? 정규표현식 대신?
  - reduce 구문 안에서 throw new Error 하는 것이 좋은가?
- [x] 커스텀 구분자 인식 기능
- [ ] 사용자가 잘못된 값을 입력할 경우 예외 처리
- [ ] 리팩토링

### 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 입출력 요구 사항

- 입력 : 구분자와 양수로 구성된 문자열
- 출력 : 덧셈 결과
- 실행 결과 예시

```js
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

## 참고사항

### 진행 방식

- 과제 진행 요구 사항, 기능 요구 사항, 프로그래밍 요구 사항 만족시키기
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현
- Git 커밋 단위 목록은 기능 단위이며, [AngularJS Git Commit Message Convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 참고한다.
- @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

### 제출 전 체크리스트

- [ ] README.md에 구현할 기능 목록을 잘 정리했는가?
- [ ] 기능을 올바르게 구현했는가?
- [ ] 요구 사항에 명시된 출력 형식을 따랐는가?
- [ ] 모든 테스트가 성공적으로 실행되는가?
- [ ] GitHub PR과 우테코 플랫폼 모두 제출했는가?

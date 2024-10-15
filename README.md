# javascript-calculator-precourse

## Analyze the problem

1. 입력 파서

- 연산식은 쉼표와 콜론 중 하나 이상 사용하여 구분하므로, 정규 표현식(Regular Expression)으로 구분하는 것이 좋다.
  - 포맷에 맞지 않으면 예외 처리한다.
- 커스텀 구분자 지정 기능
  - 커스텀 구분자의 종결 문자가 `\\n`인 경우를 분리한다.
  - 분리 이후 커스텀 구분자 선언에 맞는지 정규표현식으로 검사한 후 틀리면 예외 처리, 맞을 경우에는 커스텀 구분자를 뽑아 연산식에 적용한다.

2. 코딩 스타일과 아키텍처

- 코딩 스타일
  - 반드시 [제시된 스타일 가이드](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 따른다.
    - 상수는 대문자 및 언더바(\_) 사용
    - 클래스 및 메서드 등에 특수문자 사용 금지($, \_ 등)
  - 반드시 우테코 전용 API를 사용한다(readLineAsync, print)
- 아키텍처
  - 사용자 입력 -> 입력 파서 -> 처리 -> 출력 포맷 결정 -> 출력 순으로 분리한다.
  - 가능하면 함수형 프로그래밍 스타일을 사용하며, 한 메서드 내에 10줄 정도의 코드를 유지하도록 함수 분리를 시행한다.

## References

- [Node.js 기본 Documentation](https://nodejs.org/docs/latest/api/)

## Target features

- 1단계: 기능 구현

* [ ] 사용자 입력을 받고 그대로 출력하기
* [ ] 사용자 입력에 대한 파서를 제작하고 파싱 결과를 출력하기
* [ ] 처리 루틴 제작
* [ ] 출력 포맷 구현

- 2단계: 1차 리팩토링

* [ ] 아키텍처 계획에 맞게 리팩토링되었는지 확인

- 3단계: PR 후 2차 수정

* [ ] PR 결과에 따라 코드 수정

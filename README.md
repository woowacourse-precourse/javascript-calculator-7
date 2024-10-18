# javascript-calculator-precourse

## 설명

이 프로젝트는 woowacourse의 calcuator를 구현하기 위해 만들어졌습니다.

## 요구사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.(기본적으로 JavaScript Style Guide를 원칙으로 한다.)

## 기능

- [ ] 사용자 입력

  - [ ] "" 내 콜론(:), 쉼표(,), 숫자(양수), 커스텀 구분자로만 입력 시작 가능
  - [✅] @woowacourse/mission-utils에서 제공하는 Console API 사용, Console.readLineAsync()
  - [ ] 예외사항 : 위 문자 제외 다른 입력값 입력 시, [ERROR]"다른 값을 넣어주세요" 메세지 출력
  - [ ] 예외사항 : 공백 입력 시(큰따옴표("), 작은따옴표(')), 0으로 입력
  - [ ] 예외사항 : 숫자 사이 구분자는 1개만 입력받을 수 있음 2개 이상 입력 시, [ERROR]"구분자는 1개만 입력받을 수 있습니다" 메세지 출력
  - [ ] 예외사항 : 커스텀 구분자 표시는 1쌍, 커스텀 구분자 1개만 입력받을 수 있음 2개 이상 입력 시, [ERROR] "커스텀 구분자 표시는 1쌍만 입력받을 수 있습니다 + (ex. 커스텀 구분자는 반드시 //와 \n(커스텀 구분자 표시)사이에 위치)" 메세지 출력
  - [ ] 예외사항 : 정수만 입력 가능, 소수점 입력 시, 소수를 버리고 정수로 변환
  - [ ] 예외사항 : 음수 입력 시, [ERROR]"양수만 입력 가능합니다" 메세지 출력
  - [ ] 예외사항 : 큰따옴표(") 및 작은따옴표(')로 시작하지 않을 시, [ERROR] "입력은 반드시 큰따옴표(") 또는 작은따옴표(')로 감싸진 상태에서 시작해야 합니다." 메세지 출력

- [ ] 숫자 분리

  - [ ] 숫자 및 구분자 함께 그대로 저장 : 숫자와 구분자를 함께 배열에 저장

- [ ] 덧셈 연산

  - [ ] 덧셈 연산 : postfix를 이용한 stack 구현 Example 3,4:7 = 3 4 , 7 :
  - [ ] 모든 연산은 입력 순서대로 수행되며, 연산자 우선순위는 고려되지 않는다

- [ ] 결과 출력
  - [ ] 공백 입력 시, "결과 : 0" 출력
  - [ ] @woowacourse/mission-utils에서 제공하는 Console API 사용, Console.print()

## To - Do - List

- [ ] 사용자 입력

  - [✅] 입력값 받기: 사용자가 입력한 문자열을 Console.readLineAsync()를 통해 받는다.
  - [✅] 입력값을 string -> array로 받기
  - [✅] 공백이 입력된 경우 이를 0으로 변환하여 처리한다.
  - [✅] 양수만 입력이 가능하다(소수는 포함된다). 음수 혹은 0이 입력된 경우 무시되어야 함
  - [ ] 입력값에 양수, 쉼표, 콜론, 커스텀 구분자만 있지 않은 경우 예외 처리([ERROR]'입력 값에는 양수, 쉼표(,), 콜론(:), 커스텀 구분자(//와 \n 사이 사용자 임의 지정)만 입력이 가능합니다.' 메시지 출력)
  - [ ] 숫자 사이 구분자가 2개 이상 연속 입력된 경우 예외 처리([ERROR]'구분자는 숫자 사이에 1개만 사용 가능합니다.' 메시지 출력)
  - [ ] 커스텀 구분자가 2개 이상 연속 입력된 경우 예외 처리([ERROR] '커스텀 구분자는 1개의 문자만 사용 가능합니다.' 메시지 출력)

- [ ] 덧셈 연산

  - [ ] 구분자를 기준으로 숫자를 분리한다.
  - [ ] 입력된 문자열 내부의 숫자를 숫자로 바꾼다.
  - [ ] 스택을 구현하여 덧셈 연산을 처리한다.

- [✅] 결과 출력
  - [✅] 정상적인 입력값의 경우 결과를 Console.print()로 출력한다.
  - [✅] 공백 입력 시, 0을 출력한다.

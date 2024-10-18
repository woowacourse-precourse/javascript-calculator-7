# javascript-calculator-precourse (우아한테크코스 1차 과제)

## 구현 기능 목록 (기능 요구 사항)

- 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표 (,) 또는 콜론 (:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.

- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞 부분의 "//" 와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.

- 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]" 로 시작하는 메세지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항

- 입력 : 구분자와 양수로 구성된 문자열 (덧셈할 문자열을 입력해 주세요.)
- 출력 : 덧셈 결과 (결과 : 6)

## 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

## 라이브러리

- @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
- 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

<hr>

## TIL 및 회고 (2024.10.15)

배운 점:

- run() : 메서드 내부에서 데이터 가져오기, 파일 읽기, API 호출 등 시간이 걸리는 작업이 비동기적으로 처리된다.
- arguments : 자바스크립트 함수 내에서 사용되는 특수한 객체로, 함수에 전달된 모든 인수를 배열과 유사한 형태로 담고 있다.

회고 :

- 테스트케이스에 대한 테스트를 작성한 경험이 많지 않았는데, 이번 기회를 토대로 TDD(Test Driven Devlopment) 에 대해 깊게 공부해봐야 겠다는 생각을 갖게 되었다. 또한 js 기반의 App 클래스를 이용하여 run() 메서드를 사용하는 구조는 흔히 보지 못했는데, 구글 검색을 통해 App이라는 클래스가 프로그램의 주요 로직이나 애플리케이션 상태를 관리한다는 것을 알게 되었다.
- jest를 활용한 테스트 코드에 대한 공부를 통해 mock 함수의 개념을 학습하고, 커스텀 구분자의 작성을 어떻게 할지에 대해 좀 더 고민해봐야할 것 같다.

<hr>

## TIL 및 회고 (2024.10.16)

배운 점:

- match 메서드를 활용해 특정 문자열 패턴이 존재하는지 알 수 있다.
- 정규표현식 작성법에 대해 알 수 있었다.
- '/패턴/' 로 찾고자 하는 패턴 작성
- (.)을 통해 특정 문자를 캡쳐할 수 있음
- /문자는 \처리를 해야 정규표현식에서 인지 가능함
- ^는 문자열의 시작을 의미함
- match 메서드를 통해 캡쳐한 문자는 결과 배열의 한 요소로 저장됨
- new RegExp로 정규표현식을 생성한 다음 [] 안에 있는 요소들을 기준으로 배열을 split 하는 로직 작성

회고 :

- 커스텀 구분자로 문자열을 잘라내는 로직을 어떻게 작성할지 고민하다가, 예전 학교 수업에서 파이썬의 정규표현식을 활용했던 기억이 떠올랐다. 자바스크립트에도 정규표현식이 있다면 유용할 것 같아 구글 검색을 해보니 역시 정규표현식에 대한 코드를 자바스크립트로 활용할 수 있었다.
- 정규표현식을 활용한 자바스크립트 코드 작성에 익숙해질 수 있었다.

<hr>

## TIL 및 회고

- ApplicationTest.js에서 mockQuestions 함수에 대해 자세히 들여다보았다.

- mockQuestions 함수는 MissionUtils.Console.readLineAsync 함수의 동작을 jest 테스트 프레임워크를 사용하여 가짜로 구현하기 위한 코드임을 알 수 있었다. 해당 코드를 사용하면 테스트 환경에서 readLineAsync 함수가 실제로 사용자 입력을 기다리는 대신, 미리 준비된 입력값을 반환하도록 할 수 있다.

- jest.fn()으로 테스트를 위한 가짜 함수를 생성

- mockImplementation 을 사용하여 함수가 호출될 때마다 미리 정해진 로직을
  실행하게 한다.

- readLineAsync 는 비동기 함수이므로, 항상 Promise 객체를 반환해야 한다.

- 해당 함수는 테스트를 할 때, 미리 정의한 inputs 배열에서 입력값을 순차적으로 가져와서, readLineAsync 함수가 호출될 때마다 그 값을 반환하도록 설정한다.

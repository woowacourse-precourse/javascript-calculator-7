# javascript-calculator-precourse
## 📑과제 진행 요구 사항
- 미션은 문자열 덧셈 계산기 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
  - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.
## 🚀기능 요구 사항
- 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
## ✏️입출력 요구 사항
### 입력
- 구분자와 양수로 구성된 문자열
### 출력
- 덧셈 결과
### 실행 결과 예시
```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

## 💻프로그래밍 요구 사항
- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.
### 라이브러리
- @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
- 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

## 👨‍💻과제 풀이
### 과제 구현 전
- 생각해 본 부분
  - 커스텀 구분자를 생성하는 위치가 중간일 수 도 있는가?
    - 요구사항에서 **문자열 앞부분**에 위치한다고 명시됨
  - 커스텀 구분자는 한번에 여러개가 만들어 질 수 있는가?
    - 요구사항에서 **"//"와 "\n" 사이에 위치하는 문자**(문자들 또는 문자열 X) 이라고 명시되어있어 //와 \\n 사이에 문자들 또는 문자열이 들어갈 경우 Error 처리를 해 줘야 할 것 같음
  - 구분자가 한번에 두 개 들어가있는 경우도 있는가?
    - 구분자는 말 그대로 구분을 해 주어야 하는 부분을 표시해주기 때문에 두 개의 구분자가 연속으로 있다면 Error 처리를 해 줘야 할 것 같음
  - 함수형 프로그래밍 vs 클래스형 프로그래밍
    - 행동 위주의 요구사항이라고 판단되어 함수형 프로그래밍이 낫다고 생각
    - 단, 제대로 된 함수형 프로그래밍을 하는 데는 숙련도가 부족하기 때문에 최대한 함수형 프로그래밍 패러다임을 따르도록 구현

- 구현 방법
  - 커스텀 구분자 유무 탐색 및 추출
    - 방법 1. 문자열의 처음이 //로 시작할 경우 문자를 찾고 \\n으로 잘 닫혀 있는지 확인
    - 방법 2. 정규표현식을 이용하여 커스텀 구분자 유무 탐색 및 추출
    - 장단점
      - 방법 1의 경우 요구사항에 정해진 규칙 대로 빠르게 커스텀 구분자를 찾을 수 있음
      - 방법 1의 경우 여러 개의 커스텀 구분자가 선언되는 경우 처리가 까다로울 수 있음(//\\n이 여러개일 경우)
      - 방법 2의 경우 여러 개의 커스텀 구분자가 있는 경우 확인 및 추출에 용이
      - 방법 2의 경우 간결한 코드 작성에 용이
    - 정해진 규칙이 있는 입력이기 때문에 더 빠르고 구현이 쉬운 방법 1을 선택

  - 입력 유효성 검사
    - 방법 1. 문자열을 돌며 입력이 숫자 또는 구분자가 아닌 경우를 직접 찾기
    - 방법 2. 정규표현식을 이용하여 숫자 또는 구문자가 아닌 것이 있는지 확인
    - 장단점
      - 방법 1의 경우 문자열을 돌며 기본 구분자 및 커스텀 구분자 그리고 숫자가 아닌 것을 찾기만 하면 되므로 한번의 순회로 빠르게 확인 가능
      - 방법 1의 경우 커스텀 구분자가 많은 경우 코드가 가독성이 떨어지거나(if문으로 처리할 경우) 성능이 안좋아질 가능성이 있음(배열에 넣어 include로 확인할 경우)
      - 방법 1의 경우 구분자와 숫자가 반복되는 지 확인하는 과정에서 들여쓰기가 깊게 들어갈 수 있음
      - 방법 2의 경우 커스텀 구분자가 많은 상황에 처리가 비교적 간단
      - 방법 2의 경우 간결한 코드 작성에 용이
      - 방법 2의 경우 유효한 값으로 이루어진 경우, 숫자와 구분자가 반복되는 지 확인하는 경우 총 2가지의 정규표현식이 필요할 것 같음
    - 비교적 코드의 들여쓰기가 적게 들어가고 간결한 방법 2를 선택

  - 구분자 처리 과정
    - 방법 1. 각 구분자를 이용하여 split
    - 방법 2. 정규표헌식을 이용하여 replace 후 split
    - 장단점
      - 방법 1의 경우 구분자가 여러개 일 경우 여러번 문자열 또는 배열을 반복해야 하는 경우가 생길 수 있음
      - 방법 2의 경우 구분자가 적을 경우 정규표현식의 컴파일 과정과 매치 과정 때문에 일반적인 split보다 느릴 수 있음
      - 방법 2의 경우 2번의 순회로 해결하기 때문에 구분자의 개수에 상관 없이 일정한 성능이 보장됨
    - 일정한 성능을 보여줄 수 있는 방법 2를 선택

### 과제 구현 중
#### 체크리스트
- [x] 사용자 입력 구현
- [x] 커스텀 구분자의 유무 판단 및 생성
- [x] 입력에 대한 유효성 검사 구현
- [x] 기본 구분자 및 커스텀 구분자를 이용하여 숫자 배열화
- [x] 배열화 된 숫자 계산
- [x] 결과 출력

### 과제 구현 후
#### PR 전 체크리스트
- [ ] 자바 코드 컨벤션을 지키면서 프로그래밍했는가?
  - https://google.github.io/styleguide/javaguide.html, https://myeonguni.tistory.com/1596 참고한다.
  - IntelliJ 또는 Eclipse 통합 개발 도구에서 formatting을 한다.
- [ ] 한 메서드에 오직 한 단계의 들여쓰기(indent)만 허용했는가?
- [ ] else 예약어를 쓰지 않았는가?
- [ ] 모든 원시값과 문자열을 포장했는가?
- [ ] 콜렉션에 대해 일급 콜렉션을 적용했는가?
- [ ] 3개 이상의 인스턴스 변수를 가진 클래스를 구현하지 않았는가?
  - 쉽지 않은 연습일 수 있다. 가능하면 인스턴스 변수의 수를 줄이기 위해 노력한다.
- [ ] getter/setter 없이 구현했는가?
  - 핵심 로직을 구현하는 도메인 객체에 getter/setter를 쓰지 않고 구현했는가?
  - 단, DTO는 허용한다.
- [ ] 메소드의 인자 수를 제한했는가?
  - 4개 이상의 인자는 허용하지 않는다.
  - 3개도 가능하면 줄이기 위해 노력해 본다.
- [ ] 코드 한 줄에 점(.)을 하나만 허용했는가?
  - 디미터(Demeter)의 법칙(“친구하고만 대화하라”)을 지켰는가?
  - 예를 들어 location.current.representation.substring(0, 1)와 같이 여러 개의 점(.)이 등장하면 리팩토링할 부분을 찾아본다.
- [ ] 메소드가 한가지 일만 담당하도록 구현했는가?
- [ ] 클래스를 작게 유지하기 위해 노력했는가?

#### 확장
- 커스텀 구분자가 여러 개가 만들어진다면?
  - ...
- 숫자가 소수 또는 음수가 들어온다면?
  - ...

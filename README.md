# javascript-calculator-precourse

## 기능 구현

- [x] 입력

  - [x] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - [x] 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.

- [x] 출력

  - [x] 계산 결과 출력

- [x] 에러 처리 ("[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료)
  - [x] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하지 않는 경우 -> 4번째 거에 포함된다.
  - [x] 커스텀 구분자가 잘못된 경우 -> 4번째에 포함됨
  - [x] 양수가 아닌 숫자가 들어간 경우
  - [x] 숫자가 아닌 것이 들어간 경우

## 리팩토링 - mvc 패턴을 적용해보자.

- Models

  - [x] 사용자가 입력한 문자열

- Views

  - [x] 입력 메세지 출력
  - [x] 숫자 합 출력

- Controllers

  - [ ] 입력 메세지에 커스텀 구분자가 있는지 확인
    1. 있다면 커스텀 구분자 이후로 문자열을 자름
    2. 없다면 원래 입력 메세지 그대로
  - [ ] 구분자에 따라 입력 받은 문자열을 숫자로 변환
    1. 정규식을 동적으로 생성
    2. 정규식을 사용하여 split으로 나눔
  - [ ] 숫자 합 계산

- utils
  - [x] 커스텀 구분자 관련
    1. 커스텀 구분자가 있는지 확인하는 함수
    2. 커스텀 구분자 이후로 문자열 자르는 함수
    3. 구분자에 따라 입력 받은 문자열을 숫자로 반환하는 함수
  - [x] 에러처리 함수
    1. 숫자가 아닌 문자열이 포함된 경우
    2. 음수가 포함된 경우
  - [x] 숫자 합 계산 함수

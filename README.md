# javascript-calculator-precourse
## 문자열 덧셈 계산기

### 요구사항 분석
- 피연산자는 ,(컴마), :(콜론), 커스텀 구분자로 구분되어야 한다.
- 피연산자 사이의 구분자는 하나만 사용해야 한다.
- 커스텀 구분자는 //(커스텀 구분자 제시 시작)와 \n(커스텀 구분자 제시 끝)으로 정의한다.
- 커스텀 구분자는 처음에 정의되어야 하며, 피연산자를 정의하는 도중 정의할 수 없다.
- 커스텀 구분자는 하나의 특수문자이며, 한 번에 둘 이상의 특수문자를 정의할 순 없다.
- 커스텀 구분자는 하나의 특수문자이며, 특수문자 이외의 문자로는 정의할 수 없다.
- 사용자는 다수의 커스텀 구분자를 정의할 수 있다.

### 구현할 기능 목록
- 커스텀 구분자 추출
- 입력받은 값이 유효한지 검사
- 피연산자 추출
- 계산

### 처리해야 할 예외 상황
- 사용자가 피연산자를 입력할 자리에 음수를 입력한 경우
- 사용자가 피연산자 사이의 구분자를 두 개 이상 입력한 경우
- 사용자가 커스텀 구분자를 정의할 때 두 개 이상의 문자를 입력한 경우
- 사용자가 커스텀 구분자를 정의할 때 특수문자가 아닌 다른 문자를 입력한 경우
- 사용자가 커스텀 정의를 시작했으나, \n으로 종료하지 않은 경우
# 문자열 덧셈 계산기

## 핵심 기능

- 가장 중요한 기능은 연산의 '결과'이다.

## 기억할 것

- 작은 단위부터 하자. (단, 핵심에 가까운)
- 코드 양이 적을 때 리펙터링 하자.

## 구현할 기능 목록

### 덧셈

- [x] 2개의 숫자에 대해 덧셈이 가능하다.
- [x] 3개 이상의 숫자에 대해 덧셈이 가능하다.
- [x] 0개의 숫자는 0으로 처리한다.

### 변환

- [x] 문자 배열을 숫자 배열로 변환한다.

### 모든 구분자

- [x] 쉼표(,) 구분자를 기준으로 문자열을 분리한다.
  - 쉼표(,) 구분자를 만나기 전까지, 문자열을 더한다.
  - 쉼표(,) 구분자를 만나면, 문자열을 배열에 넣는다.
  - 마지막 쉼표(,) 구분자를 기준으로 뒤에 문자열은 배열에 넣는다.
- [x] 콜론(:) 구분자를 기준으로 문자열을 분리한다.
- [x] 세미콜론(;) 구분자를 기준으로 문자열을 분리한다.
- [x] 세미콜론(;) 구분자와 쉼표(,) 구분자를 기준으로 문자열을 분리한다.

### 커스텀 구분자

- [x] 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자를 찾는다.
- [x] 문자열 앞부분의 커스텀 구분자 수식을 문자열에 제외한 문자열을 반환한다.

### 예외

- [x] 숫자와 지정된 구분자로만 이루어진 문자인지 판별한다.
  - [x] 기본 구분자가 아니면서 커스텀 구분자가 아닌 구분자가 포함되면, 올바른 문자열이 아니다.
  - [x] 기본 구분자만 포함되면, 올바른 문자열이다.
  - [x] 커스텀 구분자만 포함되면, 올바른 문자열이다.
  - [x] 기본 구분자와 커스텀 구분자만 포함되면, 올바른 문자열이다.
- [ ] 올바르지 않은 문자라면, "ERROR"로 시작하는 메서지와 함께 Error를 발생시킨다.
- [ ] Error가 발생하면 애플리케이션은 종료된다.

### 동작 순서

- [] 입력한다.
- [x] 커스텀 구분자가 있는지 확인한다.
- [x] 커스텀 구분자를 문자열에서 제외한다.
- [x] [예외 처리] 기본 구분자가 아니면서 커스텀 구분자가 아닌 구분자가 포함되면 에러로 처리한다.
- [x] 문자열을 커스텀, 기본 구분자를 기준으로 분리해서 문자열 배열을 생성한다.
- [x] 문자열 배열을 숫자 배열로 변환한다.
- [x] 숫자 배열에 있는 모든 수를 덧셈한다.
- [] 출력한다.

# javascript-calculator-precourse

## 🚀 요구 사항 분석
### 시작하기

- [x]  요구사항 분석 README.md 작성
- [x]  constant 작성하기

### 입력받기

- [x]  사용자에게 한 줄 입력받기

### 출력하기

- [x]  출력 구현하기
- [x]  계산된 결과 출력하기
- [x]  에러메세지 출력하기

### 계산하기

- [x]  입력에서 구분자 기준으로 숫자 분리하기
- [x]  커스텀 구분자 분리하기
- [x]  모든 숫자의 합을 계산하기

### 유효성 검증

- [x]  사용자가 잘못된 값을 입력할 경우
  - [x]  숫자가 아닐 경우
  - [x]  숫자가 0 이하인 경우

<br/>

## 🚨 체크리스트
- [x]  JavaScript Code Conventions 을 준수하였는가
- [x]  한 메서드에 오직 한 단계의 들여쓰기만 허용했는가?
- [x]  else 예약어를 쓰지 않았는가?
- [x]  모든 원시값과 문자열을 포장했는가?
- [x]  3개 이상의 인스턴스 변수를 가진 클래스를 구현하지 않았는가?
- [x]  getter/setter 없이 구현했는가?
- [x]  메소드의 인자 수를 제한했는가?
- [x]  코드 한 줄에 점(.)을 하나만 허용했는가?
- [x]  메소드가 한가지 일만 담당하도록 구현했는가?
- [x]  클래스를 작게 유지하기 위해 노력했는가?

<br/>

## 📄 폴더구조
```
📦 __tests__
 ┗━ 📜ApplicationTest.js
📦 src
 ┣━ 📜App.js
 ┣━ 📜index.js
 ┣━ 📂util
 ┃   ┣━ 📜calculate.js
 ┃   ┣━ 📜extract-custom-separator.js
 ┃   ┣━ 📜print-message.js
 ┃   ┗━ 📜user-input.js
 ┣━ 📜InputParser.js
 ┣━ 📜Validator.js
 ┗━ 📜constant.js
```
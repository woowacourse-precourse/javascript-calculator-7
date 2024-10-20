# javascript-calculator-precourse

우아한테크코스 7기 웹 프론트엔드 프리코스 1주차 미션 '문자열 덧셈 계산기' 구현 레포지토리입니다.

## 기능 목록

- [x] 기능1. 초기 배열 생성(구분자 배열, 추출된 숫자 배열)

- 구분자 배열에는 기본 구분자인 쉼표와 콜론이 들어가있고, 앞으로 지정된 커스텀 구분자들이 배열에 추가된다.
- 추출된 숫자 배열은 일단 빈 배열이고, 숫자 추출 함수가 숫자를 추출하면 그 숫자를 이 배열에 추가하게 된다.

---

- [x] 기능2. 사용자의 값 입력 및 출력

- 입력은 @woowacourse/mission-utils의 Console API에서 Console.readLineAsync()를 활용한다.
- 출력은 @woowacourse/mission-utils의 Console API에서 Console.print()를 활용한다.

---

- [x] 기능3. 빈 문자열 처리

- 빈 문자열이 입력으로 들어오면 0를 return하는 함수를 생성한다.

---

- [x] 기능4. 에러 출력

- "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션이 종료되는 함수를 생성한다.

---

- [x] 기능5. 숫자 판별

- 문자가 숫자인지, 아니면 숫자가 아닌지 판별해서 숫자이면 true를, 숫자가 아니면 false를 return하는 함수를 생성한다.

---

- [x] 기능6. 커스텀 구분자 지정

- 문자열에서 “//”와 그 뒷부분에 “\n”이 있는지 인식하고, 그 사이에 있는 문자를 구분자 배열에 넣어주는 역할을 하는 함수를 생성한다.
- 이 함수는 커스텀 구분자를 구분자 배열에 넣은 이후에 문자열에서 “//문자\n”을 삭제하는 역할도 수행한다.

---

- [x] 기능7. 문자열 분할 및 숫자 추출

- 구분자 배열을 사용하여 문자열을 분할하고 추출된 숫자를 추출된 숫자 배열에 넣는 함수를 생성한다.
- 이 때 기능5.숫자 판별 함수를 사용하여 추출된 문자가 숫자가 아니라면 에러를 출력하고 프로그램을 종료한다.

  

---

- [x] 기능8. 추출된 숫자 합 계산

- 추출된 숫자 배열에서 추출된 숫자들의 합을 계산하는 함수를 생성한다.

## 리팩토링 목록
- [x] 에러 처리 개선

- 단순히 에러를 출력해주는 함수 printError를 에러를 직접 throw하는 함수 handleError 함수로 수정
---
- [x] 양수가 아닌 값 입력에 대한 오류 처리 추가

- 함수 validateNumber에서 num이 양수가 아니면 에러를 throw하도록 구현
- 그리고 숫자가 아닌 문자 입력의 경우에도 에러를 throw하도록 변경
---
- [x] 커스텀 구분자로 숫자를 사용할 수 없게 처리

- handleCustomSeparator 함수에서 커스텀 구분자가 숫자인 경우 에러를 throw하도록 구현
---
- [x] 커스텀 구분자로 공백 허용

- 정규표현식을 수정하여 커스텀 구분자로 공백 허용
---
- [x] (style) 변수 및 상수 네이밍 컨벤션 수정

- 클래스 상수 프로퍼티(SEPARATORS, EXTRACTED_NUMBERS)를 UPPER_SNAKE_CASE로 통일
- 지역 변수 및 매개변수를 camelCase로 변경 (input, proccessedInput, customSeparator
등)
- 정규표현식 상수(CUSTOM_SEPARATOR_REGEX, REGEX)를 UPPER_SNAKE_CASE로 유지
- 클래스 내 상수 참조를 일관되게 수정 (this.separators -> this.SEPARATORS)

---
- [x] 큰 숫자로 인한 오버플로우 예외 처리

- Number.MAX_SAFE_INTEGER를 활용하여 오버플로우 예외 추가
## 흐름도
![image](https://github.com/user-attachments/assets/0fbdac67-455d-453c-8944-504be5308199)


## 배운 점
1. 프로젝트 개발 환경 버전 관리(Node.js, npm)
2. 자바스크립트 클래스 안에서의 메서드 사용
3. 깃 커밋 컨벤션(AngularJS Git Commit Message Conventions)
4. throw를 통한 에러 처리
5. 정규표현식
6. 정적 데이터 속성 Number.MAX_SAFE_INTEGER

## 회고

🔗 [프리코스 1주차 회고](https://quickchabun.tistory.com/145)
<br><br>(README.md에 작성된 리팩토링, 배운 점에 대한 자세한 설명과 후기가 작성되어 있습니다.)


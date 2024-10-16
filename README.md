# 문자열 덧셈 계산기

## ✅ 기능 목록

✔️ 시작

- 입력하라고 알려주는 문구 출력
<br/>
✔️ 입력

- 구분자와 “양수” 로 구성된 문자열 입력
- 입력받은 문자열 저장
<br/>
✔️ 계산기

- 숫자 추출
    - “,” 나 “:” 를 구분자로 가지는 경우 해당 구분자를 기준으로 숫자 추출
    - 커스텀 구분자 ( “//” + “\n” ) 을 가지는 경우 해당 구분자 + “,” + “:” 를 기준으로 숫자 추출
- 예외 처리
    - “” : 빈 문자열이 들어온 경우 0 출력
    - 구분자, 숫자 이외에 다른 문자가 들어온 경우 “[ERROR]” 를 출력하고 Error 를 발생시킨 후 애플리케이션 종료
- 추출된 숫자들 더하기
    - 범위 제한을 두지 않기 위해 문자열 더하기 방법으로 계산
<br/>
✔️ 출력

- 계산기를 통해 더해진 값 출력 후 종료
<br/><br/>
## ❓ 생각해 볼 내용

1. 구분자로부터 숫자 추출하기
    a. 맨 처음에 “//” 문자가 나오지 않으면 무조건 숫자부터 시작
    b. “//;;\n” 와 같은 2개 이상의 이어진 문자열이 나올때 ⇒ 커스텀 구분자로 추가
    c. “//\n” 와 같이 커스텀 구분자 안에 아무 구분자도 없을때 ⇒ 에러로 출력
    d. “//2\n” 와 같이 커스텀 구분자 안에 숫자가 들어갈때 ⇒ 에러로 출력
    e. “//]\n//[\n” 와 같이 커스텀 구분자가 2개가 될 경우 ⇒ 커스텀 구분자 “[”, “]” 에 “,” , “;” 까지 포함하여 검사 진행
<br/>
1. [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript) 컨벤션에 맞게 코드 작성하기 (Airbnb 스타일)
    a. 변수 선언 - const, let 을 사용 (var 사용 X)
    b. 문자열 - “ 큰따옴표가 아닌 ‘ 작은 따옴표 사용
    c. 함수 선언 - 명시적으로 이름을 붙인 함수 표현식과 화살표 함수 사용
    d. 세미 콜론 - 모든 문장 끝에는 ; 붙이기
    e. 에러 핸들링 - 에러가 발생할 가능성 있는 코드에는 try - catch 문 사용
    f. 상수명 - SNAKE_CASE 로 작성
    g. 클래스, 메서드 - 특수 문자 사용 X
<br/>
1. AngularJS Git Commit Message Conventions 컨벤션에 맞게 커밋하기
    a. <type> : 커밋의 유형 지정  ⇒  feat, fix, docs, style, refactor, test, chore
    b. (<scope>) : 선택 사항으로 간단한 단어로 핵심을 표현 ex. (login)
    c. <subject> : 커밋에 대한 간결한 설명 추가, 첫 글자는 소문자 + 명령형으로 작성

```
<type>(<scope>): <subject>
```
<br/><br/>
## **📥  실행 방법**

1. 레포지토리 클론

```
git clone https://github.com/subsub-e/javascript-calculator-7.git
```
<br/>
2. 의존성 모듈 설치

```
npm install
```
<br/>
3. 프로젝트 실행

```
npm run start
```
<br/>
4. 프로젝트 테스트

```
npm run test
```
<br/><br/>
## 🧑‍💻 필요 개발 환경

✔️ npm ≥ 10.8.2

✔️ node ≥ 20.17.0
<br/><br/>
## 📖 **라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현한다.
    - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.
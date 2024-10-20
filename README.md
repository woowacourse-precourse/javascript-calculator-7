<a href="https://club-project-one.vercel.app/" target="_blank">
</a>

<br/>
<br/>

# 0. Getting Started (시작하기)

```bash
$ npm run test
$ npm run start
```

[fork된 Repository 링크](https://github.com/mun-kyeong/javascript-calculator-7)

[미션 PR](/**/)

<br/>
<br/>

# 1. Overview (개요)

- 이름: javascript-calculator-7
- 프로젝트 설명: 우아한테크코스 - 프리코스 1주차 기능 목록 소개 README
- 작성자 : [mun-kyeong](https://github.com/mun-kyeong)

<br/>
<br>

# 2. Key Features (주요 기능)

- **입력 : 유효성 검사**
  - 잘못된 입력의 경우 `[ERROR]`로 시작하는 메시지 반환
  ```md
      [잘못된 입력 예시]
      - 양수가 아닌 문자열 입력
      - (커스텀 구분자 방식이 아닌) 기본구분자 외의 문자열 입력
  ```
  - 에러 메시지 반환 후 애플리케이션 종료
- **기본 구분자 처리**
  - 쉼표와 콜론을 구분자 list 에 추가
  - 쉼표(`,`)와 콜론(`:`)을 기준으로 숫자를 추출
  - 추출된 숫자를 정수로 변경
  - 합산될 숫자 list에 추가
- **커스텀 구분자 처리**
  - 입력 문자열에 (`//`)와 (`\n`) 포함여부 판단
  - 커스텀 구분자로 숫자를 추출
  - 추출된 숫자를 정수로 변경
- **숫자 합산**

  - 분리된 숫자들 모두 합산

- **결과 반환**
  - 합산된 결과를 반환
  - 잘못된 입력이 발생한 경우 "[ERROR]" 메시지 반환

<br/>
<br/>

# 3. 입출력 요구사항

- 입력 : **구분자**와 **양수**로 구성된 문자열
- 출력 : 덧셈결과
- 실행결과 예시

  ```jsx
  덧셈할 문자열을 입력해 주세요.
  1,2:3
  결과 : 6
  프로그래밍 요구 사항
  ```

<br/>
<br/>

# 4. Project Structure (프로젝트 구조) >> 추후 수정

```plaintext
javascript-calculator-7/
├── src/
│   ├── controllers/
│   │   └── CalculatorController.js  # 메인 로직 컨트롤러
│   ├── models/
│   │   ├── CalculatorModel.js       # 계산 관련 모델
│   │   └── ValidatorModel.js        # 유효성 검사 모델
│   ├── views/
│   │   └── CalculatorView.js        # 사용자에게 결과를 보여주는 뷰
│   ├── App.js                       # 애플리케이션 시작점 (컨트롤러와 연결)
│   ├── index.js                     # 실행을 위한 진입 파일
│   ├── utils/
│   │   ├── parser.js                # 문자열 파싱 및 구분자 처리
│   │   └── errorHandler.js          # 예외 처리
├── __tests__/
│   ├── ApplicationTest.js     # 전체 테스트
└── package.json          # 프로젝트 설정 파일
└── README.md             # 프로젝트 소개 및 기능 정의 파일

```

<br/>
<br/>

# 5. Development Workflow (개발 워크플로우)

## 브랜치 전략 (Branch Strategy)

- [woowacourse 저장소](https://github.com/woowacourse-precourse/javascript-calculator-7)에서 fork 하여 과제 진행
- `mun-kyeong` branch 사용

<br/>
<br/>

# 6. Coding Convention

## 명명 규칙

- 영어 사용 / 특수문자 사용 불가

- 상수 : `SNAKE_CASE`

```
const NAME_ROLE;
```

- 변수 & 함수 : `camelCase`

```javascript
// state
const [isLoading, setIsLoading] = useState(false);

// 배열 - 복수형 이름 사용
const datas = [];
```

<br/>

## 함수

- 함수는 함수 표현식을 사용하며, 화살표 함수를 사용한다.

```javascript
// Good
const fnName = () => {};

// Bad
function fnName() {}
```

<br/>

## 폴더 네이밍

`camelCase` 를 기본으로 하며, 컴포넌트 폴더일 경우에만 파스칼 케이스로 사용한다.

```
// 카멜 케이스
camelCase
// 파스칼 케이스
PascalCase
```

<br/>
<br/>

# 7. 커밋 컨벤션

## 기본 구조

```md
<type>(<scope>): <subject> //헤더

<body>                      //본문

<footer>                    //푸터
```

<br/>

## type 종류

```
feat (feature) - 기능
fix (bug fix)  - 수정
docs (documentation) - 문서작업
style (formatting, missing semi colons, …) - 스타일 (서식 누락)
refactor - 리팩토링
test (when adding missing tests)- 테스트
chore (maintain) - 잡일(기타..)
```

<br/>

## 커밋 형식 설명

- `type` : 커밋 타입
- `scope` : 커밋이 변경된 위치 작성
  - 함수 변경되면 함수이름, 메서드 추가 및 클래스 이름이 될 수도 있음
- `subject` : 명령형, 현재형 언어 사용. 커밋 주제
- `body` : 변경된 부분 설명 및 이전 행동과 대조
- `footer` : 주요 변경사항은 참고 사항이랑 footer에 언급필요
  <br/>

## 커밋 예시

```md
Feat(PlusFunction): 덧셈 기능 구현

숫자(integer) 2개를 입력으로 받아 두 숫자의 합(integer)을 출력하는 함수 작성

3번째 커밋 - 덧셈 기능 구현
```

<br/>

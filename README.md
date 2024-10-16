# 미션 - 문자열 덧셈 계산기

## 디렉토리 구조

```
javascript-calculator-7
├─ .gitignore
├─ README.md -> 구현 기능 목록, 문제 해결 과정, 참고 자료
├─ __tests__
│  └─ ApplicationTest.js
├─ package-lock.json
├─ package.json
└─ src
   ├─ App.js -> 계산을 진행하는 모듈
   └─ index.js -> 계산을 진행하는 모듈을 호출하는 메인 모듈
```

## 구현 기능 목록

- [x] 문자열 덧셈 계산기 저장소 포크
- [x] 원격 저장소에 포크한 거 로컬 저장소에 클론
- [x] 브랜치 생성
- [x] **기능을 구현하기 전 `README.md`에 구현할 기능 목록을 정리**해 추가
- [x] Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가
- [x] 문자열 입력받기
- 구분자 추가하기
  - [x] 기본 구분자: 쉼표(,) 또는 콜론(:)
  - [x] 커스텀 구분자: 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용
    - . 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- [x] 구분자를 기준으로 분리하기
- [x] 분리한 문자를 숫자로 변환
- [x] 분리한 문자들 숫자 맞는지 확인
- [x] 각 숫자의 합을 반환한다.
  1. 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 예외처리: 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.
  - [x] 양수여야 함: - 들어가면 에러
  - [x] 기본+커스텀 구분자에 없는 문자가 문자열에 있으면 에러
  - [x] 빈문자열: 0이 아니라 에러
  - [ ] 구분자로 끝나는 문자열: 뒤에 수가 없으므로 에러
  - [x] 커스텀 구분자만 있는 문자열: 빈문자열과 똑같으므로 에러
  - [x] 커스텀 구분자가 기본 구분자가 연속된 것이면 제대로 처리 되지 않음
    - ex //,,\n1,,2 -> [1,2] 여야 하는데 [1,0,2] 로 됨
    - 해결 방안: 커스텀 구분자가 먼저 처리되도록 함
- 추가 고민 사항
- 커스텀 구분자가 :: 같이 2개 이상의 문자로 이루어져 있으면 어떻게 할지?
- 특수문자 ex) “//” , “\\n” 입력 가능하게 하려면 어떻게 해야할지?
  1. 맥과 윈도우는 특수 문자 입력이 다른지?
  2. 만약 다르다면 다른 환경에서도 같은 결과가 나오게끔 어떻게 할지?

## 참고 자료

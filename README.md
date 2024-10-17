# **문자열 덧셈 계산기**

# 📌 과제 진행 요구 사항

- 미션은 문자열 덧셈 계산기 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
  - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

# 📝 구현할 기능 목록

- [x] 1. 사용자 입력 받기

  - Console.readLineAsync를 사용하여 사용자 입력 받기

- [x] 2. 기본 구분자 처리

  - 쉼표(,)와 콜론(:)을 기본 구분자로 인식
  - 빈 문자열 입력 처리 (결과: 0)

- [x] 3. 예외 케이스 처리

  - 음수 입력 시 에러 처리
  - 숫자가 아닌 입력 시 에러 처리
  - delimiter가 연속적으로 오는 경우 에러 처리
  - delimiter로 끝나는 경우 에러 처리
  - "[ERROR]" 접두사를 가진 에러 메시지 생성

- [ ] 4. 커스텀 구분자 처리

  - "//"로 시작하고 "\n"으로 끝나는 부분에서 커스텀 구분자 추출
  - 커스텀 구분자를 포함한 구분자 목록 생성

- [ ] 5. 문자열 분리 및 숫자 변환

  - 구분자(delimiter)를 기준으로 문자열(input) 분리
  - 각 부분을 숫자로 변환

- [ ] 6. 숫자 합계 계산

  - 변환된 숫자들의 합계 계산

- [ ] 7. 테스트코드 추가

# 📋 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항

### 입력

구분자와 양수로 구성된 문자열

### 출력

덧셈 결과

```
결과 : 6
```

### 실행 결과 예시

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

# 🔍 프로그래밍 요구 사항

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

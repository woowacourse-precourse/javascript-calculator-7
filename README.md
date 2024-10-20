# javascript-calculator-precourse

## 과제 진행 요구 사항

- 문자열 덧셈 계산기 저장소를 포크하고 클론한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
- AngularJs Git Commit Message Conventions을 따른다.
  - 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 기능 요구 사항
### 이 애플리케이션은 입력한 문자열에서 숫자를 추출하여 더하는 계산기이다.
- 사용자로부터 문자열을 입력받는다.
  - 입력에 공백이 존재한다면 `[ERROR]`로 시작되는 오류 메시지와 함께 `ERROR`를 발생시킨 후 애플리케이션은 종료된다.
  - 입력 값이 빈 문자열인 경우 0을 출력한다.
- 쉼표와 클론을 구분자로 사용하여 숫자를 추출하고 더한 값을 출력한다.
- 문자열이 `//`로 시작하고 `\n`로 끝나는 경우, `//`과 `\n` 사이에 위치한 문자를 커스텀 구분자로 사용한다.
  - 여러 개의 커스텀 구분자가 존재할 수 있다.
  - 문자가 아닌 숫자가 커스텀 구분자로 입력된 경우 잘못된 입력으로 간주한다.
- 사용자가 잘못된 값을 입력한 경우 `"[ERROR]"`로 시작되는 오류 메시지와 함께 `ERROR`를 발생시킨 후 애플리케이션은 종료된다.



## 프로그래밍 요구 사항
- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.
- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.
    - 사용자의 값을 입력 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.
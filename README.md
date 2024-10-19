# javascript-calculator-precourse
# javascript-calculator-precourse
## 과제 진행 요구 사항
- 미션은 문자열 덧셈 계산기 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 **```README.md```에 구현할 기능 목록을 정리**해 추가한다.
- Git의 커밋 단위는 앞 단계에서 ```READNE.md```에 정리한 기능 목록 단위로 추가한다.
  - [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 기능 요구 사항
입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
### 입출력 요구 사항
**입력**


- 구분자와 양수로 구성된 문자열


**출력**

- 덧셈 결과
```
결과 : 6
```

**실행 결과 예시**

    덧셈할 문자열을 입력해 주세요.
    1,2:3
    결과 : 6

## 프로그래밍 요구 사항
- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- ```package.json``` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 ```process.exit()```를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙으로 한다.

## 시작 순서
1. 프로젝트를 자신의 계정으로 fork 하기
2. fork한 저장소를 자신의 컴퓨터로 clone하기
```
https://github.com/minwoonggi/javascript-calculator-7.git
```
3. 기능 구현을 위한 브랜치 생성
```
git checkout -b minwoonggi
```
4. 통합 개발환경(IDE)으로 가져오기
vscode로 시작
5. 기능 구현

#### 구현할 기능 목록
-  feat: ','와':'을 구분자로 가지는 문자열의 숫자의 합 반환하는 기능
-  feat: 커스텀 구분자 기준으로 숫자의 합 반환하는 기능
-  feat: 예외는 전부 ERROR 처리하는 기능

6. 기능 구현 후 add, commit
```
git status // 변경된 파일 확인
git add -A(또는 .) // 변경된 전체 파일을 한번에 반영
git commit -m "메시지" // 작업한 내용을 메시지에 기록
```
7. 본인 원격 저장소에 올리기
```
git push origin minwoonggi
```
8. gitgub 서비스에서 Pull Request를 보낸다.
- 브라우저에서 github 저장소에 접근
- 브랜치를 작업 브랜치로 변경
- 브랜치 오른쪽에 있는 "New Pull request" 버튼을 클릭
- Pull Request 제목은 ```[$미션제목] $이름 미션 제출합니다.``` 형식
- 작업한 내용을 입력하고 "Create pull request" 버튼을 클릭하여 마무리

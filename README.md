# javascript-calculator-precourse

## 목차

1. [프로젝트 환경 설정 과정](#프로젝트-환경-설정-과정)
2. [요구 사항](#요구-사항)
3. [구현할 기능 목록](#구현할-기능-목록)
4. [테스트 CLI](#jest-cli-options)

## 프로젝트 환경 설정 과정

`npm install` 실행에서 발생한 오류, `Error 404, not found npm package (npm install error)`

### 상황

```bash
npm warn tarball tarball data for @jest/expect@https://npm.pkg.github.com/@jest/expect/-/expect-29.7.0.tgz (sha512-8uMeAMycttpva3P1lBHB8VciS9V0XAr3GymPpipdyQXbBcuhkLQOSe8E/p92RyAdToS6ZD1tFkX+CkhoECE0dQ==) seems to be corrupted. Trying again.

.....etc

npm error code E404
npm error 404 Not Found - GET https://npm.pkg.github.com/yocto-queue/-/yocto-queue-0.1.0.tgz
npm error 404
npm error 404  'yocto-queue@https://npm.pkg.github.com/yocto-queue/-/yocto-queue-0.1.0.tgz' is not in this registry.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
```

### 원인

- npm에 registry가 설정되지 않아서 발생한 오류입니다.
- 권한(Auth) 관련 오류 메시지가 없기 때문에 private npm package가 아닌, public npm package에 대한 오류일 가능성이 높습니다.
- 공개된 npm의 registry는 `https://registry.npmjs.org/`입니다. (`...org/`의 마지막 문자 `/`에 유의, `/`를 포함하지 않는 경우 오류가 생길 수 있음)

### 해결

다음 3가지 방법 중 하나를 시도해 볼 수 있습니다.

- `npm install`을 실행할 때, `--registry`옵션을 포함시킨다

```bash
// terminal
npm install --registry https://registry.npmjs.org/
```

- npm의 기본 registry를 미리 설정한 뒤, `npm install`을 실행한다

```bash
// terminal
npm config set registry https://registry.npmjs.org/
npm install
```

- `.npmrc` 파일에 registry를 선언한다

```bash
// .npmrc
registry=https://registry.npmjs.org/

// terminal
npm install
```

## 요구 사항

### 요구 사항 정리

```
1. 입력값: `구분자`와 `양수`로 구성된 문자열

2. 기본 구분자: 쉼표(,)와 콜론(:)

2. 기본 구분자를 가지는 문자열을 받으면, 구분자를 기준으로 양옆의 숫자를 합한 값을 출력할 것
- "" => 0
- "1,2" => 3
- "1,2:3" => 6

3. 커스텀 구분자: 문자열 앞부분에 위치하는 "//"와 "\n" 사이의 문자
- "//;\n1;2;3" => 6
  ㄴ 커스텀 구분자: 세미콜론(;)

4. 사용자가 잘못된 값을 입력하면, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 종료할 것

4-1. 잘못된 Case
- ",2,3,": 가능한 구분자가 문자열의 좌측 또는 우측에 있는 경우
- "2,,3": 가능한 구분자가 연속되는 경우
- ",": 구분자만 있는 경우
- "3*4*5": 커스텀 구분자가 없는데, 기본 구분자로 구성되지 않은 경우
- "-1,2": 음수가 포함된 경우

4-2. 가능한 Case
- "//o\n1;2o3": 커스텀 구분자가 있는데, 기본 구분자도 있는 경우
  ㄴ (2)에서 쉼표와 콜론을 동시에 사용할 수 있으므로, 커스텀 구분자도 혼용 가능하다고 보겠습니다
- "//o\n1;2;3": 커스텀 구분자가 있지만, 기본 구분자만 있는 경우
- "//o\n//x\n1o2x3": 커스텀 구분자가 연속되는 경우
```

### 과제 진행 요구 사항

- [x] 미션은 문자열 덧셈 계산기 저장소를 포크하고 클론하는 것으로 시작한다.
- [x] 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- [x] Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
- > [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.

### 구현할 기능 목록

- 기본 구분자를 가진 문자열의 덧셈
- 커스텀 구분자를 가진 문자열의 덧셈
- 잘못된 입력을 받으면, "[ERROR]"로 시작되는 메시지와 함께 ERROR 발생

### 실행 예시

- 입력 : 구분자로 구성된 문자열

```
1,2:3
```

- 출력 : "결과 : " + 덧셈 결과

```
결과 : 6
```

- 실행 예시

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

### 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- > 기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/blob/main/styleguide/javascript/README.md#javascript-style-guide)를 원칙으로 한다.

#### 라이브러리

`@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.  
사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

## Jest CLI Options

- `--detectOpenHandles`: 비동기 작업이 완료되지 않은 테스트 감지
- `--runInBand`: 순차적으로 테스트 실행
- `--coverage`: 코드 커버리지 정보
- `--verbose`: 세부 테스트까지 모두 표시

```
// package.json
"scripts": {
  "start": "node src/index.js",
  "test": "jest --detectOpenHandles --verbose" // 예시
}
```

# javascript-calculator-precourse

---
# 기능 명세

## 입력 기능

@woowacourse/mission-utils에서 제공하는 Console API를 활용하여 입출력을 구현
- 문자열 입력 : Console.readLineAsync
- 문자열 출력 : Console.print

## 구분자 기준 숫자 분리

문자열 ',',':'을 구분자로 하여 숫자 분리
- 구분자로 사용될 문자열을 배열로 관리하여 이후 확장성을 고려

## 커스텀 구분자 추가

사용자 입력 시 '//'와 '\n' 사이에 위치하는 문자를 커스텀 구분자로 사용
- 여러 개의 커스텀 구분자를 처리할 수 있도록 고려

---
# 1주차 과제 분석하기

## 폴더 구조
> 어떤 파일이 들어있는지 확인해 봅시다
### 1. _ _tests__ 폴더
- 이곳엔 잘 작성되어 있는 테스트 코드들이 들어가 있다. 나중에 테스트를 할 때 jest를 활용할 예정이다.

### 2. src 폴더
- 이곳은 앞으로 작성할 코드가 들어갈 예정이다.
    ```
    // package.json
    "scripts": {
        "start": "node src/index.js",
        "test": "jest --detectOpenHandles"
    },
    ```
    ```
    npm run start
    ```
    위의 명령어를 터미널에 입력하면 index.js에서 App.js 불러오는 구조이다.

    ```
    import App from "./App.js";

    const app = new App();
    await app.run();
    ```

    🤔 왜 await로 불러올까?
  
    -> App.js에서 run이 비동기 함수로 구현이 되어 있는데 사용자로부터 입력을 받는 기능 등을 구현해야 해서 그런 것 같다.

### 3. .gitignore
- 이 파일은 git에 올라가지 않도록 설정을 해두는 파일이다. 

### 4. .npmrc
```
engine-strict=true
```
프로젝트 내의 Node, npm의 버전을 엄격하게 관리한다는 뜻의 코드가 적혀있다.

각각의 버전을 지키는 것이 중요하다는 것을 보여주는 의도이다.
```
  // package.json
  "engines": {
    "npm": ">=10.8.2",
    "node": ">=20.17.0"
  }
```
개발 환경은 다음과 같이 설정했다.

node : v21.6.2

npm : v10.9.0

### 5. package.json

패키지 관련 설정을 하다가 테스트를 하기 위해 jest를 재설치했는데 jest@29.7.0 버전이 설치되었다. 

프로그래밍 요구 사항에서는 package.json 파일은 변경할 수 없다고 나와있기 때문에 이를 명확히 지키기 위해 지우고 jest@29.6.0 버전을 설치해줬다.

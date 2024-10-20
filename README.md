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

## 예외 처리

사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료

### 사용자의 의도를 해치는 경우
```
# 공백 문자열
// \n1 2 3
-> 6
공백 문자열은 문자열

# 빈 문자열이 들어오는 경우
//\n123
-> 에러

# 숫자가 구분자로 들어오는 경우
//1\n21212
-> 에러
```

```
# 소숫점 처리
1,1.1
-> 2.1

# 소수가 들어갔는데 구분자가 . 인경우
//.\n1,2.1
-> 에러
```

### 큰 숫자
```
# 10000000000000000000000000000000과 같이 큰 숫자가 들어오는 경우
-> bigInt 타입으로 구분하며 그 이상 숫자로 들어올 시 문자열 return
```

### NaN
```
# 구분자를 중간에 입력하는 경우
//;\n1;2\n//;\n3;4
-> 에러

# 숫자가 아니라 문자가 있는 경우
//;\n1;a;2
-> 에러
```

### 음수
```
# -가 구분자로 들어오는 경우
//-\n1-1,2
-> 4 
문제에서는 양수만 입력으로 들어옴

# 양수처리
//-\n1--1,2
//-\n1--2-3
//-\n12-34-56
-> 에러
음수가 return 되는 경우는 에러 반환

# 문자랑 숫자가 섞여 있는 경우
//a1b\n1a1b1
-> 2
```
### 연속으로 구분자 입력
```
# 연속으로 구분자가 나타나면 에러
//-\n1--2-3
-> 에러
```
### 터미널에서 입력된 문자는 그 문자 그대로 사용되는 경우
```
# '''과 같은 주석처리하는 문자가 들어오는 경우
//'''\n1'''1

# 구분자가 \\n으로 들어오는 경우
//\\n\n1\\n2
-> 에러

# 구분자가 \n으로 들어오는 경우
//\n\n1\n2

# 사용자가 직접 엔터쳐서 입력하는 경우
//
\n1
2
3

# 구분자가 \로 들어오는 경우
//\\n1\2
```

터미널에서 입력된 문자는 그 문자 그대로 사용이 된다.

https://cloudaffle.com/series/how-shell-receives-inputs/escaping-special-characters/

> 따라서 이스케이프 문자에 대해서 처리를 별도로 해주지 않아도 될 것 같다.
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

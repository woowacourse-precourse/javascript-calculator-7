# javascript-calculator-precourse

## 🔍 미션 요구 사항

- [x] 출력 메시지 구현
- [x] 사용자가 입력할 부분 구현
- [x] 결과 출력 메시지 구현
- [x] 쉼표가 구분되도록 구현
- [ ] 콜론이 구분되도록 구현
- [ ] 잘못된 값 입력 시 Error 구현

<br><br>

## 🎈 요구 사항 구현

### 출력 메시지 구현

1. `@woowacourse/mission-utils`를 활용하기 위해 `npm i`를 해야합니다.
2. `npm -v`를 통해 npm의 버전을 확인하고, API를 활용하기에 부적합하다면 업데이트 합니다.
3. `node -v`를 통해 node의 버전을 확인하고, API를 활용하기에 부적합하다면 업데이트 합니다.
4. `npm i`를 통해 Console API를 설치합니다.
5. `Console.print("덧셈할 문자열을 입력해 주세요.");`를 입력하여 출력 메시지를 구현합니다.
   <br><br>

### 사용자가 입력할 부분 구현

1. `Console.readLineAsync`의 입력된 값은 `then`으로 출력해야합니다.
2. `Console.print` 대신 `Console.readLineAsync`의 요구 사항 메시지를 넣습니다.
3. `.then`을 통해 `readLineAsync`에서 입력받은 결과를 확인합니다.
   <br><br>

### 사용자가 입력할 부분 구현

1. `Console.readLineAsync`의 줄바꿈 문자를 추가하여 입력 받는 위치 변경합니다.
2. `Console.print` 에 `+`를 넣어서 결과 창을 구현합니다.
   <br><br>

### 쉼표가 구분되도록 구현

1. `separated`라는 변수의 함수의 매개변수를 `input`으로 지정합니다.
2. `split(",")`를 통해 문자열(string)을 쉼표(,)를 기준으로 분리합니다.
3. 출력을 통해 분리된 결과를 확인합니다.
   <br><br>

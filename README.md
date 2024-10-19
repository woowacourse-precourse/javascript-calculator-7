# javascript-calculator-precourse

## 실행 화면

<img width="269" alt="image" src="https://github.com/user-attachments/assets/9f585b4d-b532-40ae-9397-0fd583f73ba4">

<img width="255" alt="image" src="https://github.com/user-attachments/assets/9a282e70-2568-4ce3-8c52-496012bcf7ec">

<img width="897" alt="image" src="https://github.com/user-attachments/assets/1f84a46d-e06a-43d4-8ef8-838be0e93d5a">

## 기능 목록

- [x] 커스텀 구분자를 판별하는 기능
  - 커스텀 구분자의 경우, 정규표현식으로 검출할 수 있을 것으로 보임
- [x] 구분자 단위로 문자열을 분리하는 기능
  - 커스텀 구분자가 있을 경우 구분자를 커스텀 구분자로 지정
    - 문제에서 `앞의 기본 구분자 외에`라고 서술해 놓았으므로, 구분자 목록에 커스텀 구분자를 추가하는것으로 보아야 할 듯
    - `//` 부터 `\n`까지의 값을 커스텀 구분자로 지정하는데, 해당 값은 `0-9`까지의 숫자는 불가능하도록 설정, 여러 문자로 이루어져있어도 가능하도록 설정
    - 커스텀 구분자의 경우 사용자 입장에서 고려해 보았을 때 최대 길이는 `2`로 지정한다.
- [x] 잘못된 값을 입력했을 경우 에러를 발생시키고 프로그램을 종료하는 기능
  - 에러 메시지는 `[ERROR]`로 시작해야한다
  - 에러는 커스텀 에러를 사용하면 로직의 중복을 최소화할 수 있을 것으로 보임
  - 주어진 입력 양식과 일치하지 않을 경우 에러 처리한다.

## ETC

- [x] 테스트로직 추가 작성 필요

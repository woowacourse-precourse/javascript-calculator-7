# javascript-calculator-precourse

## 구현 기능 목록

- [x] **입력 값 처리**
  - 사용자가 입력한 문자열을 받는다.

- [x] **커스텀 구분자 처리**
  - 입력한 문자열에 커스텀 구분자 ("//"와 "\n" 사이의 구분자)이 포함된 경우, 커스텀 구분자를 추출해 임시로 저장한다.

- [x] **커스텀 구분자 적용**
  - 임시로 저장한 커스텀 구분자를 사용해서 입력된 값을 분리한다.

- [ ] **기본 구분자 처리**
  - 커스텀 구분자가 없을 경우, 쉼표(`,`)와 콜론(`:`)을 기본 구분자로 사용하여 입력 값을 분리한다.

- [ ] **유효하지 않은 구분자 처리**
  - 등록된 구분자 (기본 또는 커스텀)가 없으면 에러를 발생시키고 프로그램을 종료한다.

- [ ] **숫자 검증**
  - 구분자를 사용해 분리된 값이 숫자인지 확인한다.
  - 숫자가 아닌 값이 있으면 에러를 발생시키고 프로그램을 종료한다.

- [ ] **값 계산**
  - 분리된 숫자들을 더한 값을 출력한다.

- [ ] **프로그램 종료**
  - 정상적으로 결과를 출력한 후 프로그램을 종료한다.

기능 모두 구현이 완료 됐으면 refactoring 진행
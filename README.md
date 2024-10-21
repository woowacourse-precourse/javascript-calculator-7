# javascript-calculator-precourse

# 구현할 기능 목록

1. ,와 :를 구분자 배열 separator 에 넣어둔다.

2. 문자열이 // 로 시작한다면 뒤에 \n이 확인 후 구분자 배열 separators 에 추가한다.

3. Separators 배열을 **정규식**으로 변환 후 **split**을 통해 매칭되는 항목을 쪼개어 배열로 반환한다.

4. 반환된 숫자들의 합을 결과로 출력한다.

# 예외 처리

1. 사용자 입력이 빈 문자열인 경우 <span style='background-color:#ffdce0; color:#000000;'> Error 발생</span>

2. 입력값에 공백이 있는경우 공백 제거

3. `구현2` 에서 // 로 시작하지만 뒤에 \n이 없다면 <span style='background-color:#ffdce0; color:#000000;'> Error 발생</span>

4. 반환 값이 양의 정수가 아니라면 <span style='background-color:#ffdce0; color:#000000;'> Error 발생</span>

5. 반환 값에 숫자가 없는 경우 <span style='background-color:#ffdce0; color:#000000;'> Error 발생</span>

6. 커스텀 구분자가 단일 문자가 아닌 경우 <span style='background-color:#ffdce0; color:#000000;'> Error 발생</span>

위 목록을 기본 구현으로 두고 진행하면서 추가적인 예외처리를 추가하며 리팩토링 할 예정이다.

# javascript-calculator-precourse

### 구현할 기능 목록

1. 사용자에게 문자열 입력 받기

2. 문자열에 커스텀 구분자 추출

   match와 정규식을 사용하여 "//"와"\n" 사이의 문자 추출

3. 구분자를 기준으로 분리한 각 숫자의 합을 반환

   커스텀 구분자가 있다면 문자열의 "//"와"\n" 사이를 replace로 없애고 split으로 나누기

   커스텀 구분자가 없다면 split을 이용하여 나누기

   나온 배열을 forEach로 순회하며 양수가 아니면 [ERROR] 양수면 합하기

   다 끝나면 출력

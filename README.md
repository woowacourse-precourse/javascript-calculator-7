# 문자열 덧셈 계산기🧮 
---
숫자를 추출하여 더하는 계산기
<br>
<br>

---
## 기능
###  문자열 입력 받기
  - “덧셈할 문자열을 입력해 주세요.”출력
<br>

### 커스텀 구분자 지정
- 문자열 앞부분에 ”//”+“N”+“\n”가 포함되어 있다면 “N”을 커스텀 
    구분자로 지정 
  - 예시) “//#\n1#2,3” => 커스텀 구분자 : “#”
- 커스텀 구분자 지정문을 제외한 문자열을 저장
  - 예시) “//#\n1#2,3” 문자열 : “1#2,3”
<br>

### 예외 처리
- 문자열이 올바르지 않을 경우 Error 발생 후 프로그램 종료
- “[ERROR] 올바른 값을 입력해 주세요.“ 출력
- 올바르지 않은 문자열
  - 기본/커스텀 구분자를 제외한 문자가 포함된 경우(예: 8ㅅ8, =^3^=)
  - 커스텀 구분자가 한 글자 이상인 경우(예: //hi123\n)
  - 커스텀 구분자를 여러 번 지정한 경우(예: //a\n//b\n)
<br>

### 문자열에서 숫자를 추출
- 문자열에서 숫자를 추출하여 배열 형태로 저장
  - 예시) “1,2,3” => [1,2,3], “4$56” => [4,56]
<br>

### 합 계산 덧셈 계산기🧮 
---
숫자를 추출하여 더하는 계산기
<br>
<br>

---
## 기능
###  문자열 입력 받기
  - “덧셈할 문자열을 입력해 주세요.”출력
<br>

### 커스텀 구분자 지정
- 문자열 앞부분에 ”//”+“N”+“\n”가 포함되어 있다면 “N”을 커스텀 
    구분자로 지정 
  - 예시) “//#\n1#2,3” => 커스텀 구분자 : “#”
- 커스텀 구분자 지정문을 제외한 문자열을 저장
  - 예시) “//#\n1#2,3” 문자열 : “1#2,3”
<br>

### 예외 처리
- 문자열이 올바르지 않을 경우 Error 발생 후 프로그램 종료
- “[ERROR] 올바른 값을 입력해 주세요.“ 출력
- 올바르지 않은 문자열
  - 기본/커스텀 구분자를 제외한 문자가 포함된 경우(예: 8ㅅ8, =^3^=)
  - 커스텀 구분자가 한 글자 이상인 경우(예: //hi123\n)
  - 커스텀 구분자를 여러 번 지정한 경우(예: //a\n//b\n)
<br>

### 문자열에서 숫자를 추출
- 문자열에서 숫자를 추출하여 배열 형태로 저장
  - 예시) “1,2,3” => [1,2,3], “4$56” => [4,56]
<br>

### 합 계산
- 각 요소의 합 계산
   - 예시)[1,2,3] => 6
   - 빈 배열일 경우 0
<br>

### 결과 반환
 - “결과 : N” 출력

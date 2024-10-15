# javascript-calculator-precourse

## 🚀 구현할 기능 목록
- **사용자로부터 문자열 입력 (Console.readLineAsync()를 사용)**
    - 커스텀 구분자가 있는가?
      - O : 커스텀 구분자가 1개인지 확인 → 1개일 경우 커스텀 구분자로 split, 아닐 경우 오류 출력
      - X : 일반 구분자로 split한다
        
- **커스텀 구분자 split**
    - //, \n 사이의 커스텀 문자열 인식
    - **split 후 연산 전 오류 검증** 필요
      
- **일반 구분자 split**
    - 쉼표 및 세미콜론을 기준으로 split한다
    - **split 후 연산 전 오류 검증** 필요
      
- **split 후 연산 전 오류 검증** : 일반 구분자 split 시 split된 값들의 형식이 Numbers가 아닐 경우 → 오류 출력
  
- **구분된 숫자 연산**
    - split된 문자들 Number 형변환
    - 형변환 후의 숫자들의 합 구하기
      
- **사용자에게 연산 결과 출력 (Console.Print()를 사용)**
  - 연산된 결과를 터미널에 출력

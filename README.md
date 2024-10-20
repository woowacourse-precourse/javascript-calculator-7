# javascript-calculator-precourse

## 출력 형식

# 입력: '구분자'와 '양수'로 구성된 문자열
# 출력: 문자열의 덧셈 결과

# 실행 결과에서 출력되어야 할 문장:
  덧셈할 문자열을 입력해 주세요.
  "{입력된 문자열}"
  결과 : "{문자열 덧셈 결과}"


## 기능 요구 사항_필수조건 ##
- [x] 문자열로 입력 받기
- [x] 기본 구분자 외에 커스텀 구분자를 등록
      - //과 \n으로 감싸진 부분을 커스텀 구분자로 등록
- [x] 잘못된 입력 시에 "[ERROR]" 메시지와 함께 종료
      - 잘못된 입력에 해당하는 경우를 찾아 모두 예외 처리
        1. 빈 문자열을 입력한 경우 
        2. 커스텀 구분자 형식(//"{커스텀 구분자}"\n) 형태가 아닌 경우
        3. 커스텀 구분자 형식은 맞으나 커스텀 구분자를 입력하지 않은 경우
        4. 음수 값을 입력한 경우(양수 조건 위반)
        5. 입력한 숫자가 없을 경우 
        6. 숫자 이외의 문자를 입력한 경우
        - 예외 처리해야할 경우가 생각보다 많아, 함수 호출로 통합하여 코드를 간결하게 표기하고자 함.
- [x] 입력 받은 문자열에서 양수와 등록된 구분자만 추출
- [x] 구분자를 기준으로 문자열을 분리하여 배열로 종합
- [x] 종합된 배열의 원소들을 전부 더해서 결과로 저장 

## 추가 기능 사항 ##
- [ ] 계산을 1회로 끝내지 않고 계속할지 여부에 따라 계산을 종료
      - 반복문으로 조건을 제시하여 계산을 반복
      - y / n로 게산 반복 여부를 결정 
- [ ] 계산을 2회 이상 수행한 경우 기록을 저장하여 제공
    - 계산을 수행한 기록을 저장
    - 계산 내역을 출력
      1. 계산 기록이 없는 경우
      2. 게산 기록이 있는 경우
    # 계산을 반복하도록 설정하여 계산 내역을 계속해서 저장하도록 코드를 작성하려 했지만, 
    # 미션의 잘못된 값에 [ERROR]로 예외처리하는 부분의 조건과 동시에 부합하도록 작성하는데 실패.
    # 시간상의 이유로 제출 이후 이부분을 다시 확인해봐야할 필요가 있음.

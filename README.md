# **미션 - 문자열 덧셈 계산기**

## **기능 구현 목록**

+ 사용자 입력 받기
+ 입력 값이 유효값인지 확인
    + 숫자가 있는지 확인
    + 숫자 2개 이상일시 쉼표(**,**), 콜론(**:**)이 있는지 확인
    + 쉼표, 콜론 외에 다른 구분자가 있을시 "//"와 "\n"가 있는지 확인
    + "//"와 "\n"사이에 구분자와 숫자 사이에 있는 구분자가 같은지 확인
    + 조건에 만족하지 않을시 ERROR
+ 계산하기
    + 구분자를 제외하고 숫자들 덧셈
    + 커스텀 구분자일 경우 "//"와 "\n"와 커스텀 구분자를 제외하고 숫자들 덧셈
* 결과 출력
    + 덧셈 결과 출력
    + 입력 값이 유효값이 아닐 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료
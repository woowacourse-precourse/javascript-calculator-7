<p align="center">
    <img src="./logo_full_light.png" alt="우아한테크코스" width="250px">
</p>

# 프리코스 1주차 미션 - 문자열 덧셈 계산기

---

![Generic badge](https://img.shields.io/badge/precourse-week1-green.svg)
![Generic badge](https://img.shields.io/badge/test-2_passed-blue.svg)

> 우아한테크코스 7기 1주차 미션, 문자열 덧셈 계산기를 구현한 저장소입니다.

<br>

# 목차

- [시작하기](#시작하기)
- [기능 요구사항](#기능-요구사항)
    - [1. 사용자 입력](#1-사용자-입력)
    - [2. 입력 구분자 처리](#2-입력-구분자-처리)
    - [3. 계산 수행](#3-계산-수행)
    - [4. 결과 출력](#4-결과-출력)
- [프로그래밍 및 과제 진행 요구사항](#프로그래밍-및-과제-진행-요구사항)
      
## 시작하기
레포지토리를 Clone 하고 IDE에서 애플리케이션을 실행합니다.

```git
git clone -b as --single-branch https://github.com/yiju1755/javascript-calculator-7
```

## 기능 요구사항

### 1. 사용자 입력
- [ ] 사용자에게 계산할 구분자가 포함된 양수 문자열을 입력받기 (예: "//;\n1;2;3")
- [ ] 입력받은 문자열에 구분자가 포함된 양수 외의 숫자(음수), 문자가 포함될 경우, "[ERROR]"로 시작하는 오류 메시지를 출력하고 강제 종료하기

### 2. 입력 구분자 처리
- [ ] 입력 문자열에서 구분자를 추출하기
  - [ ] 기본 구분자는 쉼표(,)와 콜론(:)으로 설정한다.
  - [ ] 커스텀 구분자는 문자열의 앞부분에 위치한 "//"와 "\n" 사이에 있는 문자를 사용한다.

### 3. 계산 수행
- [ ] 입력된 숫자들을 덧셈하여 결과를 계산하기

### 4. 결과 출력
- [ ] 계산 결과를 화면에 출력하기

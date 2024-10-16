# 구현 기능 목록

## 1. Util

#### 1.1 어떤 역할을 하나요?

개발 과정에서 필요한 함수들을 분리하여 관리하기 위한 디렉토리입니다.

#### 1.2 어떤 기능을 포함하나요?

- 사용자로부터 구분자를 입력받아 리턴하는 함수
- 구분자를 기준으로 입력 값들을 summation하는 함수

## 2. Validte

#### 2.1. 왜 필요한가요?

사용자의 입력에 대하여 유효성을 판단하기 위한 기능들을 정리한 디렉토리입니다.

#### 2.2. 어떤 기능을 포함하나요?

- Input이 유효한 값인지 판단하여 결과를 리턴하는 함수
  - 커스텀 구분자를 정의하는 형식이 올바른지 판단
  - 연산이 가능한 숫자가 제대로 입력이 되었는지 판단

## 3. ViewConstant

#### 3.1. 왜 필요한가요?

사용자와의 인터렉션 과정에서 화면에 보여주기 위한 요소들을 저장하는 디렉토리입니다.

#### 3.2. 어떤 기능을 포함하나요?

- 입출력을 진행하기 위한 메세지를 포함합니다.
- \[ERROR\]메세지도 여기에 포함됩니다.

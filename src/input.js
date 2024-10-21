import { Console, MissionUtils } from "@woowacourse/mission-utils";

let savedUsername; // 전역 변수 선언

export async function getUsername() {
  try{
    const input = await Console.readLineAsync('숫자만 입력해주세요:');
    if (isNaN(input) || input.trim() === '') {
      throw new Error('유효한 숫자가 아닙니다.');
    }
    savedUsername = input; // 전역 변수에 저장
    console.log('입력된 숫자:', savedUsername);
    return savedUsername;
    
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}




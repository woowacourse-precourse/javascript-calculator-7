import { runCalculator } from './Calculator.js';

// App의 실행 여부를 관리하기 위한 변수
let hasRun = false;

export const run = async () => {
  // 이미 실행된 경우, 중복 실행 방지
  if (hasRun) return;
  hasRun = true; // 첫 실행 시 플래그 설정
  console.log('App instance created');

  // Calculator 실행
  await runCalculator();
};
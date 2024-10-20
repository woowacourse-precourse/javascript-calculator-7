import { StrCalcuLator } from "../components/index.js";
import { inputStr } from "./uiMethod.js";

export default async function createStr() {
  const inputStrs = await inputStr(); 
  const calculator = new StrCalcuLator(inputStrs);
  return calculator;
}
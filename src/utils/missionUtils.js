import { MissionUtils } from "@woowacourse/mission-utils";

export async function userInput(string) {
	let returnValue;
	try {
		returnValue = await MissionUtils.Console.readLineAsync(string);
	} catch (error) {
		console.error(error);
		throw error;
	}
	return returnValue;
}

export function printOutput(string) {
	return MissionUtils.Console.print(string);
}

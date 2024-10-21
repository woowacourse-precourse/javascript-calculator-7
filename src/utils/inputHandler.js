import {INPUT_MESSAGE} from "../constants/message.js";

export async function getInput(Console) {
    return await Console.readLineAsync(INPUT_MESSAGE);
}
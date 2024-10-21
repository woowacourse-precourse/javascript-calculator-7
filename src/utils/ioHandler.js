import { Console } from "@woowacourse/mission-utils"

async function input(message){
    return await Console.readLineAsync(message);
}

function print(message){
    Console.print(message);
}

export {input, print};
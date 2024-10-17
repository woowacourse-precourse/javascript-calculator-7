import { Console } from '@woowacourse/mission-utils'
import { INPUT_MESSAGE } from './constants/message.js'


export default class Input {
    async getInput(){
        const input = await Console.readLineAsync(`${INPUT_MESSAGE}`)

        return input
    }


}
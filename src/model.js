export default class Model{
    constructor() {
        this.stringValue = [
            {
                inputValue: '',
                numberList: []
            }
        ];
    }
    updateData(input){
        this.stringValue = input;
        this.numberList = [];
    }
}
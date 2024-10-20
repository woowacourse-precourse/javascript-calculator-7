export default class Model{
    constructor() {
        this.stringValue = [
            {
                inputValue: '',
                numberList: [],
                customSeparator: ''
            }
        ];
    }
    updateData(input){
        this.stringValue.inputValue = input;
        this.stringValue.numberList = [];
    }
}
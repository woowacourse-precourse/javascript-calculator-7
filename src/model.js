export default class Model{
    constructor() {
        this.stringValue = [
            {
                inputValue: ''
            }
        ];
    }
    updateData(args){
        this.stringValue = args;
    }
}
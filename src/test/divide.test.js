const { strTest } = require("../App");

test('쉼표와 콜론은 사라져', ()=> {
    expect(strTest("1,2:3")).toEqual(["1", "2", "3"]);
})
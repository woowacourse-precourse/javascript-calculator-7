import seperatorParser from "../src/SeperatorParser";

describe("SeperatorParser 테스트", () => {
    test("구분자에 숫자가 포함된 경우", async () => {
        const value = "//1q\\n11q21q3";
        const result = { words: "11q21q3", seperator: "1q" };
        await expect(seperatorParser.parseSeperator(value)).toEqual(result);
    });

    test("커스텀 구분자가 없는 경우", async () => {
        const value = "1,2,3";
        const result = { words: "1,2,3" };
        await expect(seperatorParser.parseSeperator(value)).toEqual(result);
    });
});

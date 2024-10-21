class App {
    async run(STR = "//,\n123:21,23") {
        let DIVIDER = /[,|:]/;
        let STR_NUMBERS = STR;

        if (STR === "") return 0;
        else if (STR.startsWith("//") && STR.indexOf("\n") !== -1) {
            DIVIDER = new RegExp(`[${STR[2]}]`);
            STR_NUMBERS = STR.slice(STR.indexOf("\n") + 1);
        }

        const NUMBERS = STR_NUMBERS.split(DIVIDER).map((NUM) => {
            const PARSENUM = Number(NUM);
            if (isNaN(PARSENUM)) {
                throw new Error("[ERROR]");
            }
        });
    }
}

export default App;

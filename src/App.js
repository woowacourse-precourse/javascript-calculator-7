class App {
    async run(STR = "//,\n123:21,23") {
        let DIVIDER = /[,|:]/;
        let STR_NUMBERS = STR;

        if (STR === "") return 0;
        else if (STR.startsWith("//") && STR.indexOf("\n") !== -1) {
            DIVIDER = new RegExp(`[${STR[2]}]`);
            STR_NUMBERS = STR.slice(STR.indexOf("\n") + 1);
            console.log(STR_NUMBERS);
            console.log(STR_NUMBERS.split(DIVIDER));
        }
        console.log(STR_NUMBERS.split(DIVIDER));
    }
}

export default App;

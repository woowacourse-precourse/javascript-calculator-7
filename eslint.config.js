export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module"
        },
        rules: {
            "quotes": ["error", "single"],
            "object-curly-spacing": ["error", "always"],
            "indent": ["error", 2],
            "max-len": ["error", { "code": 100 }],
            "wrap-iife": ["error", "outside"],
            "newline-before-return": "error",
            "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
        }
    }
];

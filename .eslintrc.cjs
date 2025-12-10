module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        // ⬇️ 여기만 추가하면 됨!
        "@typescript-eslint/no-unused-vars": [
            "warn", // ← 빨간줄 사라지고 노란줄만 표시됨
            {
                argsIgnorePattern: "^_", // _로 시작하는 매개변수는 무시
                varsIgnorePattern: "^_", // _로 시작하는 변수는 무시
            },
        ],
    },
};

module.exports = {
    "root": true,
    "parser": "@babel/eslint-parser",
    "plugins": [
        "react",
        "import"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/react",
        "plugin:import/recommended"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            },
            "babel-module": {
                "extensions": [".js", ".jsx"]
            }
        }
    },
    "reportUnusedDisableDirectives": true,
    "noInlineConfig": true
}
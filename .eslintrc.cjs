module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "es2021": true
  },
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "indent": [1, 2],
    "semi": [1, "always"],
  }
}

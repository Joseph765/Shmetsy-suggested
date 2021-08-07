module.exports = {
  extends: "prettier",
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
};

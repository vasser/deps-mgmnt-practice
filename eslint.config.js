import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    // env: {
    //   node: true,
    //   browser: true,
    //   commonjs: true,
    //   es6: true,
    // },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];

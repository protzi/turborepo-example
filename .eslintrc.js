module.exports = {
  root: true,
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: "error"
  }
};

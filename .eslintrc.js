module.exports = {
  "extends": ["eslint:recommended", "google"],
  "env": {
    // For more environments, see here: http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    "browser": true,
    "jquery": true,
    // "es6": true
  },
  "rules": {
    // Insert custom rules here
    "no-var": "off",
    "linebreak-style": 0
  },
  "globals": {
    "Sortable": true,
    "SimpleMDE": true
  }
}
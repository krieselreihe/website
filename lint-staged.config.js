"use strict";

module.exports = {
    "*.{js,md,json}": ["prettier --write", "git add"],
    "*.css": ["stylelint --fix", "git add"]
};

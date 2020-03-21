"use strict";

module.exports = {
  collectCoverage: true,
  coverageReporters: ["text"],
  modulePathIgnorePatterns: ["/.next/", "/out/"],
  reporters: ["jest-progress-bar-reporter"],
  verbose: false,
};

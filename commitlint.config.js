const ruleSeverity = {
  Disabled: 0,
  Warning: 1,
  Error: 2,
};

const issueTypes = [
  "feature",
  "hotfix",
  "bugfix",
  "release"
];

const projectPrefixes = [
  "RDCP",
  "SQ33CRPTO"
]

const config = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/parse"
  ],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)\/(\w*)-([0-9]*):\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
    },
  },
  rules: {
    "type-case": [ruleSeverity.Error, "always", "lower-case"],
    "type-enum": [ruleSeverity.Error, "always", issueTypes],
    "scope-case": [ruleSeverity.Error, "always", "upper-case"],
    "scope-enum": [ruleSeverity.Error, "always", projectPrefixes],
    "subject-case": [ruleSeverity.Error, "always", "sentence-case"],
  },
};

module.exports = config;

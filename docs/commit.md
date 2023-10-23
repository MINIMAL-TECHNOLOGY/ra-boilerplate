# Conventional Commits

[Reference](https://commitlint.js.org/#/)

### Structure of commit message

```
<type> [[optional scope]]: <description>

[optional body]

[optional footer(s)]
```

#### **Where**:

- **Require**:
  - **type**: Select the type of change that you're committing: (lower-case)
  - **description**: Write a short (about 50 characters), imperative tense description of the change
- **Optional**:
  - **scope**: What is the scope of this change (e.g. component or file name)
  - **body**: Provide a longer description of the change
  - **footer(s)**: Provide a extended information

<!-- #### Types

- **build** / ~~**vendor**~~: Changes that affect the build system or external dependencies
- **chore**: Other changes that don't modify src or test files
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: Reverts a previous commit
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests -->

| Type               | Description                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| build / ~~vendor~~ | Changes that affect the build system or external dependencies                                          |
| chore              | Other changes that don't modify src or test files                                                      |
| ci                 | Changes to our CI configuration files and scripts                                                      |
| docs               | Documentation only changes                                                                             |
| feat               | A new feature                                                                                          |
| fix                | A bug fix                                                                                              |
| perf               | A code change that improves performance                                                                |
| refactor           | A code change that neither fixes a bug nor adds a feature                                              |
| revert             | Reverts a previous commit                                                                              |
| style              | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test               | Adding missing tests or correcting existing tests                                                      |

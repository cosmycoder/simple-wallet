## 🍁 Branches

- `master` is our main branch for production build
- `dev` is the branch that we use for everyday coding. It's where we merge the development branchs.
- Please **Do Not develop directly** on `master` branch
- Merges to `master` should be through `pull request` practice **and always ask to team leaer**

## Merge Requests

- 👁 Focus on one task at time
- ⚛️ Make atomic/little commits

## 🗃 File and Folders naming 

The name of the `files` and `folders` must be written in English and with the same rules:
 - Components, screens and layouts is written following the pattern
`TitleCase` , ex: `MoodTracker.tsx.`
 - The rest of the files are written following the pattern
`camelCase` , Ex: `habitsService.js`
 - The folders name has to be written following the pattern
 `TitleCase` , Ex: `DiaryComponents`
 
 ## Commits

Use the following structure: `<type>(<scope>): <subject>` [See full examples here](https://www.conventionalcommits.org/en/v1.0.0/#examples)

> i.e: if you are integrating a new language to your project, the commit would be `feat(lang): spanish language added`

> i.e: if you are fixing some bug on a form, the commit would be `fix(contact): email input validated`

### Commit structure

```text
feat(lang): spanish language added
^--^^-----^^---------------------^
|   |      |
|   |      +--> Summary in past simple tense.
|   |
|   +---------> Optional scope about task, file, package, etc.
|
+-------------> Type: feat, fix, chore, build, ci, docs, style, refactor, perf, test
```
 
 ### Commit Types

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature for the user, not a new feature for building scripts
- `fix`: A bug fix for the user, not a fix to a build script
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests; not production code
- `chore`: Updating packages or configurations; no production code change

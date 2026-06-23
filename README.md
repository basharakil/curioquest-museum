# CurioQuest Museum

CurioQuest is a small static web app for a fictional digital museum of impossible artifacts.
You will use this repository to learn GitHub, Git, pull requests, issues, projects, releases,
GitHub Actions, GitHub Pages, Copilot, and agent-style development.

## What you will build

You are part of the CurioQuest product team. The museum needs a reliable website where visitors can:

- browse magical artifacts
- filter exhibits by category
- see exhibit status
- trust that updates are tested before deployment

## Local commands

```bash
npm ci
npm run lint
npm test
npm run build
npm run validate:dist
```

## Project structure

```text
index.html              Main page
src/app.js              Browser behavior and rendering
src/artifacts.js        Exhibit data used by the app and tests
src/styles.css          Visual styling
scripts/lint.mjs        Lightweight training linter
scripts/build.mjs       Static build script
scripts/validate-dist.mjs Validates build output
tests/artifacts.test.mjs Node tests for exhibit data
```

## Learning rule

Do not push random changes directly to `main` after the branching lab. Use issues, branches, pull requests, checks, and releases.
That is the difference between playing with GitHub and using GitHub like a developer.

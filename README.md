<div style="text-align:center;">
    <img src="./apps/pensieve-front/public/pensieve.svg" style="max-width:300px" />
</div></br>

**Pensieve** is a comprehensive documentation tool designed for software development life cycle (SDLC) documents. It streamlines the creation and management of documents throughout various phases of SDLC, offering customizable templates and leveraging artificial intelligence for enhanced usability and efficiency of documentation.

**Pensive contains two main components:**

- `pensieve-core`: The backend API built with Nest.js.
- `pensieve-front`: The frontend application built with Next.js.

Workspace is managed with `yarn` workspaces and uses `yarn version 4`. Make sure to have `yarn` installed on your machine.

Apps folder contains the main applications, `pensieve-core` and `pensieve-front`.

You can consider them as two separate applications and continue the development, but they are managed together in this monorepo.

## Commit Message Convention

follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for the commit messages.

```xml
<type>(scope): <description>
```

Type can be one of the following:

```bash
feat, fix, docs, style, refactor, test, chore
```

Scope is to indicate the part of the project that the commit is related to. As we have two main applications, the scope can be one of the following. If the commit is related to the whole project, use `glob` as the scope.

```bash
front, core, glob
```

examples:

```txt
// Feature commit for pensieve-front
feat(front): add new feature

// Bug fix commit for pensieve-core
fix(core): fix the bug

// Chore commit for the whole project
chore(glob): update the dependencies
```

## Getting Started
1. Clone the repository
2. Run `yarn install` at the root of the project to install the dependencies.
3. Navigate to `apps/pensieve-core` and run `yarn start` to start the backend server.
4. Navigate to `apps/pensieve-front` and run `yarn dev` to start the frontend server.

Note: You can also use yarn workspace commands to run the applications. For example, you can run `yarn workspace pensieve-core start` to start the backend server.

All the workspace commands can be defined in the root `package.json` file. The scripts naming convention is `app-name:<script-name-in-the-applications' package.json>`. For example, `pensieve-core:start` is the script to start the backend server.

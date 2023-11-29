# Contributing

All contributions are welcome and appreciated.
To ensure the contribution process is smooth and effective for everyone, please review the guidelines below.

## Contents

- [Tech Stack](#tech-stack)
- [Setting Up](#setting-up)
  - [Forking the Repository](#forking-the-repository)
  - [Cloning](#cloning)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Development Server](#running-the-development-server)
- [Enabling Developer Extensions](#enabling-developer-extensions)
  - [Chrome](#chrome)
  - [Firefox](#firefox)
- [Code Quality](#code-quality)
  - [Linting](#linting)
  - [Fixing Errors](#fixing-errors)
  - [Code Styling](#code-styling)
- [Production Build](#production-build)
- [Packaging for Publishing](#packaging-for-publishing)
- [Reporting Issues](#reporting-issues)

## Tech Stack

- [Plasmo](https://www.plasmo.com/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://github.com/shadcn-ui/ui)
- [Radix UI](https://www.radix-ui.com/)

## Setting Up

### Forking the Repository

**Fork the repository**: Start by creating your own copy of the main repository on your GitHub account.

### Cloning

**Clone the fork**: Clone your fork to your local machine and navigate to the containing folder.

### Installing Dependencies

**Install dependencies**: Run the following commands to install the necessary dependencies:

```bash
pnpm install
# or
npm install
```

### Running the Development Server

**Run the development server**: Start the development server with the following commands:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For more details on enabling developer extensions, refer to the next section.
You can start editing the popup by modifying `src/popup.tsx`, and it should auto-update as you make changes.

## Enabling Developer Extensions

### Chrome

**Access the development build in Chrome**: Choose one of the following options:

- **Run via command-line**:

  - Run the development server:

    ```bash
    pnpm run dev
    ```

  - Run the following command to start Google Chrome with the extension loaded:

    ```bash
    pnpm run start
    ```

- **Load as an unpacked extension**:

  - Open Chrome.
  - Navigate to `chrome://extensions/` (`More Tools` > `Extensions`).
  - Enable `Developer mode` in the top-right corner.
  - Click `Load unpacked`.
  - Select the `build/chrome-mv3-dev` folder.

### Firefox

**Access the development build in Firefox**: Choose one of the following options:

- **Run via command-line (with automatic reloading when files change)**:

  - Run the development server:

    ```bash
    pnpm run dev:firefox
    ```

  - Run the following command to start Firefox with the add-on loaded:

    ```bash
    pnpm run start:firefox
    ```

- **Load as a temporary add-on**:

  - Open Firefox.
  - Navigate to `about:debugging`.
  - Click `Enable add-on debugging`.
  - Click `Load Temporary Add-on` and select the `manifest.json` file in the `build/firefox-mv2-dev` directory.

## Code Quality

### Linting

**Lint the code**: Ensure code quality by running the following command:

```bash
pnpm run lint:js
```

### Fixing Errors

**Fix linting errors**: Automatically fix linting errors with:

```bash
pnpm run lint:fix
```

### Code Styling

**Fix code styling**: Automatically fix code styling with:

```bash
pnpm run format
```

## Production Build

**Create a production bundle**: Generate a production bundle for the extension with:

```bash
# Build for both Chrome and Firefox
pnpm build
# or
pnpm build:chrome
pnpm build:firefox
# or
npm run build:chrome
npm run build:firefox
```

This will create a bundle ready to be zipped and published to the stores.

## Packaging for Publishing

**Prepare for publishing**: Package the extension for publishing using:

```bash
# Build & Package for both Chrome and Firefox
pnpm package
# or
pnpm package:chrome
pnpm package:firefox
# or
npm run package
npm run package:chrome
npm run package:firefox
```

## Reporting Issues

If you encounter a bug or have a feature request, please report it by opening an issue in the repository.

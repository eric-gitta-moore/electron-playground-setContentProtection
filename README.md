# Electron Screen Share Demo

[English](README.md) | [中文](README.cn.md)

This is an Electron-based screen sharing demo project that demonstrates how to implement screen capture and content protection features in an Electron application.

https://github.com/user-attachments/assets/e80b2972-ca90-4901-8d2a-0c76195eff1e

## Features

- Screen Capture: Implement screen content capture using the `desktopCapturer` API
- Content Protection: Implement window content protection through `setContentProtection`
- Multi-window Support: Ability to open a second protected window
- Disabled Features: `IOSurfaceCapturer,DesktopCaptureMacV2`, preventing self-window content capture

## Tech Stack

- Electron 20.0.2
- Node.js

## Installation

1. Clone the project locally

2. Install dependencies
```bash
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/" yarn install
# or
npm install
```

## Running

```bash
yarn start
# or
npm start
```

## Project Structure

- `main.js`: Main process file, responsible for creating windows and handling IPC communication
- `preload.js`: Preload script, used to expose secure APIs to the renderer process
- `renderer.js`: Renderer process script, implements screen capture logic
- `index.html`: Main window HTML file

## Implementation Details

### Content Protection

The project uses `setContentProtection(true)` to prevent window content from being captured or recorded by other applications. This feature is enabled in both the main window and the second window.

### Screen Capture

Uses `desktopCapturer.getSources()` to get available screen sources and implements screen content capture through `navigator.mediaDevices.getUserMedia`.

### Security

- Uses preload scripts and context isolation to ensure security
- Implements secure communication between main and renderer processes through IPC
- Implements Content Security Policy (CSP) to prevent XSS attacks

## Notes

1. The project disables IOSurfaceCapturer and DesktopCaptureMacV2 features
2. The effectiveness of content protection may vary depending on the operating system

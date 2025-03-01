# Electron 屏幕共享演示

[English](README.md) | [中文](README.cn.md)

这是一个基于Electron的屏幕共享演示项目，展示了如何在Electron应用中实现屏幕捕获和内容保护功能。

https://github.com/user-attachments/assets/e80b2972-ca90-4901-8d2a-0c76195eff1e

## 功能特点

- 屏幕捕获：使用 `desktopCapturer` API实现屏幕内容捕获
- 内容保护：通过 `setContentProtection` 实现窗口内容保护
- 多窗口支持：可以打开第二个受保护的窗口
- 禁用特性：`IOSurfaceCapturer,DesktopCaptureMacV2`，即使自己无法捕获自己窗口内容

## 技术栈

- Electron 20.0.2
- Node.js

## 安装

1. 克隆项目到本地

2. 安装依赖
```bash
yarn install
# 或
npm install
```

## 运行

```bash
yarn start
# 或
npm start
```

## 项目结构

- `main.js`: 主进程文件，负责创建窗口和处理IPC通信
- `preload.js`: 预加载脚本，用于暴露安全的API到渲染进程
- `renderer.js`: 渲染进程脚本，实现屏幕捕获逻辑
- `index.html`: 主窗口的HTML文件

## 实现细节

### 内容保护

项目使用 `setContentProtection(true)` 来防止窗口内容被其他应用捕获或录制。这个功能在主窗口和第二个窗口中都已启用。

### 屏幕捕获

使用 `desktopCapturer.getSources()` 获取可用的屏幕源，并通过 `navigator.mediaDevices.getUserMedia` 实现屏幕内容捕获。

### 安全性

- 使用预加载脚本和上下文隔离确保安全性
- 通过IPC通信实现主进程和渲染进程之间的安全通信
- 实现了内容安全策略(CSP)来防止XSS攻击

## 注意事项

1. 项目禁用了IOSurfaceCapturer和DesktopCaptureMacV2特性
2. 内容保护功能的效果可能因操作系统而异

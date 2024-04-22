# pnpm Monorepo 指令文档

## 初始化 Monorepo

### 创建一个新的 Monorepo 项目

pnpm init @pnpm-workspace

## 安装依赖

### 安装依赖到根目录

pnpm install

### 安装依赖到特定子项目

pnpm workspace <package-name> install

### 安装开发依赖到特定子项目

pnpm workspace <package-name> install --save-dev

## 运行脚本

### 在所有子项目中运行脚本

pnpm recursive run <script-name>

### 在特定子项目中运行脚本

pnpm workspace <package-name> run <script-name>

## 添加、移除、更新子项目

### 添加新的子项目

pnpm add <package-name> --workspace-root

### 移除子项目

pnpm remove <package-name>

### 更新所有子项目的依赖

pnpm recursive update

## 其他常用指令

### 清理依赖

### 查看所有子项目

pnpm list

### 查看特定子项目的依赖

pnpm workspace <package-name> list

### 构建所有子项目

pnpm recursive build
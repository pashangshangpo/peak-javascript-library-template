# 简介

一个 Javascript 基础库开发模板

## 修改库名

将package.json中的以下信息修改成自己想要的名称

```
{
  "name": "util",
  "main": "dist/util.cjs.js",
  "module": "dist/util.esm.js",
  "browser": "dist/util.umd.js"
}
```

umd规范的文件，name 会作为全局变量名，比如这里的 util最终在浏览器端可以使用 window.util 来访问，或使用 util 访问

## 开发

```
yarn
yarn start
```

## 生产

```
yarn build
```

会多出一个 umd 规范的 *.min.js文件

## 使用

```
import xx from 'util'
```

- umd 规范的文件，name 会作为全局变量名，比如这里的 util 最终在浏览器端可以使用 window.util 来访问，或使用 util 访问
- 针对 umd 规范的文件，如果文件名中出现-，则会被转换为驼峰命名，示例

```
假如项目名是util-cookie最终会被转换成utilCookie

使用时 window.utilCookie
```
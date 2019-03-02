# vue-online-mall

最容易上手的 Vue 2.0 入门实战教程 - 数字产品售卖平台

慕课网实战课程地址：http://coding.imooc.com/class/91.html

我的演示：http://144.34.220.239:8080（搬瓦工服务器）

## 技术栈

- Node.js
- Express
- ES6
- Vue 全家桶(Vue2、vue-cli 2、vue-router 2.0、vue-resource、axios、vuex)
- Lodash
- Mockjs

## Build Setup

``` bash
# use vue-cli 2 init project
vue init webpack#1.1.3 vue-online-mall

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 部署

``` bash
cd ~/vue-online-mall

git pull

cnpm i

pm2 start prod.server.js
```

## 功能模块

数字产品售卖平台，主要功能模块：

- 首页
  - 产品列表
  - 新闻列表
  - 幻灯片切换
  - 登录注册弹窗
  - 登录表单
  - 关于我们弹窗
- 商品详情页
  - 边栏产品导航sidebar
  - 产品标题和介绍
  - 产品选项
  - 确认购买弹窗
  - 银行选择组件
  - 支付状态检查
- 商品列表页
  - 列表筛选项
  - 表格渲染
  - 日期选择组件

---

## 课程章节

### 第1章 课程简介

讲解课程安排，面象人群，以及对课程的项目做了效果演示。

1-1 课程简介
1-2 vue2.0简介

### 第2章 Vue简介

对 vue 一些最基础的知识做了讲解：实例对象、vue组件以及vue的一些相关概念。

2-1 vue三个特点
2-2 Vue实例对象
2-3 Vue的组件
2-4 Vue的相关概念

### 第3章 功能接口（1）

对文本渲染v-html、v-text、列表渲染 v-for 数组，对象，子组件；列表数据的同步更新方法；vue标签属性和条件渲染；事件绑定-内置事件绑定、自定义事件绑定；表单事件绑定；计算属性和数据监听等进行了讲解。

3-1 文本渲染-v-html、v-text
3-2 列表渲染-v-for 数组，对象，子组件
3-3 列表数据的同步更新方法
3-4 vue标签属性和条件渲染
3-5 事件绑定-内置事件绑定、自定义事件绑定
3-6 事件绑定-表单事件绑定
3-7 计算属性和数据监听

### 第4章 功能接口（2）

对组件之间通信；过渡动画：css实现过渡动画； JS实现过渡动画；自定义指令；插件；单文件组件等进行了讲解。

4-1 组件之间的通信
4-2 组件之间的通信-动态属性传递
4-3 组件之间的通信-动态组件
4-4 过渡动画-css实现过渡（上）
4-5 过渡动画-css实现过渡（下）
4-6 过渡动画-js实现过渡
4-7 自定义指令
4-8 插件
4-9 单文件组件

### 第5章 环境搭建和常用插件

对 vue-cli安装；ES6语法，vue-router，vuex状态管理进行了讲解。

5-1 vue-cli安装（上）
5-2 vue-cli安装（下）
5-3 vue-router（什么是前端路由）
5-4 vue-router（设置路由）
5-5 vue-router（路由参数）
5-6 vue-router（路由嵌套）
5-7 vue-router（命名的路由视图、路由重定向）
5-8 vue-router（使用过渡制作路由跳转动画）
5-9 vuex状态管理（原理）
5-10 vuex状态管理（实例）

### 第6章 项目实践-首页

实现项目框架搭建，首页：信息列表，vue-resource实现Ajax获取信息数据，express启动数据服务、幻灯片组件、登录等讲解。

6-1 项目框架搭建（layout、路由切换）
6-2 首页 - 信息列表 - 全部产品
6-3 首页 - 信息列表 - 最新消息
6-4 使用 axios 发送数据请求
6-5 使用 Mockjs 来模拟数据
6-6 首页 - 幻灯片组件（1）
6-7 首页 - 幻灯片组件（2）
6-8 首页 - 登录
6-9 首页 - 登录组件（1）
6-10 首页 - 登录组件（2）

### 第7章 项目实践-购买详情页、订单列表

对项目的添加路由，select选项组件，可多选项组件，数字组件，总价计算，选择择银行，订单列表做了详细的讲解。

7-1 购买详情页 - 添加路由（1）
7-2 购买详情页 - 添加路由（2）
7-3 购买详情页 - select选项组件
7-4 购买详情页 - 可多选项组件
7-5 购买详情页 - 数字组件
7-6 购买详情页 - 总价计算（1）
7-7 购买详情页 - 总价计算（2）
7-8 购买详情页 - 选择银行（1）
7-9 购买详情页 - 选择银行（2）
7-10 购买详情页 - 选择银行（3）
7-11 列表页 - 订单列表页面（1）
7-12 列表页 - 订单列表页面（2）
7-13 课程总结

### 第8章 课程扩展

讲解vuex在定单列表页面的应用。

8-1 select组件完善
8-2 vuex在项目中的应用（1）
8-3 vuex在项目中的应用（2）
8-4 vuex在项目中的应用（3）

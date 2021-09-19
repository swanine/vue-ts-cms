# vue3-ts-cms

## 关于
这是基于 Vue3、Vuex、VueRouter、 ElementPlus 、TypeScript、Echart5 开箱即用的后台系统解决方案。

## 技术栈
- 前端框架：Vue3.x
- UI框架：Element Plus
- 可视化：Echart5.x
- CSS 预编译：Less
- 工具库：@vueuse/core + dayjs + countup.js
- 代码规范：Prettier + ESLint
- 提交规范：Commitizen

## 项目结构
```
├─ public
└─ src
    ├── api
    │    ├── login
    │    │   ├── login.ts
    │    │   └── type.ts
    ├── assets
    │    ├── css
    │    └── images
    ├── components
    │    ├── form-input
    │    ├── nav-header
    │    └── nav-menu
    ├── global
    │    ├── index.ts
    │    └── register-element.ts
    ├── router
    ├── store
    │    ├── login
    │    ├── index.ts
    │    └── type.ts
    ├── utils
    │    ├── request
    │    ├── cache.ts
    │    ├── index.ts
    ├── views
    │    ├── login
    │    ├── main
    │    │    ├── adalysis
    │    │    ├── product
    │    │    ├── story
    │    │    ├── system
    │    │    └── main.vue
    │    └──not-found
    ├── App.vue
    ├── main.ts
    └── shims-vue.d.ts
```

# vue-weus 更新日志

## v0.1.0 开启 vue-weus 之旅 (2020-1-18)

* 利用 @vue/cli 4.1.2 搭建基于 vue vue-router vuex 项目框架，命令为 ```vue create vue-weus```
* 使用 TypeScript Sass vue-class-component Mocha Cypress 等
* 使用 ```npm outdated``` 更新 npm 依赖后，由于没有安装部分 peerDependencies 和 devDependencies，需要手动安装一下依赖
  ```bash
  npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
  npm install --save-dev eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue
  ```

创建 app
![创建 app](docs/assets/create-app.png)
创建 app 配置项
![创建 app 配置项](docs/assets/create-app.png)

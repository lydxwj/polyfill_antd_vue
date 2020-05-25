# ant-design-vue的兼容问题

#### 启动项目

- 安装依赖

  ```bash
  npm install
  ```

- 开发测试    

  ```bash
  npm start
  ```


#### 主要配置

babel.config.js文件

```js
module.exports = {
  presets: [
    '@vue/app',
    // 兼容配置
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry'
      }
    ]
  ],
  // 按需加载配置
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css'
      },
    ]
  ]
}
```

main.js文件（项目入口）

```js
// 引入@babel/polyfill处理兼容 
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/antd.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

#### 注意事项

很多人说按照步骤操作还是有问题，主要是因为脚手架生成的项目中`@vue/cli-service`和`@vue/cli-plugin-babel`版本高了（4.0以上），使用了Babel 7处理，所以项目中他们的版本要低于4.0才可以。
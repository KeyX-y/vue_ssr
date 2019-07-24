
import createApp from './src/App.js'
const { app, store } = createApp()

// 服务端返回store,赋值window上
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 客户端DOM创建后挂载vue实例
app.$mount('#app');

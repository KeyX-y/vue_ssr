import Vue from 'vue'
import App from './main.vue'
import createStore from './store/index.js'

// 导出一个工厂函数，用于创建新的
// 应用程序 和 store 实例
function createApp() {
  const store = createStore();
  const app = new Vue({
    store,
    render: h => h(App)
  });

  return { app, store }
}

export default createApp
import App from './src/main.vue'
import createApp from './src/App.js'

export default function(context) {
  const { app, store } = createApp()

  // 找到所有 asyncData 方法
  let components = App.components
  let asyncDataArr = [] // asyncData方法集合也是promise返回集合
  for (let key in components) {
    if (!components.hasOwnProperty(key)) continue
    let component = components[key]
    if (component.asyncData) {
      asyncDataArr.push(component.asyncData({store})) // 把store传给每个asyncData方法
    }
  }
  // 所有请求并行执行
  return Promise.all(asyncDataArr).then(() => {
    context.state = store.state
    return app
  })
}
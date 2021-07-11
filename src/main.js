// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router/index"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 映射路由
  router,
 /*  components: { App },
  template: '<App/>' */
  // render: (h)=>{return h(App)}
  // 是上面的语法糖
   render :h=>h(App)
})

//笔记
// 1引入rest样式，在static/css/reset.css中写，然后在index.heml中引入    不需要自己写在网上找的 

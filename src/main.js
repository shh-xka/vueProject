import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "./store/index"
import "./mock/index"
import "./common/stylus/style.styl"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

//1、mock的数据，2、router（路由器） 3、引入的字体图标 4、store
//mapActions的时候，一定要注意的是[],当里面的函数名称没有的时候，一定要在created里面调用一下
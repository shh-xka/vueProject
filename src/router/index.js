import Router from "vue-router"
import routes from "@/routes"
import Vue from "vue"
Vue.use(Router)
//消除编程式导航的错误提醒
const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const router = new Router({
  routes,
})

export default router
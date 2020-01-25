import Vuex from "vuex"
import vue from "vue"
vue.use(Vuex)
import home from "./modules/home/home"
import category from "./modules/category/category"
import recommend from "./modules/recommend/recommend"
export default new Vuex.Store({
  modules:{
    home,
    category,
    recommend
  }
})


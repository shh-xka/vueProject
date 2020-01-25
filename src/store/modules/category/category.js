import {GETCATEGORYLIST} from "../../mutation_types"
import {getCategoryData} from "../../../api/category/category"
const OK = 0
export default {
  state:{
    categoryList:[]
  },
  getters:{},
  mutations:{
    [GETCATEGORYLIST](state,categoryList){
      state.categoryList = categoryList
    }
  },
  actions:{
    async getCategoryList(store){
      const {errno,body} = await getCategoryData()
      if(errno === OK){
        store.commit(GETCATEGORYLIST,body.categoryL1List)
      }
  }
  }
}
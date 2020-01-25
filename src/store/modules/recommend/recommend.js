import {GETNAVLIST} from "../../mutation_types"
import {getNavData} from "../../../api/navData/index"
const OK = 0
export default {
  state:{
    navList:[],
  },
  getters:{},
  mutations:{
    [GETNAVLIST](state,navList){
      state.navList = navList
    }
  },
  actions:{
    async getNavList(store){
      const {errno,body} = await getNavData()
      if(errno === OK){
        store.commit(GETNAVLIST,body)
      }
    }
  }
}
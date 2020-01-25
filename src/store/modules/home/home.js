import {GETHOMELIST,GETPOLICYLIST} from "../../mutation_types"
import {getHomeData} from "../../../api/homeData"
const OK = 0
export default {
  state:{
    homeList:[],
    policyList:[]
  },
  getters:{},
  mutations:{
    [GETHOMELIST](state,homeList){
      state.homeList = homeList
    },
    [GETPOLICYLIST](state,policyList){
      state.policyList = policyList
    }
  },
  actions:{
    async getHomeList(store){
      const {errno,body} = await getHomeData()
      if(errno === OK){
        console.log(body.policyDescList)
        store.commit(GETHOMELIST,body.kingKongModule.kingKongList)
        store.commit(GETPOLICYLIST,body.policyDescList)
      }
    }
  }
}
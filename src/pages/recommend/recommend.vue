<template>
  <div class="recommend">
    <Search class="search">
      <template v-slot:center>
        <div class="text">
          <span class="textOne textFont" :class="{active:activeOne === `find`}"  @click="handleC(`find`)">发现</span>
          <span class="textTwo textFont" :class="{active:activeOne === `select`}" @click="handleC(`select`)">甄选家</span>
        </div>
      </template>
    </Search>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="item in navList" :key="item.id" :class="{active:currentId * 1 === item.id}">
          <router-link :to="{path:`${$route.fullPath}`,query:{id:item.id}}" class="arrActive" >{{item.text}}</router-link>
          </li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Search from "../../components/searchTypeTwo/searchTypeTwo"
  import {mapState,mapActions} from "vuex"
  import BScroll from "better-scroll"
  export default {
    name:"recommend",
    data(){
      return{
        activeOne:"find",
        currentId:""
      }
    },
    methods:{
      handleC(path){
        if(path === "find"){
          this.activeOne = "find"
        }else if(path === "select"){
          this.activeOne = "select"
        }
        this.$router.replace(`/recommend/${path}`)
      },
      ...mapActions(["getNavList"])
    },
    mounted(){
      this.currentId = this.$route.query.id ? this.$route.query.id :1
      this.$nextTick(()=>{
        new BScroll(".nav",{scrollX:true,click:true})
        new BScroll(".content",{scrollY:true,click:true})

      })
    },
    computed:{
      ...mapState({
        navList:state => state.recommend.navList
      })
    },
    components:{
      Search
    },
    created(){
      this.getNavList()
    },
    watch:{
      $route(){
        this.currentId = this.$route.query.id
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .recommend
    position relative
    width 100%
    height 100%
    .search
      width 100%
      padding 0 15px
      box-sizing border-box
      position relative
      z-index 2
      .text
        .textFont
          color #777
          font-size 18px
          &.active
            color #b4282d
            font-weight 700
            font-size 24px
        .textTwo
          margin-left 10px
    .nav
      width 100%
      height 46px
      background #ffffff
      border-bottom 1px solid rgba(0,0,0,.4)
      position relative
      z-index 2
      .nav-list
        width 160%
        height 100%
        display flex
        .nav-item
          height 100%
          margin 0 10px
          &.active
            border-bottom 2px solid #b4282d
          .arrActive
            display inline-block
            line-height 46px
            font-size 18px
            color #333
    .content
      position absolute
      left 0
      right 0
      top 112px
      bottom 36px
      background #ffffff

</style>
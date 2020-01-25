<template>
  <div class="categoryList">
    <div class="header">
      <Search class="search">
        <template v-slot:icon> <i class="icon iconfont icon-sousuo"></i></template>
        <template v-slot:text><input type="text" placeholder="搜索商品，共xxx款好物" class="text"></template>
      </Search>
    </div>
    <div class="content">
      <div class="content-left">
        <ul class="left-list">
          <li class="left-item" v-for="(item,index) in categoryList" :key="index">
            <!--query的使用：？id=动态的id，在写路由的时候，可以不用带上id，因为query的路径可以不用写全面 -->
           <router-link :to="`/categorylist/category?id=${item.id}`" class="arrLink" :class="{active:currentId * 1 === item.id }"> {{item.name}}</router-link>
           <!-- item.id 就是query后面携带的id，当前的id currentId === 点击到的id，因为queryid是通过点击动态获取到的 -->
          </li>
        </ul>
      </div>
      <div class="content-right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from "../../components/search/search"
  import BScroll from 'better-scroll'
  import {mapState,mapActions} from "vuex"
  export default {
    name:"categoryList",
    components:{
      Search
    },
    data(){
      return{
        currentId:""
      }
    },
    methods:{
      ...mapActions(["getCategoryList"]),
    },
    computed:{
      ...mapState({
        categoryList:state => state.category.categoryList
      })
    },
    created(){
      this.getCategoryList()
    },
    mounted(){
      this.currentId = this.$route.query.id ? this.$route.query.id : '1022001';
      this.$nextTick(() => {
       new BScroll(".content-left",{scrollY:true,click:true})
      })
    },
    watch: {
        $route(){
          this.currentId = this.$route.query.id;
        }
    }
    
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .categoryList
    width 100%
    height 100%
    position relative
    background #ffff
    .header
      height 44px
      width 100%
      display flex
      justify-content center
      align-items center
      one-px(rgba(0,0,0,.1))
      .search
        .icon
          position absolute
          left 97px
          top 13px
          color rgba(0,0,0,.4)
        .text
          width 348px
          height 28px
    .content
      position absolute
      left 0
      right 0
      top 44px
      bottom 0
      display flex
      .content-left
        // width 100px
        flex 2
        height 100%
        overflow hidden
        border-right 0.5px solid rgba(0,0,0,.2)
        .left-list
          .left-item
            display flex
            justify-content center
            align-items center
            width 100%
            height 32px
            margin 16px 0
            text-align center
            .arrLink
              width 100%
              height 100%
              line-height 32px
              border-left 2px solid #ffffff
              color black 
              &.active
                color red
                border-left 2px solid red
      .content-right
        flex 4
        height 100%


</style>
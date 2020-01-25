<template>
  <div class="footer">
      <ul class="footer-list">

        <li class="footer-item" @click="goto(`/home`)">
          <i class="iconfont icon-cangkuguanli"></i>
          <span>首页</span>
        </li>
       <li class="footer-item" @click="goto(`/categorylist`)">
          <i  class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </li>
        <li class="footer-item" @click="goto(`/recommend`)"> 
          <i class="iconfont icon-shitu"></i>
          <span>识物</span>
        </li>
       <li class="footer-item" @click="goto(`/shopcart`)">
          <i class="iconfont icon-gouwuchekong"></i>
          <span>购物车</span>
        </li>
      <li class="footer-item" @click="goto(`/profile`)">
          <i class="iconfont icon-tubiaozhizuomoban"></i>
          <span>个人</span>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name:"footerGuide",
    methods:{
      goto(path){
        this.$router.replace(`${path}`)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .footer
    width 100%
    .footer-list
      display flex
      align-item center
      justify-content space-around
      width 100%
      height 36px
      list-style none
      .footer-item
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        i 
          display block
        span 
          display block
          color #b4282d
          font-size 12px
    

</style>
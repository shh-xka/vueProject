<template>
  <div class="footer">
      <ul class="footer-list">
        <li class="footer-item" @click="$router.replace(`/home`)">
          <i></i>
          <span>首页</span>
        </li>
       <li class="footer-item" @click="$router.replace(`/categorylist`)">
          <i></i>
          <span>分类</span>
        </li>
        <li class="footer-item" @click="$router.replace(`/recommend`)"> 
          <i></i>
          <span>识物</span>
        </li>
       <li class="footer-item" @click="$router.replace(`/shopcart`)">
          <i></i>
          <span>购物车</span>
        </li>
      <li class="footer-item" @click="$router.replace(`/profile`)">
          <i></i>
          <span>个人</span>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name:"footerGuide",
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
      height 48px
      background pink 
      list-style none
      .footer-item
        display flex
        align-items center
        span 
          color #b4282d
          font-size 12px
    

</style>
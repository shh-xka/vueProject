<template>
  <section class="search-container">
    <div class="search-title">
      <div class="search-input">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">百搭直筒裤，到手仅159元</span>
      </div>
      <button @click="$router.back()">取消</button>
      <!-- 1、$router.push():普通的跳转 -->
      <!-- 2、$router.replace():底部点击到某一个路径，跳转回到home的界面 -->
      <!-- 3、$router.back():返回到点击的那个界面 -->
    </div>
    <div class="search-list">
      <p>热门搜索</p>
      <ul>
        <li >
          <a href="javascript:void(0);">新年好物 买一送一</a>
        </li>
        <li >
          <a href="javascript:void(0);">养生家电 99元起</a>
        </li>
         <li >
          <a href="javascript:void(0);">年终囤货5折起</a>
        </li>
        <li >
          <a href="javascript:void(0);">领166元拜年红包</a>
        </li>
        <li >
          <a href="javascript:void(0);">环游世界年货零食礼包</a>
        </li>
        <li >
          <a href="javascript:void(0);">口罩</a>
        </li>
        <li >
          <a href="javascript:void(0);">医用口罩</a>
        </li>
        <li >
          <a href="javascript:void(0);">医用外科口罩</a>
        </li>
        <li >
          <a href="javascript:void(0);">消毒</a>
        </li>
        <li >
          <a href="javascript:void(0);">洗手液</a>
        </li>
        <li >
          <a href="javascript:void(0);">拖鞋</a>
        </li>
        <li >
          <a href="javascript:void(0);">消毒液</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  export default {
    name:"searchGoods"
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search-container
    width 100%
    height 100%
    background #ffffff
    .search-title
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 44px
      font-size 15px
      padding 15px
      box-sizing border-box
      .search-input
        flex 7
        height 28px
        border-radius 5px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 28px
        i
          font-size 15px
        .placeholder
          font-size 15px
          color #666
      button
        flex 1
        height 20px
        margin-left 5px
        font-size 15px
        border none
        outline none
        background-color #fff
    .search-list
      clearFix()
      padding 0 10px 10px
      p
        width 340px
        height 45px
        font-size 14px
        color #999
        line-height 45px
      li
        float left
        height 24px
        line-height 22px
        border 1px solid #999
        margin 0 16px 16px 0
        a
          font-size 12px
          display inline-block
          line-height 24px
          color #333
          padding 0 8px
        &.highlight
          border 1px solid $red
          a
            color $red
</style>

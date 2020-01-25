<template>
  <div class="search">
    <slot name="left" class="left"></slot>
    <slot name="icon">
    <i class="icon iconfont icon-sousuo"></i>
    </slot>
    <slot name="text">
    <input type="text" placeholder="搜索商品，共xxx款好物" class="text">
    </slot>
    <slot name="right" class="right"></slot>
  </div>
</template>

<script>
  export default {
    name:"search"
  }
</script>

<style lang="stylus" scoped>
  .search
    .text
      background rgba(0,0,0,.1)
      font-size 14px
      text-align center
      border-radius 2px

</style>
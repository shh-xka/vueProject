<template>
  <div id="app">
    <router-view/>
    <FooterGuide class="footer"/>
  </div>
</template>

<script>
  import FooterGuide from "@/components/footerGuide/footerGuide.vue"
  export default {
    name: 'app',
    components:{
        FooterGuide
    }
  }
</script>

<style scoped lang="stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
    .footer
      position absolute
      bottom 0
      left 0

</style>

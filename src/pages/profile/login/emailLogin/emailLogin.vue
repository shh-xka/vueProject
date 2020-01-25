<template>
  <div class="login">
emailLogin
    <Search class="search">
      <template v-slot:center>
          <div class="bgImg"></div>
      </template>
    </Search>
  </div>
</template>

<script>
  import Search from "@/components/searchTypeTwo/searchTypeTwo"
  export default {
    nam:"emailLogin",
    components:{
      Search
    }
  }
</script>

<style lang="stylus" scoped>
  .login
    .search
      .bgImg
        width 109px
        height 34px
        background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
        background-size 100% 100%
</style>
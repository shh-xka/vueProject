<template>
  <div class="profile">
      <Search class="search">
        <template v-slot:center>
            <div class="bgImg"></div>
        </template>
      </Search>
      <div class="profile-main">
        <router-view/>
      </div>
      <!-- 关于query得路由得跳转关键知识点： -->
  </div>
</template>

<script>
 import Search from "../../components/searchTypeTwo/searchTypeTwo"
  export default {
    name:"profile",
    components:{
      Search,
    }
  }
</script>

<style lang="stylus" scoped>
  .profile
    .search
      .bgImg
        width 109px
        height 34px
        background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
        background-size 100% 100%
    .profile-main
      height 100%
      background-color #F2F5F4

</style>

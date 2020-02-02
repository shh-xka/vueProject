<template>
  <div class="profile">
      <Search class="search">
        <template v-slot:center>
            <div class="bgImg"></div>
        </template>
      </Search>
      <div class="content" v-show="isActive">
        <div class="main-logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
        </div>
        <div class="login-methods">
          <!-- <router-link :to="{path:`/profile/login`,query:{isPhoneLogin:true}}"> -->
            <div class="phone-login" :class="{active:className === `phone`}" @click="goto(`phone`,true)">
              <i class="iconfont icon-phone_icon"></i>
              <span>手机号码登录</span>
            </div>
          <!-- </router-link> -->
          <div class="email-login" :class="{active:className === `email`}" @click="goto(`email`,false)">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="quick-login" @click="gotoRegister">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
      </div>
    </div>
      <div class="profile-main">
        <router-view :isActive=isActive  @login="login" />
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
    },
    data(){
      return{
        className:"phone",
        isActive:true
      }
    },
    methods:{
       goto(name,pathName){
        this.className = name
        this.isActive = false
        this.$router.push({path:"/profile/login",query:{isPhoneLogin:pathName}})
      },
      login(){
        this.isActive = true
      },
      gotoRegister(){
        this.isActive = false
        this.$router.push({path:`/profile/register`,query:{isPhoneRegister:true}})
      }
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
    .content
      .main-logo
        display flex
        justify-content center
        padding 80px 0
        img
          width 150px
          height 45px
      .login-methods
        width 100%
        display flex
        flex-direction column
        align-items center
        .phone-login
          display flex
          align-items center
          justify-content center
          width 80%
          height 55px
          font-size 14px
          margin-bottom 16px
          color #b4282d
          border 1px solid #b4282d
          &.active
            color #ffffff
            background-color #b4282d
        .email-login
          display flex
          align-items center
          justify-content center
          width 80%
          height 55px
          font-size 14px
          color #b4282d
          border 1px solid #b4282d
          margin-bottom 16px
          &.active
            color #ffffff
            background-color #b4282d
          i
            width 20px
            height 20px
            font-size 20px
            margin-right 8px
        .quick-login
          font-size 14px
          color #333
          text-align center
          i
            font-size 14px
    .profile-main
      height 100%
      background-color #F2F5F4

</style>

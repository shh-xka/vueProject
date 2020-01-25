<template>
  <div class="profileHome">
    <div class="main-logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="login-methods">
      <div class="phone-login">
        <i class="iconfont icon-phone_icon"></i>
        <span>手机号码登录</span>
      </div>
      <div class="email-login">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="quick-login">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:"home"
  }
</script>

<style lang="stylus" scoped>
  .profileHome
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
          color #ffffff
          background-color #b4282d
          border 1px solid #b4282d
          margin-bottom 16px
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
</style>
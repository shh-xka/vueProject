<template>
  <div class="homeProfile">
    <!-- <div class="content" v-show="isActive">
      <div class="main-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>
      <div class="login-methods">
          <div class="phone-login" :class="{active:className === `phone`}" @click="goto(`phone`,true)">
            <i class="iconfont icon-phone_icon"></i>
            <span>手机号码登录</span>
          </div>
        <div class="email-login" :class="{active:className === `email`}" @click="goto(`email`,false)">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="quick-login" @click="$router.push({path:`/profile/register`,query:{isPhoneRegister:true}})">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </div> -->
    <!-- 下面是否需要是一个路由：1、这个界面就是一个路由得界面 -->
    <!-- 2、如果还有一个路由得话，那么将是子路由，子路由得话，那么就会在content界面显示 -->
    <!-- query得路由跳转都是在login这个界面，所有得跳转到得query得界面都应该在login路由中 -->
    <div v-show="!isActive" class="login">
      <div class="container">
        <emailLogin v-show="!$route.query.isPhoneLogin"/>
        <phoneLogin v-show="$route.query.isPhoneLogin"/>
        <div class="other-login"  @click="toggleLoginMethod()">
          <span>其他登录方式</span>
        </div>
        <div class="register" @click="$router.replace({path: '/profile/register', query: {isPhoneRegister: true}})">
        <span>注册账号</span>
        <i class="iconfont icon-jiantou"></i>
       </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import emailLogin from "../login/emailLogin/emailLogin"
  import phoneLogin from "../login/phoneLogin/phoneLogin"
  export default {
    name:"homeProfile",
    props:{
      isActive:Boolean
    },
    components:{
      emailLogin,
      phoneLogin,
    },
    data(){
      return{
        isActive:true,
      }
    },
    methods:{
      toggleLoginMethod(){
          this.$emit("login")
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .homeProfile
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
    .login
      width 100%
      height  100%
      display flex
      justify-content center
      .container
        .other-login
          width 320px
          height 45px
          text-align center
          line-height 50px
          font-size 14px
          color #b4282d
          border 1px solid #b4282d
          margin-top 15px
        .register
          display flex
          justify-content center
          align-items baseline
          margin-top 15px
          font-size 14px
          i
            font-size 14px
</style>
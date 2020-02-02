<template>
    <div class="email-login">
      <form>
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email" name="emailName" v-validate="'required|email'">
        <span style="color: red;" v-show="errors.has('emailName')">{{ errors.first('emailName') }}</span>
      </div>
      <div class="pwd">
        <input type="password" placeholder="密码" v-model="pwd" name="pwdName" v-validate="{required: true}" >
        <span style="color: red;" v-show="errors.has('pwdName')">{{ errors.first('pwdName') }}</span>
      </div>
      <!-- <div class="error-message">
        <span>{{errorMsg}}</span>
      </div> -->
      <div class="get-help">
        <span @click="$router.replace({path: '/profile/register', query: {isPhoneRegis: true}})">注册账号</span>
        <span>忘记密码</span>
      </div>
      <button class="login" @click.prevent="login">登录</button>
      </form>
    </div>
</template>

<script>
import "../../../../validate.js"
  export default {
    nam:"emailLogin",
    data(){
      return{
        email:"",
        pwd:"",
      }
    },
    methods:{
      gotoLogin(){
        this.$emit("login")
      }
    },
  methods:{
     async login(){
        const success = await this.$validator.validateAll()
      }
    }
  }
</script>

<style lang="stylus" scoped>
   .email-login
    padding-top 60px
    .phone, .code, .email, .pwd
      width 320px
      height 40px
      margin-top 10px
      border-bottom 1px solid #ddd
      input
        float left
        margin 14px 0
        background #f2f5f4
        font-size 16px
        color #666
        // border 1px solid rgba(0,0,0,0)
        outline none
      button
        float right
        width 84px
        height 29px
        font-size 14px
        color #333
        outline none
        margin 6px 5px 0 0
        background-color #f2f5f4
        border-radius 5px
        border 1px solid #333
    .get-help
      width 100%
      padding 20px 0 20px
      display flex
      justify-content space-between
      font-size 15px
      color #333
    .login
      width 320px
      height 45px
      font-size 16px
      color #fff
      outline none
      background-color #b4282d
      border 1px solid #b4282d
</style>
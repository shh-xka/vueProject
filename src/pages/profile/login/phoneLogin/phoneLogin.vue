<template>
    <div class="phone-login">
      <div class="phone">
        <input type="text" maxlength="11" placeholder="请输入手机号" name="phone" v-model="phone" v-validate="'required|mobile'">
        <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码" name="code" v-model="code" v-validate="{required: true}">
         <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
        <button class="get-code">获取验证码</button>
      </div>
      <!-- <div class="error-message">
        <span>{{errorMsg}}</span>
      </div> -->
      <div class="get-help">
        <span>遇到问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <button class="login" @click="login">登录</button>
    </div>
</template>

<script>
  import "../../../../validate.js"
  export default {
    nam:"phoneLogin",
    data(){
      return{
        phone:"",
        code:"",
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
  .phone-login
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
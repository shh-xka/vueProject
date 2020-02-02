<template>
  <div class="email-regis">
    <form>
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email" name="emailName" v-validate="'required|email'">
        <span style="color: red;" v-show="errors.has('emailName')">{{ errors.first('emailName') }}</span>
      </div>
      <div class="pwd">
         <input type="password" placeholder="密码" v-model="pwd" name="pwdName" v-validate="{required: true}" >
        <span style="color: red;" v-show="errors.has('pwdName')">{{ errors.first('pwdName') }}</span>
      </div>
      <div class="confirm-pwd">
         <input type="password" placeholder="请确认密码" v-model="confirmPwd" name="confirmName" v-validate="{required: true}">
        <span style="color: red;" v-show="errors.has('confirmName')">{{ errors.first('confirmName') }}</span>
      </div>
      <!-- <div class="error-message">
        <span>{{errorMsg}}</span>
      </div> -->
      <button class="register" @click.prevent="register">注册</button>
       <div class="email-register"
        @click="$router.replace({path: '/profile/register', query: {isPhoneRegister: true}})"
      >
        <span>手机号注册</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </form>
    </div>
</template>

<script>
import "../../../../validate"
  export default {
    nam:"emailRegister",
    data(){
      return{
        email:"",
        pwd:"",
        confirmPwd:""
      }
    },
     methods:{
     async register(){
         const success = await this.$validator.validateAll()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .email-regis
    padding-top 60px
    .error-message
      font-size 12px
      color red
      margin 5px 0
    .phone, .code, .pwd, .email, .confirm-pwd
      width 320px
      height 40px
      border-bottom 1px solid #ddd
      margin-top 10px
      input
        float left
        margin 14px 0
        font-size 14px
        color #666
        background #f5f5f5
        outline none
      button
        float right
        width 84px
        height 29px
        font-size 14px
        color #333
        outline none
        margin 6px 5px 0 0
        background-color #f5f5f5
        border-radius 5px
        border 1px solid #333
    .register
      width 320px
      height 50px
      font-size 14px
      color #fff
      outline none
      background-color #b4282d
      border 1px solid #b4282d
    .email-register
      display flex
      justify-content center
      align-items baseline
      margin-top 15px
      font-size 16px
      i
        font-size 14px
</style>
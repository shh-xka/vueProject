<template>
  <section class="register-container">
      <div class="regis-title">
        <span>{{$route.query.isPhoneRegister? '手机号注册' : '邮箱账号注册'}}</span>
      </div>
      <div class="register">
        <div class="container">
            <phoneRegister v-show="$route.query.isPhoneRegister"/>
            <emailRegister v-show="!$route.query.isPhoneRegister"/>
            <div class="toash-info">
                <input type="checkbox">
              <div class="text">
                <span>我同意</span>
                <a href="iavascript:void(0);">《网易服务条款》</a>
                <span>和</span>
                <a href="iavascript:void(0);">《网易隐私政策》</a>
              </div>
            </div>
         </div>
       </div>
  </section>
</template>

<script>
  import phoneRegister from "./phoneRegister/phoneRegister"
  import emailRegister from "./emailRegister/emailRegister"
  export default {
    name:"register",
    components:{
      phoneRegister,
      emailRegister
    },
    data(){
      return{
        isSelect:false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .register-container
    height 100%
    background-color #f5f5f5
    padding 20px 20px
    .regis-title
      display flex
      justify-content center
      span
        font-size 18px
        color #333
    .register
      display flex
      justify-content center
      .container
        .toash-info
          height 20px
          display flex
          align-items center
          margin-top 15px
          input
            width 16px
            height 16px
            outline none
            // visibility hidden
          .text
            a
              color #007AFF


</style>
<template>
  <div class="cart">
    <div class="header">
      <span class="textOne">购物车</span>
      <span class="textTwo">领券</span>
    </div>
    <div class="nav">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item,index) in policyList" :key="index">
            <span class="icon"><img :src="item.icon"></span>
            <span class="text">{{item.desc}}</span>
          </li>
        </ul>
    </div>
    <div class="content">
      <div class="bgImg"></div>
      <div class="text">去添加点什么吧</div>
      <div class="btn" @click="$router.push(`/profile`)">登录</div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex"
  export default {
    name:"shopcart",
    methods:{
      ...mapActions(["getHomeList"]),
    },
    computed:{
      ...mapState({
        policyList:state => state.home.policyList
      })
    },
    created(){
      this.getHomeList()
    }
  }
</script>

<style lang="stylus" scoped>
  .cart
    width 100%
    height 100%
    position relative
    .header
      width 100%
      height 57px
      padding 0 20px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      background #ffffff
      .textOne
        font-size 24px
        color #333
      .textTwo
        font-size 20px
        color #DD1A21
    .nav
      width 100%
      height 46px
      background #eeee
      padding 0 20px
      box-sizing border-box
      .nav-list
        display flex
        justify-content space-between
        .nav-item
          line-height 46px
          .icon
            display inline-block
            margin-right 3px
            img 
              width 10px
              height 10px
          .text
            font-size 14px
            color #666
    .content
      position absolute
      left 0
      right 0
      top 103px
      bottom 36px
      background #f4f4f4
      display flex
      flex-direction column
      justify-content center
      align-items center
      .bgImg
        width 158px
        height 158px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp);
        background-size cover
      .text
        margin-top -15px
        font-size: 16px;
        color: #999
      .btn
        margin-top 30px
        text-align center
        width 306px
        height 58px
        font-size 18px
        line-height 58px
        color  #fff
        background-color #DD1A21
        border-radius 2px
      
</style>
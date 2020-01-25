<template>
  <div class="home">
      <div class="header">
        <Search class="search">
          <template v-slot:left><a href="/" class="logo"></a></template>
          <template v-slot:icon><i class="icon iconfont icon-sousuo"></i></template>
          <template v-slot:text><input type="text" placeholder="搜索商品，共xxx款好物" class="text" @click="$router.push(`/searchgoods`)"></template>
          <template v-slot:right><button class="btn" @click="$router.push(`/profile`)">登录</button></template>
        </Search>
      </div>
      <div class="top-scroll">
        <ul class="list">
          <li class="item" @click="handleTwo"><a href="#" :class="{active:active}">推荐</a></li>
          <li v-for="(item,index) in homeList" :key="index" class="item" @click="handleC(index)">
            <a href="#" :class="{active:index === currentIndex}">{{item.text}}</a>
          </li>
        </ul>
        <div class="cow">
          <i class="icon iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="bottom-scroll">
        <div class="wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt=""></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="nav">
              <ul class="nav-list">
                <li class="nav-item" v-for="(item,index) in policyList" :key="index">
                  <span class="icon"><img :src="item.icon"></span>
                  <span class="text">{{item.desc}}</span>
                </li>
              </ul>
          </div>
          <Split/>
          <div class="goodsList">
            <ul class="goodsList-list">
              <li class="goodsList-item" v-for="(item,index) in homeList" :key="index">
                <span class="picture"><img :src="item.picUrl" alt=""></span>
                <span class="text">{{item.text}}</span>
              </li>
            </ul>
          </div>
          <section data-v-56f0d932="" class="gift-container" style="pointer-events: auto;">
              <p data-v-56f0d932="" class="name">- 新人专享礼 -</p> 
              <div data-v-56f0d932="" class="gift-box">
                  <div data-v-56f0d932="" class="gift-left">
                    <span data-v-56f0d932="">新人专享礼包</span>
                    <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
                  </div>
                <div data-v-56f0d932="" class="gift-right">
                  <div data-v-56f0d932="" class="gift-right-top">
                      <div data-v-56f0d932="" class="title">
                        <p data-v-56f0d932="">福利社</p>
                          <span data-v-56f0d932="">今日特价</span>
                      </div> 
                      <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社"></div> <div data-v-56f0d932="" class="gift-right-bottom">
                      <div data-v-56f0d932="" class="title">
                        <p data-v-56f0d932="">新人拼团</p>
                        <span data-v-56f0d932="">1元起包邮</span>
                      </div> 
                      <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
                  </div>
                </div>
            </div>
          </section>
          <split/>
          <section class="manufacturer-container">
            <div class="manufacturer-header">
              <span>品牌制造商直供</span>
              <span class="more">更多
                <i class="iconfont icon-52"></i>
              </span>
            </div>
            <ul class="manufacturer-list">
              <li>
                <span>海外制造商</span>
                <span>9.9元起</span>
                <span v-show="isShow">上新</span>
              </li>
              <li>
                <span>CK制造商</span>
                <span>32.9元起</span>
                <span v-show="isShow">上新</span>
              </li>
              <li>
                <span>Nine West 制造商</span>
                <span>219元起</span>
                <span v-show="!isShow">上新</span>
              </li>
              <li>
                <span>新秀丽制造商</span>
                <span>34.9元起</span>
                <span v-show="!isShow">上新</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex"
  import BScroll from 'better-scroll'
  import Swiper from "swiper"
  import "swiper/css/swiper.min.css"
  import Search from "../../components/search/search"
  import Split from "../../components/split/split"
  export default {
    name:"home",
    components:{
      Search,
      Split
    },
    data(){
      return{
        currentIndex:-2,
        active:true,
        isShow:false
      }
    },
    methods:{
      ...mapActions(["getHomeList"]),
      handleC(index){
        this.currentIndex = index
        this.active = false
      },
      handleTwo(){
        this.currentIndex = -1
        this.active = true
      },
      foodsTitleShow(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            // 如果需要分页器
            loop: true, // 循环模式选项
            pagination: {
            el: '.swiper-pagination',
            },
        })
       }
    },
    computed:{
      ...mapState({
        homeList:state => state.home.homeList,
        policyList:state => state.home.policyList
      })
    },
   async created(){
     await this.getHomeList()
      this.foodsTitleShow()
    },
    mounted(){
      new BScroll(".top-scroll",{scrollX:true,click:true})
      new BScroll(".bottom-scroll",{scrollY:true,click:true})
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    overflow hidden
    width 100%
    height 100%
    position relative
    background #ffffff
    .header
      width 100%
      height 44px
      position relative
      z-index 2
      overflow hidden
      background #ffffff
      .search
        display flex
        justify-content space-around
        align-items center
        margin-top 9px
        .logo
          width 69px
          height 20px
          display inline-block
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp);
          background-size: cover;
        .icon
          position absolute
          left 113px
          top 14px
          color rgba(0,0,0,.4)
        .text
          width 223px
          height 28px
          border-radius 4px
        .btn
          text-align center;
          color #DD1A21;
          border 1px solid #DD1A21
          border-radius 4px
          background rgba(0,0,0,0)
    .top-scroll
      width 100%
      height 30px
      position relative
      z-index 3
      background #ffffff
      overflow hidden
      .list
        height 100%
        width 200%
        display flex
        .item
          padding 0 5px
          line-height 30px
          a
            font-size 14px
            color #333
            display inline-block
            position relative
            text-align center
            &.active
              color red
              &::after
                content ""
                display block
                height 2px
                width 100%
                position absolute
                left 0
                bottom 0
                background red
      .cow
        width 50px
        height 30px
        position absolute
        right 0
        bottom 0
        text-align center
        line-height 30px
        background #f5f5f5
    .bottom-scroll
      position absolute
      left 0
      right 0
      top 74px
      bottom 36px
      .wrap
        // padding-bottom 36px
        .swiper-container
          width 100%
          .swiper-wrapper
            display inline-block
            width 400%
            display flex
            .swiper-slide
              width 25%
              height 226px
              img
                width 100% 
                height 226px
        .nav
          width 100%
          height 40px
          .nav-list
            width 100%
            height 100%
            display flex
            justify-content space-around
            align-items center
            .nav-item
              width 120px
              font-size 14px
              display flex
              align-items center
              .icon
                display inline-block
                width 16px
                height 16px
                img 
                  width 100%
                  height 100%
              .text
                display inline-block
        .goodsList
          width 100%
          height 185px
          .goodsList-list
            width 100%
            height 100%
            display flex
            justify-content space-between
            align-content space-between
            flex-wrap wrap
            .goodsList-item
              width 78px
              height 82px
              display flex
              flex-direction column
              justify-content space-between
              align-items center
              .picture
                display inline-block
                img 
                  width 60px
                  height 60px
              .text
                display inline-block
                font-size 12px
                color #333
        .gift-container
          width 100%
          padding 0 5px
          box-sizing border-box
          .name
            font-size 16px
            height 45px
            line-height 45px
            text-align center
          .gift-box
            display flex
            font-size 16px
            justify-content center
            .gift-left
              text-align center
              margin-right 2px
              background-color #F9E9CF
              span
                display block
                margin-top 15px
              img
                width 170px
                height 188px
                margin 10px auto
            .gift-right
              .gift-right-top, .gift-right-bottom
                display flex
                justify-content space-around
                margin-bottom 2px
                img
                  width 160px
                  height 116px
                .title
                  display flex
                  font-size 16px
                  flex-direction column
                  span
                    font-size 12px
                    margin-top 5px
                    color #777
              .gift-right-top
                flex 2
                background-color #FBE2D3
              .gift-right-bottom
                flex 2
                background-color #FFECC2
        .manufacturer-container
          width 100%
          box-sizing border-box
          padding 0 10px 10px 15px
          font-size 15px
          .manufacturer-header
            display flex
            justify-content space-between
            height 50px
            line-height 50px
            .more
              display flex
              i
                display block
                width 15px
                height 15px
                font-size 15px
          .manufacturer-list
            display flex
            flex-wrap wrap
            justify-content center
            width 100%
            clearFix()
            li
              width 125px
              height 130px
              background-repeat no-repeat
              background-size 100% 100%
              &:nth-of-type(1)
                margin 0 2px 2px 0
                background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
              &:nth-of-type(2)
                margin-bottom 2px
                background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
              &:nth-of-type(3)
                margin 0 2px 2px 0
                background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
              &:nth-of-type(4)
                margin-bottom 2px
                background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
              span
                float left
                &:nth-of-type(1)
                  width 100%
                  text-align center
                  margin-top 10px
                &:nth-of-type(2)
                  font-size 12px
                  color #777
                  margin-left 25%
                &:nth-of-type(3)
                  font-size 12px
                  width 32px
                  height 16px
                  color #fff
                  text-align center
                  border-radius 2px
                  background-color #CBB693
                  margin-left 5px

</style>
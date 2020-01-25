<template>
<!-- 案例：通过id的值精准的点击，显示对应的页面 -->
  <div class="category-container">
    <!-- 这个是一个单独的right的页面 -->
    <div class="category-main">
      <img class="category-bigImg" :src="categories.bannerUrl" alt="居家生活大图" v-if="categories">
      <ul v-if="categories">
        <li v-for="(category, index) in categories.subCateList" :key="index">
          <img :src="category.bannerUrl" :alt="category.name">
          <span>{{category.name}}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- 这个是右半边， -->
</template>
<script>
  import {mapState,mapActions} from 'vuex';
  import BScroll from 'better-scroll';
  export default{
    data () {
      return {
          // 单独的一个对象，获取left的id，获取到与之id匹配的right对象
        categories:{},
        categoryId: ''
      }
    },
    methods:{
      ...mapActions(["getCategoryList"])
    },
    computed: {
      ...mapState({
        // 获取到全部的li的页面
       categoryList:state => state.category.categoryList
      })
    },
    mounted () {
      // 在mounted时候，一上来就获取到点击的列表的query.id
      this.categoryId = this.$route.query.id ? this.$route.query.id : '1022001';
      /* eslint-disable no-new */
      new BScroll('.category-container', {
        click: true
      })
    },
    watch: {
      // 这个的作用是让页面重新的渲染，在queryId发生改变的时候，再次渲染获取到新的id
      // 总结：组件的复用
      $route () {
        this.categoryId = this.$route.query.id;
        this.categories = this.categoryList.find(item => item.id === this.categoryId * 1);
      },
      // 获取到请求的数据后，通过query.id 来判断应该展示的li的界面
      categoryList () {
        this.categories = this.categoryList.find(item => item.id === this.categoryId * 1);
      }
    },
    created(){
      this.getCategoryList()
    },
    // 组件的复用
    // beforeRouteUpdate(to,from,next){
    //     this.categoryId = this.$route.query.id;
    //     this.categories = this.categoryList.find(item => item.id === this.categoryId * 1);
    //     next()
    // }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .category-container
    height 100%
    overflow hidden
    .category-main
      height 100%
      padding 10px 10px 60px
      .category-bigImg
        width 250px
        height 80px
        margin-bottom 10px
      ul
        display flex
        flex-wrap wrap
        width 100%
        li
          text-align center
          width 70px
          margin-right 10px
          img
            width 70px
            height 70px
</style>

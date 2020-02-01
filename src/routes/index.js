import home from "../pages/home/home.vue"
import categorylist from "../pages/categorylist/categorylist.vue"
import recommend from "../pages/recommend/recommend.vue"
import shopcart from "../pages/shopcart/shopcart.vue"
import profile from "../pages/profile/profile.vue"
import category from "../pages/categorylist/category/category.vue"
import searchGoods from "../pages/searchGoods/searchGoods.vue"
import find from "../pages/recommend/find/find.vue"
import select from "../pages/recommend/select/select.vue"
import profileHome from "../pages/profile/home/home.vue"
import register from "../pages/profile/register/register"
export default [{
    path: "/home",
    component: home,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/categorylist",
    component: categorylist,
    children: [{
        path: "category",
        component: category,
        meta: {
          showFooter: true
        },
      },
      {
        path:"",
        redirect:"category",
      }
    ],
    meta: {
      showFooter: true
    },

  },
  {
    path: "/recommend",
    component: recommend,
    children:[
      {
        path:"find",
        component:find,
        meta: {
          showFooter: true
        }
      },
      {
        path:"select",
        component:select,
        meta: {
          showFooter: true
        }
      },
      {
        path:"",
        redirect:"find",
        component:find
      }
    ],
    meta: {
      showFooter: true
    }
  },
  {
    path: "/shopcart",
    component: shopcart,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/profile",
    component: profile,
    children:[
      {
        path:"login",
        component:profileHome,
      },
      {
        path:"register",
        component:register
      },
      {
        path:"",
        redirect:"login"
      }
    ],
    meta: {
      showFooter: false
    }
  },
  {
    path: "/searchgoods",
    component: searchGoods,
    meta: {
      showFooter: false
    }
  },
  {
    path: "/",
    redirect: "/home",
  }
]
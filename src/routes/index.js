import home from "../pages/home/home.vue"
import categorylist from "../pages/categorylist/categorylist.vue"
import recommend from "../pages/recommend/recommend.vue"
import shopcart from "../pages/shopcart/shopcart.vue"
import profile from "../pages/profile/profile.vue"
import category from "../pages/categorylist/category/category.vue"
import searchGoods from "../pages/searchGoods/searchGoods.vue"
import find from "../pages/recommend/find/find.vue"
import select from "../pages/recommend/select/select.vue"
import emailLogin from "../pages/profile/login/emailLogin/emailLogin.vue"
import phoneLogin from "../pages/profile/login/phoneLogin/phoneLogin.vue"
import profileHome from "../pages/profile/home/home.vue"
import emailRegister from "../pages/profile/register/emailRegister/emailRegister.vue"
import phoneRegister from "../pages/profile/register/phoneRegister/phoneRegister.vue"
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
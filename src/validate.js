import Vue from "vue"
import VeeValidate from "vee-validate"
Vue.use(VeeValidate)

import zh_CN from "vee-validate/dist/locale/zh_CN"
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    emailName: "邮箱",
    pwdName: "密码",
    confirmName:"确认密码"
  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})

VeeValidate.Validator.extend('email', {
  validate: value => {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  },
  getMessage: field => field + '必须满足验证规则'
})
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35db979b"],{"20c1":function(t,s,e){"use strict";var a=e("e3e8"),r=e.n(a);r.a},a57f:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("nav",{staticClass:"navbar navbar-light flex-md-nowrap p-0 shadow",staticStyle:{"background-color":"#165d6e"}},[e("div",{staticClass:"navbar-brand text-white col-sm-3 col-md-2 mr-0"},[t._v(" LifeHouse 訂單管理系統 ")]),e("div",{staticClass:"d-flex "},[e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("品牌首頁")]),e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/login"}},[t._v("登出")])],1)])]),e("form",{staticClass:"form-signin mt-5",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal "},[t._v("訂單後台管理中心")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"請輸入管理員信箱",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"請輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),t._m(0),e("button",{staticClass:"btn btn-lg btn-info btn-block",attrs:{type:"submit"}},[t._v("登入")]),e("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("ⓒ Copyright 2020 LifeHouseShop")])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 記住我 ")])])}],n={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.$http.post(s,t.user).then((function(s){s.data.success&&t.$router.push("/admin/products")}))}}},i=n,o=(e("20c1"),e("2877")),u=Object(o["a"])(i,a,r,!1,null,"2eadd648",null);s["default"]=u.exports},e3e8:function(t,s,e){}}]);
//# sourceMappingURL=chunk-35db979b.6d4e28a5.js.map
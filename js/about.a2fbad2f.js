(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{b6d1:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"flex flex-row\n   align-center\n   justify-center\n   align-sm-center\n   welcome-container"},[s("v-col",{attrs:{sm:"6"}},[s("div",{staticClass:"mt-5"},[s("v-card",{staticClass:"pt-10",staticStyle:{position:"relative"},attrs:{elevation:"2",shaped:"","min-height":"300px"}},[s("div",{staticClass:"d-flex mx-0 justify-center align-center mb-9"},[s("div",[s("div",{staticClass:"d-flex"},[s("v-img",{staticClass:"ml-n8",attrs:{alt:"Vuetify Name",contain:"","min-width":"50",src:"https://jobio-prd-s3.s3-ap-southeast-1.amazonaws.com/poster-photo/26522-29287-prd.png",width:"90"}}),s("div",{staticClass:"d-flex align-center justify-center ml-n3"},[s("span",{staticClass:"text-h6 "},[t._v("Appetiser Verify")])])],1)])]),s("v-row",{staticClass:"d-flex justify-center"},[s("v-col",{attrs:{cols:"10"}},[s("v-alert",{attrs:{icon:"mdi-shield-lock-outline",text:"",type:"info"}},[s("span",{staticClass:"text-caption"},[s("h3",[t._v(" Please check the verification code sent to your email ")])])])],1)],1),s("v-row",{staticClass:"flex-row justify-center flex-wrap mx-0 pa-5"},[t.error?s("v-alert",{staticClass:"text-subtitle-2",attrs:{toggle:"",border:"right","colored-border":"",type:"error",elevation:"2",transition:"scale-transition",dismissible:""}},[s("span",{staticClass:"red--text"},[t._v(" "+t._s(t.error)+" ")])]):t._e()],1),s("v-form",{ref:"form",staticClass:"px-12 pb-3",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.isFormValid,callback:function(e){t.isFormValid=e},expression:"isFormValid"}},[s("v-row",{},[s("v-col",{staticClass:"text-sm-center",attrs:{"offset-sm":"3",cols:"6"}},[s("v-text-field",{attrs:{"prepend-icon":"mdi-lock",label:"Verification Code",type:"number",required:"",rules:t.codeRules},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)],1),s("v-row",{staticClass:"my-5 align-center align-sm-center flex flex-column flex-sm-row justify-center",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"text-sm-center",attrs:{cols:"4"}},[s("v-btn",{attrs:{color:"accent",type:"submit",loading:t.loading,disabled:!t.isFormValid},on:{click:function(e){return e.stopPropagation(),t.handleVerify(e)}}},[t._v(" Verify ")])],1),s("v-col",{attrs:{cols:"5"}},[s("v-btn",{attrs:{color:"accent-lighter",type:"submit",loading:t.loading},on:{click:function(e){return e.stopPropagation(),t.handleResendVerify(e)}}},[t._v(" Resend Verification Code ")])],1)],1)],1)],1)],1)])],1)],1)},i=[],n=s("5530"),r=s("2f62"),o={data:function(){return{loading:!1,isFormValid:!0,token:"",codeRules:[function(t){return!!t||"Verification code is required"}]}},computed:Object(n["a"])({},Object(r["b"])({error:"error"})),methods:{handleVerify:function(){console.log("test"),this.$store.dispatch("verify",this.token)},handleResendVerify:function(){console.log("handle Resend verify"),this.$store.dispatch("resendVerification")},handleRefreshToken:function(){console.log("handle Refresh Token"),this.$store.dispatch("refreshToken")}}},l=o,c=(s("bedc"),s("2877")),d=s("6544"),f=s.n(d),u=s("0798"),m=s("8336"),p=s("b0af"),v=s("62ad"),h=s("a523"),b=s("4bd4"),x=s("adda"),g=s("0fd9"),V=s("8654"),y=Object(c["a"])(l,a,i,!1,null,"3c65bf30",null);e["default"]=y.exports;f()(y,{VAlert:u["a"],VBtn:m["a"],VCard:p["a"],VCol:v["a"],VContainer:h["a"],VForm:b["a"],VImg:x["a"],VRow:g["a"],VTextField:V["a"]})},bedc:function(t,e,s){"use strict";s("d374")},d374:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],n=s("2877"),r={},o=Object(n["a"])(r,a,i,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.a2fbad2f.js.map
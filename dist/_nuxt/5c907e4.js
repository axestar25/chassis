(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{367:function(t,r,e){var content=e(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(89).default)("332aef8a",content,!0,{sourceMap:!1})},368:function(t,r,e){"use strict";e(367)},369:function(t,r,e){var o=e(88)((function(i){return i[1]}));o.push([t.i,".form-size[data-v-e06e3db8]{background:#fff;border-radius:6px;box-shadow:3px 3px 22px 11px #f2f2f2;margin:0 auto;max-width:580px;padding:80px;width:100%}",""]),o.locals={},t.exports=o},373:function(t,r,e){"use strict";e.r(r);var o={data:function(){return{email:"a",password:"a"}},methods:{login:function(t){var r=t.target.elements.user.value,e=t.target.elements.password.value;try{r==this.email&&e==this.password?this.$router.push("/Dashboard"):(e="",this.$notify.error({title:"Error",message:"Incorrect ID or Password"}))}catch(t){console.error(t)}}}},n=(e(368),e(69)),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 d-block mx-auto mt-5"},[r("form",{staticClass:"form-size",on:{submit:function(r){return r.preventDefault(),t.login.apply(null,arguments)}}},[r("h2",{staticClass:"mb-3 text-center"},[t._v("Chassis Login")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("b-button",{staticClass:"mt-4 btn-pers mx-auto d-block w-100",attrs:{variant:"info",type:"submit",id:"login_button"}},[t._v("Login")]),t._v(" "),t._m(2)],1)])])])}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"input"},[r("label",{attrs:{for:"user"}},[t._v("User ID")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user",placeholder:"User ID"}})])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Type Password Here"}})])},function(){var t=this._self._c;return t("div",{staticClass:"alert alert-warning alert-dismissible fade show mt-5 d-none",attrs:{role:"alert",id:"alert_1"}},[this._v("\n                    Error User ID or Password\n                    "),t("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}})])}],!1,null,"e06e3db8",null);r.default=component.exports}}]);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("lu-ui",[],t):"object"==typeof exports?exports["lu-ui"]=t():e["lu-ui"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=8)}([function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,o=document.querySelector("style["+g+'~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var a=f++;o=p||(p=r()),t=i.bind(null,o,a,!1),n=i.bind(null,o,a,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function i(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),b.ssrId&&e.setAttribute(g,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(13),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},b=null,g="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){h=n,b=r||{};var a=c(e,t);return o(a),function(t){for(var n=[],r=0;r<a.length;r++){var i=a[r],s=l[i.id];s.refs--,n.push(s)}t?(a=c(e,t),o(a)):a=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,o,r,a){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var l;if(a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=o),l){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:i,exports:s,options:c}}},function(e,t,n){"use strict";t.a={name:"LuHelloWorld",props:{color:{type:String,default:"pink"},msg:{type:String,default:"Hello World!"}},data:function(){return{}}}},function(e,t,n){"use strict";t.a={name:"LuButton",props:{buttonDisabled:Boolean,autofocus:Boolean,icon:String,bgcolor:String,color:String},methods:{handleClick:function(e){this.$emit("click",e)}}}},function(e,t,n){"use strict";t.a={name:"LuSelect",props:{label:[String,Number],value:[String,Number],options:{type:Array,default:function(){return[]}}},data:function(){return{isShow:!1,currentOption:""}},methods:{handleToggleMenu:function(e){this.isShow=!1!==e&&!this.isShow},hideMenu:function(){!1!==this.isShow&&this.handleToggleMenu(!1)},handleSelect:function(e){this.changeValue(e.value),this.currentOption=e},changeValue:function(e){this.$emit("input",e)}},mounted:function(){document.addEventListener("click",this.hideMenu)},beforeDestroy:function(){document.removeEventListener("click",this.hideMenu)}}},function(e,t,n){"use strict";t.a={name:"LuInput",data:function(){return{}},props:{value:[String,Number],placeholder:[String,Number],disabled:{type:Boolean,default:!1}},methods:{handleInput:function(e){this.$emit("input",e.target.value)}}}},function(e,t,n){"use strict";t.a={name:"LuSwitch",data:function(){return{}},props:{value:{type:[Boolean,String,Number],default:!1},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value===this.activeValue}},methods:{handleChange:function(e){this.$emit("input",this.checked?this.inactiveValue:this.activeValue)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),r=n(15),a=n(20),i=n(25),s=n(30),u=[o.a,r.a,a.a,i.a,s.a],c=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&c(window.Vue),t.default={install:c,LuHelloWorld:o.a,LuButton:r.a,LuSelect:a.a,LuInput:i.a,LuSwitch:s.a}},function(e,t,n){"use strict";var o=n(10);o.a.install=function(e){return e.component(o.a.name,o.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o.a),t.a=o.a},function(e,t,n){"use strict";function o(e){n(11)}var r=n(3),a=n(14),i=n(2),s=o,u=i(r.a,a.a,!1,s,null,null);t.a=u.exports},function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("321caf9f",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=a[0],s=a[1],u=a[2],c=a[3],l={id:e+":"+r,css:s,media:u,sourceMap:c};o[i]?o[i].parts.push(l):n.push(o[i]={id:i,parts:[l]})}return n}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",{style:{color:e.color}},[e._v(e._s(e.msg))])},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=n(16);o.a.install=function(e){e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(17)}var r=n(4),a=n(19),i=n(2),s=o,u=i(r.a,a.a,!1,s,"data-v-09f34d90",null);t.a=u.exports},function(e,t,n){var o=n(18);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("394ec55d",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".lu-button[data-v-09f34d90]{padding:6px 20px;font-size:14px;border-radius:4px;outline:none;color:#666;cursor:pointer}",""])},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"lu-button",style:{backgroundColor:e.bgcolor,borderColor:e.bgcolor,color:e.color},attrs:{disabled:e.buttonDisabled,autofocus:e.autofocus},on:{click:e.handleClick}},[e.icon?n("img",{attrs:{src:e.icon}}):e._e(),e._v(" "),e.$slots.default?n("span",[e._t("default")],2):e._e()])},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=n(21);o.a.install=function(e){return e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(22)}var r=n(5),a=n(24),i=n(2),s=o,u=i(r.a,a.a,!1,s,"data-v-74bf107a",null);t.a=u.exports},function(e,t,n){var o=n(23);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("6140a728",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'.lu-select[data-v-74bf107a]{width:200px;position:relative;font-size:14px;display:inline-block}.lu-select span[data-v-74bf107a]{display:flex;align-items:center;width:100%;height:34px;line-height:34px;border-radius:4px;border:1px solid #999;padding-left:10px;box-sizing:border-box;color:#666;position:relative}.lu-select span .caret[data-v-74bf107a]{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:6px solid #999;display:inline-block;position:absolute;right:10px;transition:.2s linear;transform:rotate(0)}.lu-select span.active[data-v-74bf107a]{border-color:#409eff}.lu-select span.active .caret[data-v-74bf107a]{transform:rotate(-180deg)}.lu-select input[data-v-74bf107a]{outline:none;display:none}ul[data-v-74bf107a]{border:1px solid #eee;cursor:pointer;margin:10px 0 0;padding:0;border-radius:4px;color:#666;position:absolute;top:36px;left:0;width:100%;background-color:#fff;z-index:99}ul[data-v-74bf107a]:before{width:0;height:0;content:"";display:inline-block;position:absolute;top:-9px;left:10px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:8px solid #eee}li[data-v-74bf107a]{list-style:none;line-height:30px;padding-left:10px}li[data-v-74bf107a]:hover{background-color:#eee}',""])},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lu-select",on:{click:function(t){return t.stopPropagation(),e.handleToggleMenu()}}},[n("span",{class:{active:e.isShow},on:{click:function(t){return t.stopPropagation(),e.handleToggleMenu()}}},[e._v(e._s(e.currentOption.label||"请选择")+"\n      "),n("i",{staticClass:"caret"})]),e._v(" "),n("input",{domProps:{value:e.value},on:{input:e.changeValue}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},e._l(e.options,function(t){return n("li",{key:t.value,on:{click:function(n){return e.handleSelect(t)}}},[e._v(e._s(t.label))])}),0)])},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=n(26);o.a.install=function(e){return e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(27)}var r=n(6),a=n(29),i=n(2),s=o,u=i(r.a,a.a,!1,s,"data-v-7c7fd329",null);t.a=u.exports},function(e,t,n){var o=n(28);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("49b7ea79",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"input[data-v-7c7fd329]{height:34px;outline:none;border:1px solid #999;font-size:14px;color:#333;padding-left:10px;border-radius:4px;box-sizing:border-box}input[data-v-7c7fd329]:disabled{cursor:not-allowed;border-color:#eee;color:#999}input[data-v-7c7fd329]:focus{border-color:#409eff}",""])},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{staticClass:"lu-input",attrs:{type:"text",placeholder:e.placeholder,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.handleInput(t)}}})},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=n(31);o.a.install=function(e){return e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(32)}var r=n(7),a=n(34),i=n(2),s=o,u=i(r.a,a.a,!1,s,"data-v-40bc9858",null);t.a=u.exports},function(e,t,n){var o=n(33);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("5cfbfb76",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".lu-switch[data-v-40bc9858]{display:inline-block}.lu-switch>div[data-v-40bc9858],.lu-switch>span[data-v-40bc9858]{float:left}.lu-switch input[data-v-40bc9858]{display:none}.switch-box[data-v-40bc9858]{width:40px;height:20px;background-color:#13ce66;border-radius:10px;display:flex;align-items:center;padding:0 2px;box-sizing:border-box;position:relative;cursor:pointer;margin-left:6px}.switch-box.closed[data-v-40bc9858]{background-color:#ff4949}.switch-box span[data-v-40bc9858]{width:16px;height:16px;border-radius:50%;display:inline-block;background-color:#fff;position:absolute;left:22px;transition:.2s}.switch-box span.closed[data-v-40bc9858]{left:2px}",""])},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lu-switch"},[n("span",[e._t("default")],2),e._v(" "),n("div",{class:[{closed:!e.checked},"switch-box"],on:{click:function(t){return e.handleChange(e.value)}}},[n("span",{class:{closed:!e.checked}})]),e._v(" "),n("input",{attrs:{type:"checkbox","true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.disabled},domProps:{value:e.value},on:{change:e.handleChange}})])},r=[],a={render:o,staticRenderFns:r};t.a=a}])});
//# sourceMappingURL=lu-ui.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{310:function(t,n,e){var o=e(0),i=e(3),c=e(92),l=[].slice,u=function(t){return function(n,e){var o=arguments.length>2,i=o?l.call(arguments,2):void 0;return t(o?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:u(i.setTimeout),setInterval:u(i.setInterval)})},371:function(t,n,e){"use strict";e.r(n);e(310);var o,i,c,l,u={name:"debounce-demo",methods:{click:(o=function(){console.log("点击回调")},i=1e3,c=!0,function(){for(var t=this,n=arguments.length,e=new Array(n),u=0;u<n;u++)e[u]=arguments[u];clearTimeout(l),c&&void 0===l&&o.apply(this,e),l=setTimeout((function(){l=void 0,o.apply(t,e)}),i)})}},s=e(42),r=Object(s.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("button",{on:{click:this.click}},[this._v("点击我，然后在控制台查看效果")])}),[],!1,null,null,null);n.default=r.exports}}]);
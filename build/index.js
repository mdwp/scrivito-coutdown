!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("scrivito"),require("react"),require("react-moment-countdown"),require("moment")):"function"==typeof define&&define.amd?define(["scrivito","react","react-moment-countdown","moment"],t):"object"==typeof exports?exports["scrivito-countdown"]=t(require("scrivito"),require("react"),require("react-moment-countdown"),require("moment")):e["scrivito-countdown"]=t(e.scrivito,e.react,e["react-moment-countdown"],e.moment)}(window,function(e,t,r,o){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,r){"use strict";r.r(t);var o=r(0),n=(o.provideWidgetClass("CountdownWidget",{attributes:{prefix:"string",date:"date",postfix:"string"}}),r(1)),i=r(2),u=r.n(i),c=r(3),f=r.n(c);o.provideComponent("CountdownWidget",function(e){var t=e.widget,r=f()(t.get("date"),"YYYY-MM-DD HH:mm:ss");return n.createElement("h3",null,t.get("prefix"),n.createElement(u.a,{toDate:r,targetFormatMask:"YY-MM-DD HH:mm:ss"}),t.get("postfix"))}),o.provideEditingConfig("CountdownWidget",{title:"Countdown",attributes:{prefix:{title:"Prefix"},date:{title:"Date"},postfix:{title:"Postfix"}},properties:["prefix","date","postfix"]})}])});
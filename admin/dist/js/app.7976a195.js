(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=n("2f62"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],i={},c=i,u=(n("6b75"),n("2877")),l=n("6544"),f=n.n(l),d=n("7496"),h=n("f6c4"),p=Object(u["a"])(c,r,a,!1,null,"89aedaa4",null),g=p.exports;f()(p,{VApp:d["a"],VMain:h["a"]});var v=n("f309");o["a"].use(v["a"]);var y=new v["a"]({}),b=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[t._v("Question stuff")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h3",[t._v(t._s(t.questionText))])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{color:"success","x-large":""},on:{click:t.getNextQuestion}},[t._v("Get next Question")])],1)],1)],1),n("v-row",{staticClass:"py-3"},[n("v-col",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[t._v("Question ready stuff")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h3",[t._v(t._s(t.questionReadyState))])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{color:"success","x-large":""},on:{click:t.postQuestionReady}},[t._v("Question Ready")]),n("v-btn",{staticClass:"ma-2",attrs:{color:"warning",small:""},on:{click:t.postQuestionUnready}},[t._v("Question Unready")])],1)],1)],1),n("v-row",{staticClass:"py-3"},[n("v-col",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[t._v("Result stuff")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h3",[t._v(t._s(t.resultsReadyState))])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{color:"success",small:""},on:{click:t.postResultsReady}},[t._v("Set Results Ready")]),n("v-btn",{staticClass:"ma-2",attrs:{color:"warning",small:""},on:{click:t.postResultsUnready}},[t._v("Set Results UnReady")])],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{color:"primary",small:""},on:{click:t.calculateResults}},[t._v("Calculate results")])],1)],1)],1),n("v-row",{staticClass:"py-3"},[n("v-col",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[t._v("GoToLoading state stuff")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h3",[t._v(t._s(t.goToLoadingState))])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{color:"success","x-large":""},on:{click:t.postGoToLoadingReady}},[t._v("GoToLoading Ready")]),n("v-btn",{staticClass:"ma-2",attrs:{color:"warning",small:""},on:{click:t.postGoToLoadingUnready}},[t._v("GoToLoading Unready")])],1)],1)],1)],1)},j=[],w=(n("d3b7"),{data:function(){return{getDataInterval:"",questionText:"questionText",questionReadyState:"questionReadyState",goToLoadingState:"goToLoadingState",resultsReadyState:"resultsReadyState"}},methods:{setQuestionText:function(t){this.questionText=t},setquestionReadyState:function(t){this.questionReadyState=t},setgoToLoadingState:function(t){this.goToLoadingState=t},setresultsReadyState:function(t){this.resultsReadyState=t},getNextQuestion:function(){var t="";t="https://topkerst.icheered.nl/api/admin/question/getnew",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},postQuestionReady:function(){var t="";t="https://topkerst.icheered.nl/api/admin/question/setready?ready=true",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},postQuestionUnready:function(){var t="";t="https://topkerst.icheered.nl/api/admin/question/setready?ready=false",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},postResultsReady:function(){var t="";t="https://topkerst.icheered.nl/api/admin/results/setready?ready=true",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},postResultsUnready:function(){var t="";t="https://topkerst.icheered.nl/api/admin/results/setready?ready=false",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},calculateResults:function(){var t="";t="https://topkerst.icheered.nl/api/admin/results/calculate",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},postGoToLoadingReady:function(){var t="";t="https://topkerst.icheered.nl/api/admin/question/setnextready?ready=true",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},postGoToLoadingUnready:function(){var t="";t="https://topkerst.icheered.nl/api/admin/question/setnextready?ready=true",fetch(t,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},getData:function(){var t=this,e="";e="https://topkerst.icheered.nl/api/question",fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.setQuestionText(e)})).catch((function(t){console.log(t)})),e="https://topkerst.icheered.nl/api/question/ready",fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.setquestionReadyState(e)})).catch((function(t){console.log(t)})),e="https://topkerst.icheered.nl/api/results/ready",fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.setresultsReadyState(e)})).catch((function(t){console.log(t)})),e="https://topkerst.icheered.nl/api/question/nextquestion",fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.setgoToLoadingState(e)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getDataInterval=setInterval((function(){t.getData()}),1e3)}}),R=w,_=n("8336"),S=n("62ad"),k=n("a523"),x=n("0fd9"),T=Object(u["a"])(R,m,j,!1,null,null,null),q=T.exports;f()(T,{VBtn:_["a"],VCol:S["a"],VContainer:k["a"],VRow:x["a"]});var O=[{path:"/",name:"home",component:q}];o["a"].use(b["a"]);var L=new b["a"]({routes:O}),Q=L;o["a"].use(s["a"]);var C=new s["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0}},mutations:{updateBingo:function(t,e){var n=e.blockState,o=e.i,s=e.j;this.state.bingo[o][s]=n?1:0;for(var r=!1,a=0;a<this.state.bingo.length;a++)for(var i=0,c=0;c<this.state.bingo[a].length;c++)1==this.state.bingo[a][c]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,r=!0);for(a=0;a<this.state.bingo.length;a++)for(i=0,c=0;c<this.state.bingo[a].length;c++)1==this.state.bingo[c][a]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,r=!0);for(i=0,a=0;a<this.state.bingo.length;a++)1==this.state.bingo[a][a]&&(i+=1);for(5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,r=!0),i=0,a=0;a<this.state.bingo.length;a++)1==this.state.bingo[a][4-a]&&(i+=1);5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,r=!0),r||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),G=C;o["a"].config.productionTip=!1,o["a"].use(s["a"]),o["a"].component("app",g),new o["a"]({vuetify:y,router:Q,store:G,render:function(t){return t(g)}}).$mount("#app")},"6b75":function(t,e,n){"use strict";n("e4aa")},e4aa:function(t,e,n){}});
//# sourceMappingURL=app.7976a195.js.map
(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],h=0,f=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f7c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("2f62"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},s=[],i={},l=i,c=(n("6b759"),n("2877")),u=n("6544"),h=n.n(u),f=n("7496"),d=n("f6c4"),p=Object(c["a"])(l,a,s,!1,null,"89aedaa4",null),v=p.exports;h()(p,{VApp:f["a"],VMain:d["a"]});var g=n("f309");r["a"].use(g["a"]);var m=new g["a"]({}),y=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-row",[n("h1",{staticClass:"text-center display-3"},[t._v("Wait for the next question")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{size:"64",indeterminate:""}})],1)],1)},_=[],w=(n("d3b7"),{data:function(){return{getQuestionReadyInterval:""}},methods:{goToSelecting:function(){this.$router.push("/selecting",(function(){}))},getQuestionReady:function(){var t=this,e="https://topkerst.icheered.nl/api/question/ready";fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){console.log(e),e&&(console.log("Is ready!"),clearInterval(t.getQuestionReadyInterval),t.goToSelecting())})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.getQuestionReadyInterval=setInterval((function(){t.getQuestionReady()}),1e3)}}),C=w,j=n("a523"),V=n("490a"),x=n("0fd9"),k=Object(c["a"])(C,b,_,!1,null,null,null),I=k.exports;h()(k,{VContainer:j["a"],VProgressCircular:V["a"],VRow:x["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("h1",{staticClass:"display-3 text-center pb-10"},[t._v("Results")]),n("v-simple-table",{staticClass:"px-5",scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",{attrs:{align:"center",justify:"center"}},t._l(t.items,(function(e,r){return n("tr",{key:e.id},[n("v-col",[n("v-row",[n("td",{staticClass:"customsize pl-5 pr-5 text-center"},[t._v(" "+t._s(r+1)+" ")]),n("td",{staticClass:"customsize pl-5 pr-5",attrs:{width:"200px"}},[t._v(" "+t._s(e.title)+" ")])]),n("v-row",[n("v-divider")],1)],1)],1)})),0)]},proxy:!0}])})],1)},O=[],T={data:function(){return{items:[{id:1,title:"Temp1"},{id:2,title:"Temp2"},{id:3,title:"Temp3"}],waitingInterval:""}},methods:{setData:function(t){this.items=t},getResults:function(){var t=this,e="https://topkerst.icheered.nl/api/results";fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){console.log(e);for(var n=[],r=0;r<e.length;r++)n.push({id:r+1,title:e[r]});t.setData(n)})).catch((function(t){console.log(t)}))},getQuestionReady:function(){var t=this,e="https://topkerst.icheered.nl/api/question/nextquestion";fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){console.log(e),e&&(console.log("Is ready!"),t.goToLoading())})).catch((function(t){console.log(t)}))},goToLoading:function(){clearInterval(this.waitingInterval),this.$router.push("/",(function(){}))}},mounted:function(){var t=this;this.getResults(),this.waitingInterval=setInterval((function(){t.getQuestionReady()}),1e3)}},R=T,D=(n("5ecc"),n("62ad")),M=n("ce7e"),P=n("1f4f"),$=Object(c["a"])(R,S,O,!1,null,"77e36714",null),q=$.exports;h()($,{VCol:D["a"],VContainer:j["a"],VDivider:M["a"],VRow:x["a"],VSimpleTable:P["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("v-col",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-2"},[t._v(t._s(t.quote))])]),n("v-row",{staticClass:"py-3"},[n("v-spacer"),n("v-divider"),n("v-divider"),n("v-divider"),n("v-spacer")],1),n("v-row",[n("v-spacer"),n("v-col",[n("p",{staticClass:"text-right"},[t._v("Ik ben")])]),n("v-col",{staticClass:"pt-1",attrs:{align:"left",justify:"left"}},[n("v-menu",{attrs:{"open-on-hover":"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",required:"true"}},"v-btn",o,!1),r),[t._v(" "+t._s(t.name)+" "),n("v-icon",{attrs:{right:""}},[t._v("fa-angle-down")])],1)]}}])},[n("v-list",t._l(t.people,(function(e,r){return n("v-list-item",{key:r,attrs:{link:""},on:{click:function(n){t.name=e}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),n("v-spacer")],1),n("v-row",{staticClass:"pt-0 pb-5"},[n("v-spacer"),n("v-divider"),n("v-divider"),n("v-divider"),n("v-spacer")],1),n("v-row",{staticClass:"pt-5 pb-3",attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center pb-5"},[t._v("Mijn ranking")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-sheet",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",{attrs:{align:"center",justify:"center"}},[n("draggable",{attrs:{list:t.items}},t._l(t.items,(function(e,r){return n("tr",{key:e.id},[n("v-col",[n("v-row",[n("td",{staticClass:"customsize pl-5 pr-5 text-center"},[t._v(t._s(r+1))]),n("td",{staticClass:"customsize pl-5 pr-5",attrs:{width:"200px"}},[t._v(t._s(e.title)+" ")]),n("v-col",{staticClass:"py-0"},[n("td",{staticClass:"pl-5",attrs:{right:""}},[n("v-icon",{attrs:{large:"",center:""}},[t._v(" mdi-arrow-all ")])],1)])],1),n("v-row",[n("v-divider")],1)],1)],1)})),0)],1)]},proxy:!0}])})],1)],1),n("v-row",{staticClass:"pt-8",attrs:{align:"center",justify:"center"}},["Select name"===t.name?n("v-btn",{attrs:{disabled:"","x-large":""},on:{click:t.onKlaarClick}},[n("h1",[t._v("Verstuur!")])]):n("v-btn",{attrs:{color:"success","x-large":""},on:{click:t.onKlaarClick}},[n("h1",[t._v("Verstuur!")])])],1)],1)],1)},Q=[],B=(n("b0c0"),n("53ca")),z=n("b76a"),E=n.n(z),L={components:{draggable:E.a},data:function(){return{quote:"Placeholder question?",people:["Naam1","Naam2","Naam3"],name:"Select name",items:[{id:1,title:"Naam1"},{id:2,title:"Naam2"},{id:3,title:"Naam3"}]}},methods:{printlist:function(){for(var t=0;t<this.items.length;t++)console.log(this.items[t].title);console.log("----")},onUpdate:function(){this.$emit("updated",this.list),console.log("Updated");for(var t=0;t<this.items.length;t++)console.log(this.items[t].title)},onKlaarClick:function(){console.log("Submitted");var t={owner:this.name,order:this.items},e="https://topkerst.icheered.nl/api/results?result=%7B%22owner%22%3A%22";e+=t.owner,e+="%22%2C%22order%22%3A%5B%7B%22";for(var n=0;n<t.order.length;n++)e+="id%22%3A"+t.order[n].id+"%2C%22title%22%3A%22"+t.order[n].title,n==t.order.length-1?e+="%22%7D%5D%7D":e+="%22%7D%2C%7B%22";console.log("Personal Order"),console.log(JSON.stringify(t)),console.log("postURL:"),console.log(e),console.log("undefined"===typeof output?"undefined":Object(B["a"])(output)),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){console.log("Success:",t)})).catch((function(t){console.error("Error:",t)})),this.goToWaitforresults()},goToWaitforresults:function(){this.$router.push("/waitforresults",(function(){}))},setNames:function(t){this.people=t},setItems:function(t){this.items=t},setQuestion:function(t){this.quote=t}},mounted:function(){var t=this,e="https://topkerst.icheered.nl/api/people";fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){if(console.log(e),e){t.setNames(e);for(var n=[],r=0;r<e.length;r++)n.push({id:r+1,title:e[r]}),t.setItems(n)}})).catch((function(t){console.log(t)}));var n="https://topkerst.icheered.nl/api/question";fetch(n,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){console.log(e),t.setQuestion(e)})).catch((function(t){console.log(t)}))}},W=L,A=(n("b37a"),n("8336")),J=n("132d"),K=n("8860"),U=n("da13"),G=n("5d23"),F=n("e449"),H=n("8dd9"),X=n("2fa4"),Y=Object(c["a"])(W,N,Q,!1,null,"5a19e17c",null),Z=Y.exports;h()(Y,{VBtn:A["a"],VCol:D["a"],VContainer:j["a"],VDivider:M["a"],VIcon:J["a"],VList:K["a"],VListItem:U["a"],VListItemTitle:G["a"],VMenu:F["a"],VRow:x["a"],VSheet:H["a"],VSimpleTable:P["a"],VSpacer:X["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"text-center display-3"},[t._v("Wait for results...")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{size:"64",indeterminate:""}})],1),n("v-row",[n("v-col",[n("v-row",{staticClass:"pb-2",attrs:{align:"center",justify:"center"}},[n("h2",[t._v("Vlugge mensen")])]),n("v-row",{staticClass:"pa-0",attrs:{align:"center",justify:"center"}},t._l(t.people_that_are_ready,(function(e){return n("v-sheet",{key:e,staticClass:"pa-0"},[n("v-btn",{staticClass:"mx-1",attrs:{color:t.mycolor},on:{click:t.generator}},[t._v(t._s(e))])],1)})),1)],1)],1)],1)},et=[],nt={data:function(){return{people_that_are_ready:[],waitingInterval:"",mycolor:"primary"}},methods:{setData:function(t){this.people_that_are_ready=t},generator:function(){var t=["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange"],e=["lighten","darken","accent"],n=[1,2,3,4],r=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*e.length),a=Math.floor(Math.random()*n.length);this.mycolor=t[r]+" "+e[o]+"-"+n[a]},goToResults:function(t){t.status?(console.log("Done!"),clearInterval(this.waitingInterval),this.$router.push("/results",(function(){}))):this.setData(t.people)},getDoneWaiting:function(){var t=this,e="https://topkerst.icheered.nl/api/results/ready";fetch(e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.goToResults(e)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.waitingInterval=setInterval((function(){t.getDoneWaiting()}),1e3)}},rt=nt,ot=Object(c["a"])(rt,tt,et,!1,null,null,null),at=ot.exports;h()(ot,{VBtn:A["a"],VCol:D["a"],VContainer:j["a"],VProgressCircular:V["a"],VRow:x["a"],VSheet:H["a"]});var st=[{path:"/",name:"loading",component:I},{path:"/waitforresults",name:"waitforresults",component:at},{path:"/results",name:"results",component:q},{path:"/selecting",name:"selecting",component:Z}];r["a"].use(y["a"]);var it=new y["a"]({routes:st}),lt=it;r["a"].use(o["a"]);var ct=new o["a"].Store({state:{bingo:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],render:{bingo:!1,overlay:!1,canGetOverlay:!0}},mutations:{updateBingo:function(t,e){var n=e.blockState,r=e.i,o=e.j;this.state.bingo[r][o]=n?1:0;for(var a=!1,s=0;s<this.state.bingo.length;s++)for(var i=0,l=0;l<this.state.bingo[s].length;l++)1==this.state.bingo[s][l]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,a=!0);for(s=0;s<this.state.bingo.length;s++)for(i=0,l=0;l<this.state.bingo[s].length;l++)1==this.state.bingo[l][s]&&(i+=1),5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,a=!0);for(i=0,s=0;s<this.state.bingo.length;s++)1==this.state.bingo[s][s]&&(i+=1);for(5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,a=!0),i=0,s=0;s<this.state.bingo.length;s++)1==this.state.bingo[s][4-s]&&(i+=1);5==i&&(this.state.render.bingo=!0,this.state.render.overlay=!0,a=!0),a||(this.state.render.bingo=!1,this.state.render.overlay=!1,this.state.render.canGetOverlay=!0),console.log()}},actions:{}}),ut=ct;r["a"].config.productionTip=!1,r["a"].use(o["a"]),r["a"].component("app",v),new r["a"]({vuetify:m,router:lt,store:ut,render:function(t){return t(v)}}).$mount("#app")},"5ea7":function(t,e,n){},"5ecc":function(t,e,n){"use strict";n("5ea7")},"6b759":function(t,e,n){"use strict";n("e4aa")},b37a:function(t,e,n){"use strict";n("0f7c")},e4aa:function(t,e,n){}});
//# sourceMappingURL=app.84d5cb08.js.map
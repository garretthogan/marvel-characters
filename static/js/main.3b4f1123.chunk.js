(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(269)},172:function(e,t,a){},175:function(e){e.exports={API_KEY:"5142b2959635103f816b1534685a2fd0"}},269:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(21),c=a.n(r),i=(a(172),a(64)),l=a(65),s=a(70),u=a(66),h=a(71),d=a(72),f=a(10),m=a(67),g=a.n(m),v=a(68),p=a.n(v),y=a(175),E=20,w=function(e){return fetch("".concat("https://gateway.marvel.com/v1/public","/characters?").concat(g.a.stringify(Object(d.a)({},e,{apikey:y.API_KEY})))).then(function(e){return e.json()}).then(function(e){return{total:e.data.total,characters:e.data.results}})},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onInput=function(e){a.setState({keyword:e.target.value})},a.search=function(){a.loadPage()},a.loadPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a.state.keyword;a.setState(function(t){return{loading:!0,searchOffset:e}}),w({nameStartsWith:t,offset:e}).then(function(e){a.setState({loading:!1,searchResults:e.characters,total:e.total})})},a.getNextPage=function(){var e=a.state.searchOffset+E;a.loadPage(e)},a.getPreviousPage=function(){var e=a.state.searchOffset-E;a.loadPage(e)},a.state={keyword:"",searchResults:[],searchOffset:0,total:0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.keyword,a=e.searchResults,n=e.total,r=e.searchOffset,c=e.loading;return o.a.createElement("div",null,o.a.createElement(f.a,{position:"sticky"},o.a.createElement(f.h,null,o.a.createElement("div",{style:{padding:12,color:"white"}},o.a.createElement(f.f,{style:{color:"inherit"},value:t,onChange:this.onInput,placeholder:"Character..."})),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(f.b,{style:{float:"right",color:"inherit"},onClick:this.search},"Search"))),c&&o.a.createElement(f.g,{color:"secondary"})),o.a.createElement("div",null,a.map(function(e,t){return o.a.createElement("div",{style:{padding:12},key:t},o.a.createElement(f.c,{style:{maxWidth:400}},o.a.createElement(f.e,{style:{height:0,paddingTop:"56.25%"},image:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),title:e.name}),o.a.createElement(f.d,{title:e.name,subheader:p()(e.description)})))})),o.a.createElement("div",null,r>=E&&o.a.createElement("button",{onClick:this.getPreviousPage},"Previous Page"),r<n-E&&o.a.createElement("button",{onClick:this.getNextPage},"Next Page")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.3b4f1123.chunk.js.map
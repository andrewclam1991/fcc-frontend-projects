(this["webpackJsonpaclam-fcc-frontend-projects"]=this["webpackJsonpaclam-fcc-frontend-projects"]||[]).push([[0],{40:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),u=(n(40),n(32)),i=n(15),s=n(12),d=n(31),l=n(35),f=n(19),j=n(33),h=n(34),b=n(10),m=b.c,p=n(9),x=n.n(p),O=n(14),v=n(8),w=n(30),g=n.n(w);var q=Object(v.b)("quote/getRandomQuote",Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.data})).then((function(e){return e.quotes}));case 2:return t=e.sent,n=Math.floor(Math.random()*t.length),e.abrupt("return",t[n]);case 5:case"end":return e.stop()}}),e)})))),y=Object(v.c)({name:"quote",initialState:{quote:"",author:"",tweetQuote:"",status:"idle"},reducers:{},extraReducers:function(e){e.addCase(q.rejected,(function(e){e.status="failed"})).addCase(q.pending,(function(e){e.status="loading"})).addCase(q.fulfilled,(function(e,t){e.status="idle",e.quote=t.payload.quote,e.author=t.payload.author,e.tweetQuote="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(encodeURIComponent('"'.concat(e.quote,'"- ').concat(e.author)))}))}}).reducer,k=n(3);function C(){var e=m((function(e){return e.quote})),t=Object(b.b)();return Object(c.useEffect)((function(){t(q())}),[t]),Object(k.jsx)(d.a,{fluid:!0,id:"quote-box",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(i.a,{children:Object(k.jsx)(s.a,{children:Object(k.jsxs)("h1",{id:"text",className:"display-5",children:[Object(k.jsx)(f.a,{icon:j.a}),"\xa0",e.quote]})})}),Object(k.jsx)(i.a,{children:Object(k.jsx)(s.a,{children:Object(k.jsx)("p",{className:"lead text-right",id:"author",children:e.author})})}),Object(k.jsxs)(i.a,{children:[Object(k.jsx)(s.a,{children:Object(k.jsx)("a",{id:"tweet-quote",href:e.tweetQuote,target:"_blank",rel:"noreferrer",className:"display-4",children:Object(k.jsx)(f.a,{icon:h.a})})}),Object(k.jsx)(s.a,{children:Object(k.jsx)("p",{className:"lead text-right",children:Object(k.jsx)(l.a,{variant:"primary",id:"new-quote",onClick:function(){return t(q())},children:"New Quote"})})})]})]})})}n(65),n(66);var N=function(){return Object(k.jsx)(C,{})};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var B=Object(v.b)("counter/fetchCount",function(){var e=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=Object(v.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(B.pending,(function(e){e.status="loading"})).addCase(B.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),M=R.actions,S=(M.increment,M.decrement,M.incrementByAmount,R.reducer),A=Object(v.a)({reducer:{quote:y,counter:S}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(b.a,{store:A,children:Object(k.jsx)(N,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.fbe0dba4.chunk.js.map
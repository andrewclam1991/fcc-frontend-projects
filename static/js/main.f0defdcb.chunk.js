(this["webpackJsonpaclam-fcc-playground"]=this["webpackJsonpaclam-fcc-playground"]||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){},158:function(e,t){},182:function(e,t){},189:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),o=n.n(c),i=(n(110),n(39)),u=n(7),s=(n(111),n(112),n(102)),d=n(38),l=n(21),j=n(101),h=n(105),f=n(55),b=n(103),m=n(104),x=n(28),O=function(){return Object(x.b)()},p=x.c,w=n(20),g=n.n(w),v=n(37),y=n(16),k=n(100),q=n.n(k);var C=Object(y.b)("quote/getRandomQuote",Object(v.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.data})).then((function(e){return e.quotes}));case 2:return t=e.sent,n=Math.floor(Math.random()*t.length),e.abrupt("return",t[n]);case 5:case"end":return e.stop()}}),e)})))),A=Object(y.c)({name:"quote",initialState:{quote:"",author:"",tweetQuote:"",status:"idle"},reducers:{},extraReducers:function(e){e.addCase(C.rejected,(function(e){e.status="failed",e.quote="",e.author="",e.tweetQuote=""})).addCase(C.pending,(function(e){e.status="loading"})).addCase(C.fulfilled,(function(e,t){e.status="idle",e.quote=t.payload.quote,e.author=t.payload.author,e.tweetQuote="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(encodeURIComponent('"'.concat(e.quote,'"- ').concat(e.author)))}))}}).reducer,L=n(2);function Q(){var e=p((function(e){return e.quote})),t=O();return Object(r.useEffect)((function(){t(C())}),[t]),Object(L.jsx)(j.a,{fluid:!0,id:"quote-box",children:Object(L.jsxs)(s.a,{children:[Object(L.jsx)(d.a,{children:Object(L.jsx)(l.a,{children:Object(L.jsxs)("h1",{id:"text",className:"display-5",children:[Object(L.jsx)(f.a,{icon:b.a}),"\xa0",e.quote]})})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(l.a,{children:Object(L.jsx)("p",{className:"lead text-right",id:"author",children:e.author})})}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(l.a,{children:Object(L.jsx)("a",{id:"tweet-quote",href:e.tweetQuote,target:"_blank",rel:"noreferrer",className:"display-4",children:Object(L.jsx)(f.a,{icon:m.a})})}),Object(L.jsx)(l.a,{children:Object(L.jsx)("p",{className:"lead text-right",children:Object(L.jsx)(h.a,{variant:"primary",id:"new-quote",onClick:function(){return t(C())},children:"New Quote"})})})]})]})})}var T=n(190),R=n(56),_=n.n(R),B=n(57),I=n.n(B),M=function(e){return _.a.setOptions({gfm:!0,breaks:!0}),I()(_()(e),{allowedTags:I.a.defaults.allowedTags.concat(["img"])})},S=Object(y.c)({name:"markdown",initialState:{input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",output:""},reducers:{setInput:function(e,t){e.input=t.payload,e.output=M(e.input)},getOuput:function(e){e.output=M(e.input)}}}),E=S.actions,H=E.setInput,N=E.getOuput,W=S.reducer,P=function(){var e=p((function(e){return e.markdown.input})),t=O();return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(T.a,{children:Object(L.jsxs)(T.a.Group,{children:[Object(L.jsx)(T.a.Label,{children:"Editor"}),Object(L.jsx)(T.a.Control,{id:"editor",as:"textarea",rows:5,value:e,onChange:function(e){t(H(e.target.value))}})]})})})},z=n(191),G=function(){var e=p((function(e){return e.markdown.output})),t=O();return Object(r.useEffect)((function(){t(N())}),[t]),Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(T.a,{children:Object(L.jsxs)(T.a.Group,{children:[Object(L.jsx)(T.a.Label,{children:"Previewer"}),Object(L.jsx)(z.a,{children:Object(L.jsx)(z.a.Body,{children:Object(L.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:e}})})})]})})})};function U(){return Object(L.jsx)(s.a,{fluid:!0,children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(l.a,{xs:12,md:6,lg:6,children:Object(L.jsx)(P,{})}),Object(L.jsx)(l.a,{xs:12,md:6,lg:6,children:Object(L.jsx)(G,{})})]})})}function F(){return Object(L.jsxs)(i.a,{children:[Object(L.jsx)("div",{children:Object(L.jsx)("nav",{children:Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:Object(L.jsx)(i.b,{to:"/random-quote-generator",children:"Random Quote Generator"})}),Object(L.jsx)("li",{children:Object(L.jsx)(i.b,{to:"/markdown-previewer",children:"Markdown Previewer"})})]})})}),Object(L.jsxs)(u.c,{children:[Object(L.jsx)(u.a,{path:"/random-quote-generator",component:Q}),Object(L.jsx)(u.a,{path:"/markdown-previewer",component:U}),Object(L.jsx)(u.a,{path:"/",component:Q})]})]})}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var Y=Object(y.b)("counter/fetchCount",function(){var e=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=Object(y.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Y.pending,(function(e){e.status="loading"})).addCase(Y.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),D=$.actions,K=(D.increment,D.decrement,D.incrementByAmount,$.reducer),V=Object(y.a)({reducer:{quote:A,counter:K,markdown:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(x.a,{store:V,children:Object(L.jsx)(F,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t){},83:function(e,t){},89:function(e,t){}},[[189,1,2]]]);
//# sourceMappingURL=main.f0defdcb.chunk.js.map
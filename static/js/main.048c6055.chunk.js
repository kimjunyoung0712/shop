(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(13),a=c.n(s),j=(c(60),c(25)),r=c(9),l=(c(61),c(92)),o=c(91),d=c(93),b=[{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:0,title:"White and Black",content:"Born in France",price:12e4}],h=c(8),O=c(1);function u(e){var t=e.stock;return Object(O.jsxs)("p",{children:["\uc7ac\uace0 : ",t[0]]})}var x=function(e){var t=e.shoes,c=e.stock,i=e.setStock;console.log("\ud83d\ude80 ~ file: detail.js ~ line 17 ~ Detail ~ stock",c),console.log("\ud83d\ude80 ~ file: detail.js ~ line 17 ~ Detail ~ shoes",t);var s=Object(n.useState)(!0),a=Object(r.a)(s,2),l=a[0],o=a[1];Object(n.useEffect)((function(){setTimeout((function(){o(!l)}),2e3)}),[]);var d=Object(h.f)().id2,b=Object(h.e)(),x=t.map((function(e){return e.id})).indexOf(Number(d));return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container",children:[l?Object(O.jsx)("div",{className:"my-alert2",children:Object(O.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):null,Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(t[x].id+1)+".jpg",width:"100%",alt:"1"})}),Object(O.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(O.jsx)("h4",{className:"pt-5",children:t[x].title}),Object(O.jsx)("p",{children:t[x].content}),Object(O.jsx)("p",{children:t[x].price}),Object(O.jsx)(u,{stock:c,setStock:i}),Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){var e=Object(j.a)(c);e[0]=e[0]-1,i(e)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){b.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})})},p=c(51),m=c.n(p),f=c(90),g=c(34);var v=Object(g.b)((function(e){return{state:e}}))((function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(f.a,{responsive:!0,children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(O.jsx)("th",{children:"\uc218\ub7c9"}),Object(O.jsx)("th",{children:"\ubcc0\uacbd"})]}),e.state.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.quan}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){},children:" + "})})]},t)}))]})})})),k=c(24);function N(e){return Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%",alt:"1"}),Object(O.jsx)("h4",{children:e.shoes.title}),Object(O.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var w=function(){c(13),window.React2=c(0),console.log(window.React1===window.React2);var e=Object(n.useState)(b),t=Object(r.a)(e,2),i=t[0],s=t[1],a=Object(n.useState)(!1),u=Object(r.a)(a,2),p=u[0],f=u[1],g=Object(n.useState)([10,11,12]),w=Object(r.a)(g,2),S=w[0],C=w[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(l.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(d.a,{className:"me-auto",children:[Object(O.jsx)(d.a.Link,{children:Object(O.jsx)(k.b,{to:"/",children:"\ud648"})}),Object(O.jsx)(d.a.Link,{children:Object(O.jsx)(k.b,{to:"/detail/1",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),Object(O.jsx)(d.a.Link,{children:Object(O.jsx)(k.b,{to:"/cart",children:"\uce74\ud2b8"})})]})})]})}),Object(O.jsxs)(h.a,{exact:!0,path:"/",children:[Object(O.jsxs)("div",{className:"jumbotron",children:[Object(O.jsx)("h1",{children:"20% Sale"}),Object(O.jsx)("p",{children:"this is a example sentence of making website"})]}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:i.map((function(e,t){return Object(O.jsx)(N,{shoes:i[t],i:t},t)}))})})]}),Object(O.jsx)(h.a,{path:"/detail/:id2",children:Object(O.jsx)(x,{shoes:i,stock:S,setStock:C})}),Object(O.jsx)(h.a,{path:"/cart",children:Object(O.jsx)(v,{})}),Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){f(!0);var e=setTimeout((function(){m.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),f(!1),s([].concat(Object(j.a)(i),Object(j.a)(e.data)))})).catch((function(){console.log("\uc694\uccad \uc2e4\ud328")}))}),3e3);return function(){clearTimeout(e)}},children:"\ub354\ubcf4\uae30"}),p?Object(O.jsx)("p",{children:'"\ub85c\ub529 \uc911\uc785\ub2c8\ub2e4"'}):null]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},C=c(54),q=Object(C.a)((function(){return[{id:0,name:"\uc6b4\ub3d9\ud654",quan:7},{id:1,name:"\uad6c\ub450",quan:8},{id:2,name:"\ub7ec\ub2dd\ud654",quan:5},{id:3,name:"\uc2ac\ub9ac\ud37c",quan:4},{id:4,name:"\ub871\ubd80\uce20",quan:11},{id:5,name:"\uc720\uc544\uc6a9\uc6b4\ub3d9\ud654",quan:23}]}));a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(k.a,{children:Object(O.jsx)(g.a,{store:q,children:Object(O.jsx)(w,{})})})}),document.getElementById("root")),S()}},[[88,1,2]]]);
//# sourceMappingURL=main.048c6055.chunk.js.map
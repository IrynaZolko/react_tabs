(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),o=n(5),i=n(8),b=n(7),l=n(1),r=n.n(l),d=n(6),j=n.n(d),u=(n(13),n(0)),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={copyTabs:[].concat(h),selectedTab:"Tab 1",contentOfSelectedTab:"Some text 1"},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.copyTabs,c=e.selectedTab,a=e.contentOfSelectedTab;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"selected-tab",children:"Selected tab is ".concat(c)}),Object(u.jsx)("ul",{className:"nav",children:n.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",className:"nav__item",onClick:function(){t.setState({selectedTab:"".concat(e.title),contentOfSelectedTab:"".concat(e.content)})},children:e.title},e.id),Object(u.jsx)("span",{className:j()("content-hidden",{"content-visible":a===e.content}),children:e.content})]})}))})]})}}]),n}(r.a.Component),m=p;a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.304b7cd6.chunk.js.map
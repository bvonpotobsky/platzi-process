(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(4),r=c.n(o),a=c(7),s=c(2);var l=c(0),d=Object(n.createContext)();function i(e){var t=function(e,t){var c=Object(n.useState)(!1),o=Object(s.a)(c,2),r=o[0],a=o[1],l=Object(n.useState)(!0),d=Object(s.a)(l,2),i=d[0],u=d[1],j=Object(n.useState)(t),O=Object(s.a)(j,2),b=O[0],m=O[1];return Object(n.useEffect)((function(){setTimeout((function(){try{var c,n=localStorage.getItem(e);n?c=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),c=t),m(c),u(!1)}catch(r){a(r)}}),1e3)}),[]),{item:b,saveItem:function(t){try{var c=JSON.stringify(t);localStorage.setItem(e,c),m(t)}catch(r){a(r)}},loading:i,error:r}}("TODOS_V1",[]),c=t.item,o=t.saveItem,r=t.loading,i=t.error,u=Object(n.useState)(""),j=Object(s.a)(u,2),O=j[0],b=j[1],m=Object(n.useState)(!1),h=Object(s.a)(m,2),p=h[0],f=h[1],x=c.filter((function(e){return!!e.completed})).length,g=c.length,v=[];v=!O.length>=1?c:c.filter((function(e){var t=e.text.toLowerCase(),c=O.toLowerCase();return t.includes(c)}));return console.log("Render antes del useEffect"),Object(n.useEffect)((function(){console.log("useEffect")}),[g]),console.log("Render despues del useEffect"),Object(l.jsx)(d.Provider,{value:{loading:r,error:i,totalTodos:g,completedTodos:x,searchValue:O,setSearchValue:b,searchedTodos:v,completeTodo:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(a.a)(c);n[t].completed=!n[t].completed,o(n)},deleteTodo:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(a.a)(c);n.splice(t,1),o(n)},openModal:p,setOpenModal:f},children:e.children})}function u(){var e=Object(n.useContext)(d),t=e.totalTodos,c=e.completedTodos;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"TodoCounter__title",children:"What's up"}),Object(l.jsxs)("h2",{className:"TodoCounter__counter",children:["Has completado ",c," de ",t," TODOs"]})]})}function j(){var e=Object(n.useContext)(d),t=e.searchValue,c=e.setSearchValue;return Object(l.jsx)("input",{className:"TodoSearch",value:t,onChange:function(e){c(e.target.value)},placeholder:"Ingresa algo para hacer"})}function O(e){return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:e.children})})}function b(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u2705"}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--completed"),children:e.text}),Object(l.jsx)("button",{onClick:e.onDelete,className:"Icon Icon-delete",children:"\ud83d\uddd1\ufe0f"})]})}function m(e){var t=e.openModal,c=e.setOpenModal;return Object(l.jsx)("button",{className:"TodoButton",onClick:function(){c(!t)},children:"+"})}function h(e){var t=e.children;return r.a.createPortal(Object(l.jsx)("div",{className:"Modal",children:t}),document.getElementById("modal"))}function p(){var e,t=Object(n.useContext)(d),c=t.error,o=t.loading,r=t.searchedTodos,a=t.completeTodo,s=t.deleteTodo,i=t.openModal,p=t.setOpenModal;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(j,{}),Object(l.jsxs)(O,{children:[o&&Object(l.jsx)("p",{children:"Estamos cargando los items.."}),c&&Object(l.jsx)("p",{children:"Estamos cargando los items.."}),!o&&!r.length&&Object(l.jsx)("p",{children:"Crea tu primer TODO!"}),r.map((function(e){return Object(l.jsx)(b,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]}),i&&Object(l.jsx)(h,{children:Object(l.jsx)("p",{children:null===(e=r[0])||void 0===e?void 0:e.text})}),Object(l.jsx)(m,{setOpenModal:p})]})}c(13);var f=function(){return Object(l.jsx)(i,{children:Object(l.jsx)(p,{})})};r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2c84e4c1.chunk.js.map
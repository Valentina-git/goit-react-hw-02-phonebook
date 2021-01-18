(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{24:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var a=e(0),c=e(1),r=e.n(c),o=e(14),i=e.n(o),s=(e(23),e(24),e(5)),l=e(12),b=e(2),d=e(8),u=e(3),j=e(4);function m(){var n=Object(u.a)(["\n  padding: 20px 0;\n  width: 100%;\n  background-color: #efefef;\n  .form-label {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 10px;\n  }\n  .form-input {\n    display: block;\n    width: 100%;\n  }\n  .form-btn {\n    padding: 5px 10px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .form-btn:hover,\n  .form-btn:focus {\n    background-color: yellow;\n  }\n"]);return m=function(){return n},n}var p=j.a.div(m()),x=e(31),f={name:"",contact:""},O=function(n){var t=n.getUser,e=Object(c.useState)(Object(b.a)({},f)),r=Object(d.a)(e,2),o=r[0],i=r[1],l=function(n){var t=n.target,e=t.value,a=t.name;i(Object(b.a)(Object(b.a)({},o),{},Object(s.a)({},a,e)))};return Object(a.jsx)(p,{children:Object(a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(Object(b.a)(Object(b.a)({},o),{},{id:Object(x.a)(),name:o.name,contact:o.contact}))},children:[Object(a.jsxs)("label",{className:"form-label",children:["Name:",Object(a.jsx)("input",{className:"form-input",type:"text",name:"name",value:o.name,onChange:l})]}),Object(a.jsxs)("label",{className:"form-label",children:["Contact:",Object(a.jsx)("input",{className:"form-input",type:"text",name:"contact",value:o.contact,onChange:l})]}),Object(a.jsx)("button",{className:"form-btn",type:"submit",children:"Add contact"})]})})};function h(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 15px;\n  border: 1px solid navy;\n  border-radius: 5px;\n  box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  .contactListName {\n    font-weight: 700;\n    margin-right: 5px;\n  }\n  .contactListNumber {\n    margin-right: 5px;\n  }\n  .contactListBtn {\n    padding: 5px 15px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .contactListBtn:hover,\n  .contactListBtn:focus {\n    background-color: yellow;\n  }\n"]);return h=function(){return n},n}var g=j.a.li(h()),v=function(n){var t=n.item,e=n.onBtnClick;return Object(a.jsxs)(g,{className:"contactListItem",children:[Object(a.jsxs)("span",{className:"contactListName",children:[t.name,":"]}),Object(a.jsx)("span",{className:"contactListNumber",children:t.contact}),Object(a.jsx)("button",{className:"contactListBtn",type:"button",onClick:e,"data-id":t.id,children:"Delete contact"})]},t.id)};function y(){var n=Object(u.a)(["\n  padding: 10px 0;\n  .list {\n    list-style: none;\n  }\n  .list:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]);return y=function(){return n},n}var w=j.a.div(y()),N=function(n){var t=n.contacts,e=n.filter,c=n.onBtnClick;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(w,{children:Object(a.jsx)("ul",{className:"list",children:t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){return Object(a.jsx)(v,{item:n,onBtnClick:c},n.id)}))})})})};function k(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 20px 0;\n  .filter-label {\n    font-weight: 700;\n    display: block;\n  }\n  .filter-input {\n    display: block;\n    width: 100%;\n  }\n"]);return k=function(){return n},n}var C=j.a.div(k()),L=function(n){var t=n.onChange,e=n.filter;return Object(a.jsx)(C,{children:Object(a.jsxs)("label",{className:"filter-label",children:["Search by Name",Object(a.jsx)("input",{className:"filter-input",type:"text",name:"filter",value:e,onChange:t})]})})};function B(){var n=Object(u.a)(["\n  padding: 30px;\n  border: 1px solid navy;\n  border-radius: 10px;\n  width: max-content;\n  margin: 0 auto;\n  background-color: #efefef;\n  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);\n  .page-title {\n    margin-bottom: 20px;\n  }\n  .contacts-title {\n    margin-bottom: 10px;\n  }\n"]);return B=function(){return n},n}var S=j.a.div(B()),P={contacts:[{id:"id-1",name:"Rosie Simpson",contact:"459-12-56"},{id:"id-2",name:"Hermione Kline",contact:"443-89-12"},{id:"id-3",name:"Eden Clements",contact:"645-17-79"},{id:"id-4",name:"Annie Copeland",contact:"227-91-26"}],filter:""},A=function(){var n=Object(c.useState)(Object(b.a)({},P)),t=Object(d.a)(n,2),e=t[0],r=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(S,{children:[Object(a.jsx)("h1",{className:"page-title",children:"Phonebook"}),Object(a.jsx)(O,{getUser:function(n){e.contacts.some((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts")):n.name.length?n.contact.length?r((function(t){return Object(b.a)(Object(b.a)({},t),{},{contacts:[].concat(Object(l.a)(t.contacts),[Object(b.a)({},n)])})})):alert("Please enter a number"):alert("Please enter a name")}}),Object(a.jsx)("h2",{className:"contacts-title",children:"Contacts"}),Object(a.jsx)(L,{onChange:function(n){var t=n.target,e=t.name,a=t.value;r((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(s.a)({},e,a))}))},filter:e.filter}),Object(a.jsx)(N,{contacts:e.contacts,filter:e.filter,onBtnClick:function(n){var t=n.target.dataset.id;r((function(n){return Object(b.a)(Object(b.a)({},n),{},{contacts:Object(l.a)(n.contacts.filter((function(n){return n.id!==t})))})}))}})]})})},D=function(){return Object(a.jsx)(A,{})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0cd42995.chunk.js.map
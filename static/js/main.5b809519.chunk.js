(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/orb.ed236853.gif"},31:function(e,t,a){e.exports=a(65)},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(6),p=a(67),h=a(69),d=a(68),f=a(8),b=a.n(f),E=a(12),v=a(30),y=a(17),j=a(13),g=a.n(j),O=r.a.createContext(),C=function(e,t){var a=t.type,n=t.payload;switch(a){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==n})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[n].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===n.id?e=n:e})});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:1,name:"John doe1",email:"jdoe1@gmail.com",phone:"555-555-555"},{id:2,name:"John doe2",email:"jdoe2@gmail.com",phone:"554-555-555"},{id:3,name:"John doe3",email:"jdoe3@gmail.com",phone:"553-555-555"},{id:4,name:"John doe4",email:"jdoe4@gmail.com",phone:"552-555-555"}],dispatch:function(e){return a.setState(function(t){return C(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=O.Consumer,w=a(66),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!0},a.onExpandClick=function(){return a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(E.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t)).catch(function(e){console.log(e),a({type:"DELETE_CONTACT",payload:t})});case 2:200===e.sent.status&&a({type:"DELETE_CONTACT",payload:t});case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n+" ",r.a.createElement("i",{onClick:function(){return e.onExpandClick()},className:"fa fa-sort-down"}),r.a.createElement("i",{className:"fas fa-times",onClick:function(){return e.onDeleteClick(a,s)}}),r.a.createElement(w.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},o)):null)})}}]),t}(n.Component),S=(a(60),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(t){var a=t.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(t){return r.a.createElement(x,{key:t.id,contact:t,onExpandClick:e.onExpandClick})}))})}}]),t}(n.Component)),A=function(e){var t=e.brand;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/test",className:"nav-link"},r.a.createElement("i",{className:"fas fa-wrench"})," Test")))))))},T=(a(61),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.branding;return r.a.createElement(A,{brand:e})}}]),t}(n.Component));T.defaultProps={branding:"My App"};var D=T,P=a(14),q=a(27),M=a.n(q),_=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:M()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),r.a.createElement("div",{className:"invalid-feedback"},"This must not be empty."))};_.defaultProps={type:"text"};var J=_,I=function(e){var t=e.name,a=e.email,n=e.phone,c=e.handleChange,o=e.handleSubmit,l=e.errors;return r.a.createElement(k,null,function(e){var s=e.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){return o(e,s)}},r.a.createElement(J,{label:"Name",name:"name",value:t,placeholder:"Enter name...",onChange:c,error:l.name}),r.a.createElement(J,{label:"Email",name:"email",value:a,placeholder:"Enter email...",type:"email",onChange:c,error:l.email}),r.a.createElement(J,{label:"Phone",name:"phone",value:n,placeholder:"Enter phone...",onChange:c,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-danger"}))))})},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(E.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,!a.hasErrors(c,o,l)){e.next=4;break}return e.abrupt("return");case 4:return s={name:c,email:o,phone:l},e.next=7,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 7:i=e.sent,n({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"hasErrors",value:function(e,t,a){return""===e.trim()?(this.setState({errors:{name:"Name is required"}}),!0):""===t.trim()?(this.setState({errors:{email:"Email is required"}}),!0):""===a.trim()&&(this.setState({errors:{phone:"Phone is required"}}),!0)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement(I,{name:t,email:a,phone:n,handleChange:this.handleChange,handleSubmit:this.handleSubmit,errors:c})}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(E.a)(b.a.mark(function e(t,n){var r,c,o,l,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,!a.hasErrors(c,o,l)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(a.props.match.params.id),{name:c,email:o,phone:l});case 6:s=e.sent,console.log(s),n({type:"UPDATE_CONTACT",payload:s.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"hasErrors",value:function(e,t,a){return""===e.trim()?(this.setState({errors:{name:"Name is required"}}),!0):""===t.trim()?(this.setState({errors:{email:"Email is required"}}),!0):""===a.trim()&&(this.setState({errors:{phone:"Phone is required"}}),!0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t,l)}},r.a.createElement(J,{label:"Name",name:"name",value:a,placeholder:"Enter name...",onChange:e.handleChange,error:o.name}),r.a.createElement(J,{label:"Email",name:"email",value:n,placeholder:"Enter email...",type:"email",onChange:e.handleChange,error:o.email}),r.a.createElement(J,{label:"Phone",name:"phone",value:c,placeholder:"Enter phone...",onChange:e.handleChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-danger"}))))})}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contact"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}}]),t}(n.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry, looks like this page does not exist."))}}]),t}(n.Component),W=a(28),H=a.n(W),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,posts:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount()"),fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()}).then(function(t){return e.setState({loading:!1,posts:t})})}},{key:"render",value:function(){return console.log("component render()"),this.state.loading?r.a.createElement("div",{style:{height:"300px",width:"300px",margin:"300px auto 0 auto"}},r.a.createElement("img",{src:H.a,className:"img-fluid",alt:"loading"})):this.state.posts.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h1",{className:"display-2"},e.name),r.a.createElement("h1",{className:"display-5"},e.email),r.a.createElement("p",{className:"lead"},e.body))})}}]),t}(n.Component),V=(a(62),a(63),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:U}),r.a.createElement(d.a,{exact:!0,path:"/about",component:B}),r.a.createElement(d.a,{exact:!0,path:"/test",component:R}),r.a.createElement(d.a,{component:F}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.5b809519.chunk.js.map
(this["webpackJsonpcrud-simple-udemy"]=this["webpackJsonpcrud-simple-udemy"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=a(8),m=a(1),s=a(7),i=a.n(s);var u=function(){var e=r.a.useState(""),t=Object(m.a)(e,2),a=t[0],n=t[1],l=r.a.useState([]),c=Object(m.a)(l,2),s=c[0],u=c[1],b=r.a.useState(!1),d=Object(m.a)(b,2),E=d[0],f=d[1],g=r.a.useState(""),p=Object(m.a)(g,2),N=p[0],v=p[1],h=r.a.useState(null),k=Object(m.a)(h,2),y=k[0],S=k[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",{className:"text-center"},"CRUD Simple"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h4",{className:"text-center"},"Lista de tareas"),r.a.createElement("ul",{className:"list-group"},0===s.length?r.a.createElement("li",{className:"list-group-item"},"No hay tareas"):s.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("span",{className:"lead"},e.nombreTarea),r.a.createElement("button",{className:"btn btn-danger btn-sm float-right mx-2",onClick:function(){return function(e){var t=s.filter((function(t){return t.id!==e}));u(t)}(e.id)}},"Eliminar"),r.a.createElement("button",{className:"btn btn-warning btn-sm float-right",onClick:function(){return function(e){console.log(e),f(!0),n(e.nombreTarea),v(e.id)}(e)}},"Editar"))})))),r.a.createElement("div",{className:"col-4"},r.a.createElement("h4",{className:"text-center"},E?"Editar Tarea":"Agregar Tarea"),r.a.createElement("form",{onSubmit:E?function(e){if(e.preventDefault(),!a.trim())return console.log("Elemento Vac\xedo"),void S("Escriba algo por favor...");var t=s.map((function(e){return e.id===N?{id:N,nombreTarea:a}:e}));u(t),f(!1),n(""),v(""),S(null)}:function(e){if(e.preventDefault(),!a.trim())return console.log("Elemento Vac\xedo"),void S("Escriba algo por favor...");console.log(a),u([].concat(Object(o.a)(s),[{id:i.a.generate(),nombreTarea:a}])),n(""),S(null)}},y?r.a.createElement("span",{className:"text-danger"},y):null,r.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Ingrese Tarea",onChange:function(e){return n(e.target.value)},value:a}),E?r.a.createElement("button",{className:"btn btn-warning btn-block",type:"submit"},"Editar"):r.a.createElement("button",{className:"btn btn-dark btn-block",type:"submit"},"Agregar")))))};a(22);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.6cd762a2.chunk.js.map
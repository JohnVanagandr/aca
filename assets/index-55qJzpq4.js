(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var B={exports:{}},U;function re(){return U||(U=1,(function(e,t){(function(r,n,a,o,i){if("customElements"in a)i();else{if(a.AWAITING_WEB_COMPONENTS_POLYFILL)return void a.AWAITING_WEB_COMPONENTS_POLYFILL.then(i);var s=a.AWAITING_WEB_COMPONENTS_POLYFILL=h();s.then(i);var c=a.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",p=a.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in a?x(c).then((function(){s.isDone=!0,s.exec()})):x(p).then((function(){x(c).then((function(){s.isDone=!0,s.exec()}))}))}function h(){var f=[];return f.isDone=!1,f.exec=function(){f.splice(0).forEach((function(v){v()}))},f.then=function(v){return f.isDone?v():f.push(v),f},f}function x(f){var v=h(),w=o.createElement("script");return w.type="text/javascript",w.readyState?w.onreadystatechange=function(){w.readyState!="loaded"&&w.readyState!="complete"||(w.onreadystatechange=null,v.isDone=!0,v.exec())}:w.onload=function(){v.isDone=!0,v.exec()},w.src=f,o.getElementsByTagName("head")[0].appendChild(w),w.then=v.then,w}})(0,0,window,document,(function(){var r;r=function(){return(function(n){var a={};function o(i){if(a[i])return a[i].exports;var s=a[i]={i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=n,o.c=a,o.d=function(i,s,c){o.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:c})},o.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,s){if(1&s&&(i=o(i)),8&s||4&s&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&s&&typeof i!="string")for(var p in i)o.d(c,p,(function(h){return i[h]}).bind(null,p));return c},o.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(s,"a",s),s},o.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},o.p="",o(o.s=5)})([function(n,a){n.exports=function(o){var i=[];return i.toString=function(){return this.map((function(s){var c=(function(p,h){var x,f=p[1]||"",v=p[3];if(!v)return f;if(h&&typeof btoa=="function"){var w=(x=v,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(x))))+" */"),P=v.sources.map((function(D){return"/*# sourceURL="+v.sourceRoot+D+" */"}));return[f].concat(P).concat([w]).join(`
`)}return[f].join(`
`)})(s,o);return s[2]?"@media "+s[2]+"{"+c+"}":c})).join("")},i.i=function(s,c){typeof s=="string"&&(s=[[null,s,""]]);for(var p={},h=0;h<this.length;h++){var x=this[h][0];typeof x=="number"&&(p[x]=!0)}for(h=0;h<s.length;h++){var f=s[h];typeof f[0]=="number"&&p[f[0]]||(c&&!f[2]?f[2]=c:c&&(f[2]="("+f[2]+") and ("+c+")"),i.push(f))}},i}},function(n,a,o){var i=o(3);n.exports=typeof i=="string"?i:i.toString()},function(n,a,o){var i=o(4);n.exports=typeof i=="string"?i:i.toString()},function(n,a,o){(n.exports=o(0)(!1)).push([n.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(n,a,o){(n.exports=o(0)(!1)).push([n.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(n,a,o){o.r(a),o.d(a,"BoxIconElement",(function(){return M}));var i,s,c,p,h=o(1),x=o.n(h),f=o(2),v=o.n(f),w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},P=(function(){function g(b,d){for(var u=0;u<d.length;u++){var l=d[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(b,l.key,l)}}return function(b,d,u){return d&&g(b.prototype,d),u&&g(b,u),b}})(),D=(s=(i=Object).getPrototypeOf||function(g){return g.__proto__},c=i.setPrototypeOf||function(g,b){return g.__proto__=b,g},p=(typeof Reflect>"u"?"undefined":w(Reflect))==="object"?Reflect.construct:function(g,b,d){var u,l=[null];return l.push.apply(l,b),u=g.bind.apply(g,l),c(new u,d.prototype)},function(g){var b=s(g);return c(g,c((function(){return p(b,arguments,s(this).constructor)}),b))}),_=window,X={},R=document.createElement("template"),z=function(){return!!_.ShadyCSS};R.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+x.a+`
`+v.a+`
</style>
<div id="icon"></div>`;var M=D((function(g){function b(){(function(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")})(this,b);var d=(function(u,l){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?u:l})(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return d.$ui=d.attachShadow({mode:"open"}),d.$ui.appendChild(d.ownerDocument.importNode(R.content,!0)),z()&&_.ShadyCSS.styleElement(d),d._state={$iconHolder:d.$ui.getElementById("icon"),type:d.getAttribute("type")},d}return(function(d,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);d.prototype=Object.create(u&&u.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(d,u):d.__proto__=u)})(b,HTMLElement),P(b,null,[{key:"getIconSvg",value:function(d,u){var l=this.cdnUrl+"/regular/bx-"+d+".svg";return u==="solid"?l=this.cdnUrl+"/solid/bxs-"+d+".svg":u==="logo"&&(l=this.cdnUrl+"/logos/bxl-"+d+".svg"),l&&X[l]||(X[l]=new Promise((function($,k){var C=new XMLHttpRequest;C.addEventListener("load",(function(){this.status<200||this.status>=300?k(new Error(this.status+" "+this.responseText)):$(this.responseText)})),C.onerror=k,C.onabort=k,C.open("GET",l),C.send()}))),X[l]}},{key:"define",value:function(d){d=d||this.tagName,z()&&_.ShadyCSS.prepareTemplate(R,d),customElements.define(d,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),P(b,[{key:"attributeChangedCallback",value:function(d,u,l){var $=this._state.$iconHolder;switch(d){case"type":(function(k,C,S){var m=k._state;m.$iconHolder.textContent="",m.type&&(m.type=null),m.type=!S||S!=="solid"&&S!=="logo"?"regular":S,m.currentName!==void 0&&k.constructor.getIconSvg(m.currentName,m.type).then((function(L){m.type===S&&(m.$iconHolder.innerHTML=L)})).catch((function(L){console.error("Failed to load icon: "+m.currentName+`
`+L)}))})(this,0,l);break;case"name":(function(k,C,S){var m=k._state;m.currentName=S,m.$iconHolder.textContent="",S&&m.type!==void 0&&k.constructor.getIconSvg(S,m.type).then((function(L){m.currentName===S&&(m.$iconHolder.innerHTML=L)})).catch((function(L){console.error("Failed to load icon: "+S+`
`+L)}))})(this,0,l);break;case"color":$.style.fill=l||"";break;case"size":(function(k,C,S){var m=k._state;m.size&&(m.$iconHolder.style.width=m.$iconHolder.style.height="",m.size=m.sizeType=null),S&&!/^(xs|sm|md|lg)$/.test(m.size)&&(m.size=S.trim(),m.$iconHolder.style.width=m.$iconHolder.style.height=m.size)})(this,0,l);break;case"rotate":u&&$.classList.remove("bx-rotate-"+u),l&&$.classList.add("bx-rotate-"+l);break;case"flip":u&&$.classList.remove("bx-flip-"+u),l&&$.classList.add("bx-flip-"+l);break;case"animation":u&&$.classList.remove("bx-"+u),l&&$.classList.add("bx-"+l)}}},{key:"connectedCallback",value:function(){z()&&_.ShadyCSS.styleElement(this)}}]),b})());a.default=M,M.define()}])},e.exports=r()}))})(B)),B.exports}re();const q="sena_store_users",I={init:()=>{if(!localStorage.getItem(q)){const e=[{id:1,name:"Administrador",email:"admin@sena.edu.co",password:"admin123",role:"admin"},{id:2,name:"Aprendiz Prueba",email:"aprendiz@gmail.com",password:"sena2026",role:"client"}];localStorage.setItem(q,JSON.stringify(e))}},getAll:()=>(I.init(),JSON.parse(localStorage.getItem(q))),register:e=>{const t=I.getAll();if(t.find(n=>n.email===e.email))return{success:!1,message:"El correo ya está registrado."};const r={name:e.name,email:e.email,password:e.password,id:Date.now(),role:"client"};return t.push(r),localStorage.setItem(q,JSON.stringify(t)),{success:!0,user:r}}},A="sena_auth_user",E={login:(e,t)=>{if(e==="admin@sena.edu.co"&&t==="admin123"){const a={name:"Admin SENA",role:"admin",email:e};return localStorage.setItem("sena_auth_user",JSON.stringify(a)),{success:!0,user:a}}if(e==="aprendiz@gmail.com"&&t==="sena2026"){const a={name:"Aprendiz Juan",role:"client",email:e};return localStorage.setItem("sena_auth_user",JSON.stringify(a)),{success:!0,user:a}}const n=I.getAll().find(a=>a.email===e&&a.password===t);return n?(localStorage.setItem(A,JSON.stringify(n)),{success:!0,user:n}):{success:!1,message:"Credenciales inválidas"}},logout:()=>{localStorage.removeItem(A),window.location.hash="#/",window.location.reload()},isAuthenticated:()=>localStorage.getItem(A)!==null,getUser:()=>JSON.parse(localStorage.getItem(A))},ae=e=>{const t=E.getUser(),r=E.isAuthenticated();return`
    <header class="main-header">
      <div class="header-container">
        <a href="#/" class="logo">SENA <span>Store</span></a>

        <nav class="header-nav">
          <div class="cart-icon-container">
            <span id="cart-count">${e}</span>
            🛒
          </div>

          <div class="auth-menu">
            ${r?`
              <div class="user-profile">
                <span>Hola, <strong>${t.name}</strong></span>
                <div class="dropdown-content">
                  <a href="#/admin/productos">⚙️ Administrar</a>
                  <button id="btn-logout" class="logout-link">Cerrar Sesión</button>
                </div>
              </div>
            `:`
              <a href="#/login" class="btn-login">Iniciar Sesión</a>
              <a href="#/register" class="btn-register-header">Registrarme</a>
            `}
          </div>
        </nav>
      </div>
    </header>
  `},ne=e=>{const t=new Date().getFullYear();return`
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>${e}</h3>
          <p>Desarrollo web.</p>
        </div>
        <div class="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-copy">
          <p>&copy; ${t} - ACA</p>
        </div>
      </div>
    </footer>
  `},oe=()=>`
  <div id="cart-overlay" class="cart-overlay"></div>
    <div id="cart-modal" class="cart-modal">
      <div class="cart-modal-content">
        <header class="cart-modal-header">
          <h2>Mi Carrito</h2>
          <button id="close-cart" class="close-btn" aria-label="Cerrar">&times;</button>
        </header>

        <div id="cart-items-container" class="cart-items-list">
           </div>

        <footer class="cart-modal-footer">
          <div class="cart-total">
            <span>Total estimado:</span>
            <span id="cart-total">$0</span>
          </div>
          <a href="#/checkout" class="btn-checkout">Continuar al pago</a>
        </footer>
      </div>
    </div>
  `,ie=()=>`
    <button id="btn-scroll-top" class="btn-scroll-top" title="Volver arriba">
      ↑
    </button>
  `;let y=JSON.parse(localStorage.getItem("sena-cart"))||[];const H=()=>{localStorage.setItem("sena-cart",JSON.stringify(y)),W()},se=e=>{const t=y.find(r=>r.id===e.id);t?t.quantity+=1:y.push({...e,quantity:1}),H()},J=(e,t)=>{const r=y.find(n=>n.id===e);r&&(r.quantity+=t,r.quantity<=0&&(y=y.filter(n=>n.id!==e))),H(),F()},W=()=>{const e=document.querySelector("#cart-count");if(e){const t=K();e.textContent=t,e.classList.add("pulse"),setTimeout(()=>e.classList.remove("pulse"),300)}},V=()=>{const e=document.querySelector("#cart-total");if(!e)return;const t=y.reduce((r,n)=>r+n.price*n.quantity,0);e.textContent=`$${t.toLocaleString()}`},F=()=>{const e=document.querySelector("#cart-items-container");if(e){if(y.length===0){e.innerHTML='<p class="empty-msg">Tu carrito está vacío</p>',V();return}e.innerHTML=y.map(t=>`
    <div class="cart-item fade-in">
      <img src="${t.image}" alt="${t.name}">
      <div class="cart-item-info">
        <h4>${t.name}</h4>
        <p>$${(t.price*t.quantity).toLocaleString()}</p>
        
        <div class="qty-controls">
          <button class="btn-qty" data-id="${t.id}" data-change="-1">-</button>
          <span class="qty-number">${t.quantity}</span>
          <button class="btn-qty" data-id="${t.id}" data-change="1">+</button>
        </div>
      </div>
      <button class="btn-remove-all" data-id="${t.id}">🗑️</button>
    </div>
  `).join(""),V()}},ce=e=>{y=y.filter(t=>t.id!==e),H(),F()},K=()=>y.reduce((e,t)=>e+t.quantity,0),le=()=>y,de=()=>y.reduce((e,t)=>e+t.price*t.quantity,0),ue=()=>{y=[],localStorage.setItem("sena-cart",JSON.stringify(y)),W()},O=e=>`
    ${ae(K())}
    <div id="public-container" class="fade-in">
      ${e}
    </div>
    ${ne("ACA")}
    ${oe()}
    ${ie()}
  `,N=e=>`
    <div class="admin-wrapper">
      <aside class="admin-sidebar">
        <div class="sidebar-header">
          <h2>SENA Admin</h2>
        </div>
        <nav class="sidebar-nav">
          <ul>
            <li><a href="#/admin">📊 Dashboard</a></li>
            <li><a href="#/admin/productos">📦 Productos</a></li>
            <li><a href="#/admin/ventas">💰 Ventas</a></li>
            <li><hr></li>
            <li><a href="#/" class="exit-link">🏠 Volver a la Tienda</a></li>
          </ul>
        </nav>
      </aside>
      
      <main class="admin-main">
        <header class="admin-topbar">
          <span>Bienvenido, Instructor</span>
          <button class="btn-logout-sidebar" id="btn-logout-admin">Cerrar Sesión</button>
        </header>
        <section class="admin-content">
          ${e}
        </section>
      </main>
    </div>
  `,me=e=>`
  <article class="product-card" data-id="${e.id}">
    <a href="#/producto/${e.id}">
      <img src="${e.image}" alt="${e.name}" class="product-image">
    </a>
    <div class="product-info">
      <h2 class="product-title">
        <a href="#/producto/${e.id}">${e.name}</a>
      </h2>
      <p class="product-price">$${e.price}</p>
    </div>
    <button class="btn-add" data-id="${e.id}">Agregar al carrito</button>
  </article>
`,Y=e=>e.length===0?"<p>Cargando productos...</p>":`
    <section class="product-grid">
      ${e.map(t=>me(t)).join("")}
    </section>
  `,fe=()=>`
    <div class="filter-container">
      <input 
        type="text" 
        id="product-search" 
        placeholder="Buscar productos por nombre..."
        class="search-input"
      />
    </div>
  `,j=(e,t)=>{const r=document.querySelector(e);r?r.innerHTML=t:console.error(`No se encontró el contenedor: ${e}`)},pe={render:e=>`
      ${fe()}
      <div id="product-container" class="fade-in">
        ${Y(e)}
      </div>
    `,init:e=>{const t=document.querySelector("#product-search"),r=document.querySelector("#category-filter"),n="#product-container",a=()=>{const o=t?.value.toLowerCase()||"",i=r?.value||"all",s=e.filter(c=>{const p=c.name.toLowerCase().includes(o),h=i==="all"||c.category===i;return p&&h});j(n,Y(s))};t?.addEventListener("input",a),r?.addEventListener("change",a)}},ge=e=>e?`
    <div class="product-detail-container fade-in">
      <a href="#/" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Volver a la tienda</span>
      </a>

      <article class="detail-grid">
        <div class="detail-img-wrapper">
          <img src="${e.image}" alt="${e.name}" class="detail-img">
        </div>

        <div class="detail-info">
          <span class="stock-badge">Stock Disponible</span>
          <h1>${e.name}</h1>
          <p class="detail-price">$${e.price.toLocaleString()}</p>
          
          <p class="detail-desc">
            Optimiza tus proyectos con este producto de alta fidelidad. 
            Diseñado especialmente para aprendices que buscan calidad y durabilidad 
            en cada pieza de hardware o software.
          </p>
          <button class="btn-add-large btn-add" data-id="${e.id}">
            🛒 Agregar al Carrito
          </button>
        </div>
      </article>
    </div>
  `:`
      <div class="product-detail-container">
        <h2>Producto no encontrado</h2>
        <a href="#/" class="back-link">← Volver a la tienda</a>
      </div>
    `,he={render:(e,t)=>{const r=e.find(n=>n.id==t.id);return ge(r)},init:(e,t)=>{console.log(`Viendo el detalle del producto: ${t.id}`)}},be={render:()=>`
    <div class="admin-form-container fade-in">
      <div class="form-header">
        <h1>Bienvenido Instructor</h1>
        <p>Ingresa para gestionar la tienda</p>
      </div>
      <form id="login-form" class="admin-form">
        <div class="form-group">
          <label>Correo Electrónico</label>
          <input type="email" name="email" value="instructor@sena.edu.co" required>
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input type="password" name="password" placeholder="admin123" required>
        </div>
        <button type="submit" class="btn-save">Entrar al Panel</button>
      </form>
      <p class="form-footer">
        ¿Eres nuevo aprendiz? <a href="#/register">Crea tu cuenta aquí</a>
      </p>
    </div>
  `,init:()=>{const e=document.querySelector("#login-form");e?.addEventListener("submit",t=>{t.preventDefault();const r=Object.fromEntries(new FormData(e));if(E.login(r.email,r.password).success){const a=E.getUser();if(a.role==="admin")console.log("Bienvenido, jefe. Redirigiendo al panel..."),window.location.hash="#/admin/productos";else if(a.role==="client"){const o=sessionStorage.getItem("redirect_after_login");o?(console.log("Cliente autenticado. Retomando proceso de pago..."),sessionStorage.removeItem("redirect_after_login"),window.location.hash=o):(console.log("Cliente autenticado. Redirigiendo a la tienda..."),window.location.hash="#/")}}})}},ve=e=>`
    <div class="admin-table-container fade-in">
      <div class="admin-table-header">
        <h2>Gestión de Inventario</h2>
        <a href="#/admin/productos/nuevo" class="btn-create"><span>+</span> Nuevo Producto</a>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr>
              <td>#${t.id}</td>
              <td><img src="${t.image}" class="table-img" alt="${t.name}"></td>
              <td class="table-name">${t.name}</td>
              <td><strong>$${t.price.toLocaleString()}</strong></td>
              <td class="table-actions">
                <a href="#/admin/productos/editar/${t.id}" class="btn-edit" title="Editar">✏️</a>
                <button class="btn-delete" data-id="${t.id}" title="Eliminar">🗑️</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,T="sena_store_inventory",Q={getAll:async()=>{const e=localStorage.getItem(T);if(e)return JSON.parse(e);try{const n=(await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")).json()).map(a=>({id:a.id,name:a.title.slice(0,20),price:Math.floor(Math.random()*100)+10,image:`https://picsum.photos/seed/${a.id}/300/200`,category:"perifericos"}));return localStorage.setItem(T,JSON.stringify(n)),n}catch(t){return console.error("Error cargando productos iniciales:",t),[]}},saveAll:e=>{localStorage.setItem(T,JSON.stringify(e))},reset:()=>{localStorage.removeItem(T),window.location.reload()}},G={render:e=>ve(e),init:e=>{const t=document.querySelector(".admin-table");t&&t.addEventListener("click",r=>{const n=r.target.closest(".btn-delete");if(n){const a=parseInt(n.dataset.id),o=e.find(s=>s.id===a);if(confirm(`¿Estás seguro de que deseas eliminar "${o.name}"?`)){const s=e.findIndex(c=>c.id===a);s!==-1&&(e.splice(s,1),Q.saveAll(e),te(e),console.log(`Producto ${a} eliminado correctamente.`))}}})}},Z=(e=null)=>{const t=e?"Editar Producto":"Añadir Nuevo Producto",r=e?"Guardar Cambios":"Crear Producto";return`
    <div class="admin-form-container fade-in">
      <div class="form-header">
        <a href="#/admin/productos" class="back-link">← Volver a la lista</a>
        <h1>${t}</h1>
      </div>

      <form id="product-form" class="admin-form">
        <div class="form-grid">
          
          <div class="form-inputs">
            <div class="form-group">
              <label for="name">Nombre del Producto</label>
              <input type="text" id="name" name="name" 
                     value="${e?.name||""}" 
                     placeholder="Ej. Monitor Gamer 144hz" required>
            </div>

            <div class="form-group">
              <label for="price">Precio ($)</label>
              <input type="number" id="price" name="price" 
                     value="${e?.price||""}" 
                     placeholder="Ej. 1200000" required>
            </div>

            <div class="form-group">
              <label for="image">URL de la Imagen</label>
              <input type="url" id="image-input" name="image" 
                     value="${e?.image||""}" 
                     placeholder="https://images.unsplash.com/..." required>
            </div>

            <div class="form-group">
              <label for="category">Categoría</label>
              <select id="category" name="category">
                <option value="hardware" ${e?.category==="hardware"?"selected":""}>Hardware</option>
                <option value="software" ${e?.category==="software"?"selected":""}>Software</option>
                <option value="perifericos" ${e?.category==="perifericos"?"selected":""}>Periféricos</option>
              </select>
            </div>
          </div>

          <div class="form-preview">
            <p class="preview-label">Vista previa de imagen:</p>
            <div class="image-preview-box">
              <img id="img-preview" 
                   src="${e?.image||"https://via.placeholder.com/300x200?text=Sin+Imagen"}" 
                   alt="Preview">
            </div>
            <small class="preview-help">Asegúrate de que la URL termine en .jpg, .png o .webp</small>
          </div>

        </div>

        <button type="submit" class="btn-save">${r}</button>
      </form>
    </div>
  `},ye=(e,t)=>{const r={};for(const n in t){const a=e[n],o=t[n];if(o.required&&(!a||a.toString().trim()==="")){r[n]="Este campo es obligatorio";continue}o.minPrice&&parseFloat(a)<=0&&(r[n]="El precio debe ser mayor a 0"),o.isUrl&&a&&(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i.test(a)||(r[n]="Ingresa una URL de imagen válida (jpg, png, webp)"))}return{isValid:Object.keys(r).length===0,errors:r}},ee={render:()=>Z(),validationRules:{name:{required:!0},price:{required:!0,minPrice:!0},image:{required:!0,isUrl:!0}},init:e=>{const t=document.querySelector("#product-form"),r=document.querySelector("#image-input"),n=document.querySelector("#img-preview");r?.addEventListener("input",a=>{const o=a.target.value;n.src=o||"https://via.placeholder.com/300x200?text=Esperando+URL...",n.onerror=()=>{n.src="https://via.placeholder.com/300x200?text=URL+No+Válida"}}),t&&(t.onsubmit=a=>{a.preventDefault();const o=new FormData(t),i=Object.fromEntries(o.entries()),s=ye(i,ee.validationRules);if(!s.isValid){alert(`Errores:
`+Object.values(s.errors).join(`
`));return}const c={...i,id:e.length+1,price:parseFloat(i.price)};e.push(c),window.location.hash="#/admin/productos"})},showErrors:e=>{document.querySelectorAll(".error-message").forEach(t=>t.remove());for(const t in e){const r=document.querySelector(`[name="${t}"]`),n=document.createElement("span");n.className="error-message",n.innerText=e[t],r.after(n),r.parentElement.classList.add("has-error")}}},we={render:(e,t)=>{const r=e.find(n=>n.id==t.id);return Z(r)},init:(e,t)=>{const r=document.querySelector("#product-form");r?.addEventListener("submit",n=>{n.preventDefault();const a=new FormData(r),o=Object.fromEntries(a.entries()),i=e.findIndex(s=>s.id==t.id);e[i]={...e[i],...o,price:parseFloat(o.price)},window.location.hash="#/admin/productos"})}},Se={render:()=>{const e=le(),t=de();return e.length===0?`
        <div class="checkout-container fade-in">
          <h2>Tu carrito está triste 🛒</h2>
          <p>No hay productos para procesar. Vuelve a la tienda y elige algo genial.</p>
          <a href="#/" class="btn-save">Volver a la tienda</a>
        </div>
      `:`
      <div class="checkout-container fade-in">
        <h1>Resumen de tu Compra</h1>
        <div class="checkout-grid">
          <div class="checkout-items">
            ${e.map(r=>`
              <div class="checkout-item">
                <img src="${r.image}" alt="${r.name}">
                <div class="item-info">
                  <h3>${r.name}</h3>
                  <p>Cantidad: ${r.quantity}</p>
                  <p class="item-subtotal">Subtotal: $${(r.price*r.quantity).toLocaleString()}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="checkout-summary-card">
            <h3>Total a Pagar</h3>
            <div class="total-amount">$${t.toLocaleString()}</div>
            <hr>
            <p class="info-text">Al continuar, confirmas que los productos en la lista son correctos.</p>
            <button id="btn-confirm-payment" class="btn-pay">
              Confirmar y Pagar
            </button>
          </div>
        </div>
      </div>
    `},init:()=>{document.querySelector("#btn-confirm-payment")?.addEventListener("click",()=>{if(!E.isAuthenticated()){alert("¡Casi listo! Para finalizar el pago, por favor inicia sesión o regístrate."),sessionStorage.setItem("redirect_after_login","#/checkout"),window.location.hash="#/login";return}alert("🚀 ¡Pago procesado con éxito! Gracias por tu compra en SENA Store."),ue(),window.location.hash="#/"})}},xe={render:()=>`
    <div class="auth-container fade-in">
      <div class="auth-box">
        <h1>Crear Perfil de Aprendiz</h1>
        <p>Regístrate para gestionar tus compras en la tienda SENA</p>
        
        <form id="register-form" class="auth-form">
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" name="name" placeholder="Ej. Carlos Alarcón" required>
          </div>
          
          <div class="form-group">
            <label>Correo Institucional o Personal</label>
            <input type="email" name="email" placeholder="aprendiz@correo.com" required>
          </div>
          
          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" name="password" placeholder="Mínimo 6 caracteres" required>
          </div>

          <button type="submit" class="btn-primary-auth">Completar Registro</button>
        </form>
        
        <p class="auth-footer">¿Ya tienes cuenta? <a href="#/login">Inicia Sesión</a></p>
      </div>
    </div>
  `,init:()=>{const e=document.querySelector("#register-form");e?.addEventListener("submit",t=>{t.preventDefault();const r=new FormData(e),n=Object.fromEntries(r),a=I.register(n);if(a.success){E.login(n.email,n.password),alert(`¡Cuenta creada con éxito! Bienvenido a SENA Store, ${n.name}.`);const o=sessionStorage.getItem("redirect_after_login");o?(sessionStorage.removeItem("redirect_after_login"),window.location.hash=o):window.location.hash="#/"}else alert(a.message)})}},ke=[{path:"#/",layout:O,controller:pe},{path:"#/producto/:id",layout:O,controller:he},{path:"#/login",layout:e=>`<div class="login-layout">${e}</div>`,controller:be},{path:"#/admin",layout:N,controller:G},{path:"#/admin/productos",layout:N,controller:G},{path:"#/admin/productos/nuevo",layout:N,controller:ee},{path:"#/admin/productos/editar/:id",layout:N,controller:we},{path:"#/checkout",layout:O,controller:Se},{path:"#/register",layout:O,controller:xe}],$e=(e,t)=>{const r=e.split("/"),n=t.split("/");if(r.length!==n.length)return null;const a={};return r.every((i,s)=>i.startsWith(":")?(a[i.substring(1)]=n[s],!0):i===n[s])?a:null},te=e=>{const t=window.location.hash||"#/";let r=null,n={};for(const a of ke){const o=$e(a.path,t);if(o){r=a,n=o;break}}if(r){if(t.startsWith("#/admin")&&!E.isAuthenticated()){window.location.hash="#/login";return}const a=r.controller.render(e,n);j("#app",r.layout(a)),r.controller.init&&r.controller.init(e,n)}else j("#app","<h1>404 - No encontrado</h1>")},Ce=e=>{const t=document.querySelector("#app");t.onclick=null,t.onclick=r=>{const n=r.target.closest(".btn-add");if(n){const c=n.dataset.id,p=e.find(h=>h.id==c);p&&(se(p),n.innerText="¡Añadido! ✅",setTimeout(()=>n.innerText=n.classList.contains("btn-add-large")?"🛒 Agregar al Carrito":"Agregar",1e3));return}const a=r.target.closest(".btn-qty");if(a){const c=parseInt(a.dataset.id),p=parseInt(a.dataset.change);J(c,p);return}const o=r.target.closest(".btn-remove-all");if(o){const c=parseInt(o.dataset.id);J(c,-1/0);return}if(r.target.closest(".cart-icon-container")){const c=document.querySelector("#cart-modal"),p=document.querySelector("#cart-overlay");c.classList.add("open"),p.classList.add("show"),F();return}if(r.target.id==="close-cart"||r.target.id==="cart-overlay"){document.querySelector("#cart-modal").classList.remove("open"),document.querySelector("#cart-overlay").classList.remove("show");return}const i=r.target.closest(".btn-remove");if(i){ce(i.dataset.index);return}if(r.target.closest("#btn-logout")||r.target.closest("#btn-logout-admin")){confirm("¿Estás seguro de que deseas salir del panel administrativo?")&&(E.logout(),window.location.hash="#/",window.location.reload());return}r.target.id==="btn-scroll-top"&&window.scrollTo({top:0,behavior:"smooth"})},t.addEventListener("input",r=>{if(r.target.id==="product-search"){const n=r.target.value.toLowerCase(),a=e.filter(o=>o.name.toLowerCase().includes(n));j("#product-container",Y(a))}}),t.onsubmit=r=>{if(r.target.id==="product-form"){r.preventDefault();const n=new FormData(r.target),a={id:e.length+1,name:n.get("name"),price:parseFloat(n.get("price")),image:n.get("image"),category:n.get("category")};e.push(a),alert("¡Producto creado con éxito!"),window.location.hash="#/admin/productos"}},window.addEventListener("scroll",()=>{const r=document.querySelector("#btn-scroll-top");r&&(window.scrollY>300?r.classList.add("show"):r.classList.remove("show"))})},Ee=async()=>{I.init();const e=await Q.getAll(),t=()=>{te(e),Ce(e),window.scrollTo(0,0)};window.addEventListener("hashchange",t),t()};Ee();

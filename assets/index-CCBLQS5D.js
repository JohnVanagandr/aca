(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var D={exports:{}},H;function tt(){return H||(H=1,(function(t,e){(function(r,n,a,o,i){if("customElements"in a)i();else{if(a.AWAITING_WEB_COMPONENTS_POLYFILL)return void a.AWAITING_WEB_COMPONENTS_POLYFILL.then(i);var s=a.AWAITING_WEB_COMPONENTS_POLYFILL=g();s.then(i);var c=a.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",p=a.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in a?S(c).then((function(){s.isDone=!0,s.exec()})):S(p).then((function(){S(c).then((function(){s.isDone=!0,s.exec()}))}))}function g(){var m=[];return m.isDone=!1,m.exec=function(){m.splice(0).forEach((function(v){v()}))},m.then=function(v){return m.isDone?v():m.push(v),m},m}function S(m){var v=g(),w=o.createElement("script");return w.type="text/javascript",w.readyState?w.onreadystatechange=function(){w.readyState!="loaded"&&w.readyState!="complete"||(w.onreadystatechange=null,v.isDone=!0,v.exec())}:w.onload=function(){v.isDone=!0,v.exec()},w.src=m,o.getElementsByTagName("head")[0].appendChild(w),w.then=v.then,w}})(0,0,window,document,(function(){var r;r=function(){return(function(n){var a={};function o(i){if(a[i])return a[i].exports;var s=a[i]={i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=n,o.c=a,o.d=function(i,s,c){o.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:c})},o.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,s){if(1&s&&(i=o(i)),8&s||4&s&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&s&&typeof i!="string")for(var p in i)o.d(c,p,(function(g){return i[g]}).bind(null,p));return c},o.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(s,"a",s),s},o.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},o.p="",o(o.s=5)})([function(n,a){n.exports=function(o){var i=[];return i.toString=function(){return this.map((function(s){var c=(function(p,g){var S,m=p[1]||"",v=p[3];if(!v)return m;if(g&&typeof btoa=="function"){var w=(S=v,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(S))))+" */"),I=v.sources.map((function(T){return"/*# sourceURL="+v.sourceRoot+T+" */"}));return[m].concat(I).concat([w]).join(`
`)}return[m].join(`
`)})(s,o);return s[2]?"@media "+s[2]+"{"+c+"}":c})).join("")},i.i=function(s,c){typeof s=="string"&&(s=[[null,s,""]]);for(var p={},g=0;g<this.length;g++){var S=this[g][0];typeof S=="number"&&(p[S]=!0)}for(g=0;g<s.length;g++){var m=s[g];typeof m[0]=="number"&&p[m[0]]||(c&&!m[2]?m[2]=c:c&&(m[2]="("+m[2]+") and ("+c+")"),i.push(m))}},i}},function(n,a,o){var i=o(3);n.exports=typeof i=="string"?i:i.toString()},function(n,a,o){var i=o(4);n.exports=typeof i=="string"?i:i.toString()},function(n,a,o){(n.exports=o(0)(!1)).push([n.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(n,a,o){(n.exports=o(0)(!1)).push([n.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(n,a,o){o.r(a),o.d(a,"BoxIconElement",(function(){return X}));var i,s,c,p,g=o(1),S=o.n(g),m=o(2),v=o.n(m),w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},I=(function(){function h(b,d){for(var u=0;u<d.length;u++){var l=d[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(b,l.key,l)}}return function(b,d,u){return d&&h(b.prototype,d),u&&h(b,u),b}})(),T=(s=(i=Object).getPrototypeOf||function(h){return h.__proto__},c=i.setPrototypeOf||function(h,b){return h.__proto__=b,h},p=(typeof Reflect>"u"?"undefined":w(Reflect))==="object"?Reflect.construct:function(h,b,d){var u,l=[null];return l.push.apply(l,b),u=h.bind.apply(h,l),c(new u,d.prototype)},function(h){var b=s(h);return c(h,c((function(){return p(b,arguments,s(this).constructor)}),b))}),P=window,A={},j=document.createElement("template"),N=function(){return!!P.ShadyCSS};j.innerHTML=`
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
`+S.a+`
`+v.a+`
</style>
<div id="icon"></div>`;var X=T((function(h){function b(){(function(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")})(this,b);var d=(function(u,l){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?u:l})(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return d.$ui=d.attachShadow({mode:"open"}),d.$ui.appendChild(d.ownerDocument.importNode(j.content,!0)),N()&&P.ShadyCSS.styleElement(d),d._state={$iconHolder:d.$ui.getElementById("icon"),type:d.getAttribute("type")},d}return(function(d,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);d.prototype=Object.create(u&&u.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(d,u):d.__proto__=u)})(b,HTMLElement),I(b,null,[{key:"getIconSvg",value:function(d,u){var l=this.cdnUrl+"/regular/bx-"+d+".svg";return u==="solid"?l=this.cdnUrl+"/solid/bxs-"+d+".svg":u==="logo"&&(l=this.cdnUrl+"/logos/bxl-"+d+".svg"),l&&A[l]||(A[l]=new Promise((function($,k){var L=new XMLHttpRequest;L.addEventListener("load",(function(){this.status<200||this.status>=300?k(new Error(this.status+" "+this.responseText)):$(this.responseText)})),L.onerror=k,L.onabort=k,L.open("GET",l),L.send()}))),A[l]}},{key:"define",value:function(d){d=d||this.tagName,N()&&P.ShadyCSS.prepareTemplate(j,d),customElements.define(d,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),I(b,[{key:"attributeChangedCallback",value:function(d,u,l){var $=this._state.$iconHolder;switch(d){case"type":(function(k,L,x){var f=k._state;f.$iconHolder.textContent="",f.type&&(f.type=null),f.type=!x||x!=="solid"&&x!=="logo"?"regular":x,f.currentName!==void 0&&k.constructor.getIconSvg(f.currentName,f.type).then((function(E){f.type===x&&(f.$iconHolder.innerHTML=E)})).catch((function(E){console.error("Failed to load icon: "+f.currentName+`
`+E)}))})(this,0,l);break;case"name":(function(k,L,x){var f=k._state;f.currentName=x,f.$iconHolder.textContent="",x&&f.type!==void 0&&k.constructor.getIconSvg(x,f.type).then((function(E){f.currentName===x&&(f.$iconHolder.innerHTML=E)})).catch((function(E){console.error("Failed to load icon: "+x+`
`+E)}))})(this,0,l);break;case"color":$.style.fill=l||"";break;case"size":(function(k,L,x){var f=k._state;f.size&&(f.$iconHolder.style.width=f.$iconHolder.style.height="",f.size=f.sizeType=null),x&&!/^(xs|sm|md|lg)$/.test(f.size)&&(f.size=x.trim(),f.$iconHolder.style.width=f.$iconHolder.style.height=f.size)})(this,0,l);break;case"rotate":u&&$.classList.remove("bx-rotate-"+u),l&&$.classList.add("bx-rotate-"+l);break;case"flip":u&&$.classList.remove("bx-flip-"+u),l&&$.classList.add("bx-flip-"+l);break;case"animation":u&&$.classList.remove("bx-"+u),l&&$.classList.add("bx-"+l)}}},{key:"connectedCallback",value:function(){N()&&P.ShadyCSS.styleElement(this)}}]),b})());a.default=X,X.define()}])},t.exports=r()}))})(D)),D.exports}tt();const M="sena_auth_user",C={login:(t,e)=>{if(t==="admin@sena.edu.co"&&e==="admin123"){const r={name:"Admin SENA",role:"admin",email:t};return localStorage.setItem("sena_auth_user",JSON.stringify(r)),{success:!0,user:r}}if(t==="aprendiz@gmail.com"&&e==="sena2026"){const r={name:"Aprendiz Juan",role:"client",email:t};return localStorage.setItem("sena_auth_user",JSON.stringify(r)),{success:!0,user:r}}return{success:!1,message:"Credenciales incorrectas"}},logout:()=>{localStorage.removeItem(M),window.location.hash="#/",window.location.reload()},isAuthenticated:()=>localStorage.getItem(M)!==null,getUser:()=>JSON.parse(localStorage.getItem(M))},et=t=>{const e=C.getUser(),r=C.isAuthenticated();return`
    <header class="main-header">
      <div class="header-container">
        <a href="#/" class="logo">SENA <span>Store</span></a>

        <nav class="header-nav">
          <div class="cart-icon-container">
            <span id="cart-count">${t}</span>
            🛒
          </div>

          <div class="auth-menu">
            ${r?`
              <div class="user-profile">
                <span>Hola, <strong>${e.name}</strong></span>
                <div class="dropdown-content">
                  <a href="#/admin/productos">⚙️ Administrar</a>
                  <button id="btn-logout" class="logout-link">Cerrar Sesión</button>
                </div>
              </div>
            `:`
              <a href="#/login" class="btn-login">Iniciar Sesión</a>
            `}
          </div>
        </nav>
      </div>
    </header>
  `},rt=t=>{const e=new Date().getFullYear();return`
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>${t}</h3>
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
          <p>&copy; ${e} - ACA</p>
        </div>
      </div>
    </footer>
  `},at=()=>`
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
  `,nt=()=>`
    <button id="btn-scroll-top" class="btn-scroll-top" title="Volver arriba">
      ↑
    </button>
  `;let y=JSON.parse(localStorage.getItem("sena-cart"))||[];const B=()=>{localStorage.setItem("sena-cart",JSON.stringify(y)),J()},ot=t=>{const e=y.find(r=>r.id===t.id);e?e.quantity+=1:y.push({...t,quantity:1}),B()},F=(t,e)=>{const r=y.find(n=>n.id===t);r&&(r.quantity+=e,r.quantity<=0&&(y=y.filter(n=>n.id!==t))),B(),Y()},J=()=>{const t=document.querySelector("#cart-count");if(t){const e=G();t.textContent=e,t.classList.add("pulse"),setTimeout(()=>t.classList.remove("pulse"),300)}},U=()=>{const t=document.querySelector("#cart-total");if(!t)return;const e=y.reduce((r,n)=>r+n.price*n.quantity,0);t.textContent=`$${e.toLocaleString()}`},Y=()=>{const t=document.querySelector("#cart-items-container");if(t){if(y.length===0){t.innerHTML='<p class="empty-msg">Tu carrito está vacío</p>',U();return}t.innerHTML=y.map(e=>`
    <div class="cart-item fade-in">
      <img src="${e.image}" alt="${e.name}">
      <div class="cart-item-info">
        <h4>${e.name}</h4>
        <p>$${(e.price*e.quantity).toLocaleString()}</p>
        
        <div class="qty-controls">
          <button class="btn-qty" data-id="${e.id}" data-change="-1">-</button>
          <span class="qty-number">${e.quantity}</span>
          <button class="btn-qty" data-id="${e.id}" data-change="1">+</button>
        </div>
      </div>
      <button class="btn-remove-all" data-id="${e.id}">🗑️</button>
    </div>
  `).join(""),U()}},it=t=>{y=y.filter(e=>e.id!==t),B(),Y()},G=()=>y.reduce((t,e)=>t+e.quantity,0),st=()=>y,ct=()=>y.reduce((t,e)=>t+e.price*e.quantity,0),lt=()=>{y=[],localStorage.setItem("sena-cart",JSON.stringify(y)),J()},R=t=>`
    ${et(G())}
    <div id="public-container" class="fade-in">
      ${t}
    </div>
    ${rt()}
    ${at()}
    ${nt()}
  `,q=t=>`
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
          ${t}
        </section>
      </main>
    </div>
  `,dt=t=>`
  <article class="product-card" data-id="${t.id}">
    <a href="#/producto/${t.id}">
      <img src="${t.image}" alt="${t.name}" class="product-image">
    </a>
    <div class="product-info">
      <h2 class="product-title">
        <a href="#/producto/${t.id}">${t.name}</a>
      </h2>
      <p class="product-price">$${t.price}</p>
    </div>
    <button class="btn-add" data-id="${t.id}">Agregar al carrito</button>
  </article>
`,z=t=>t.length===0?"<p>Cargando productos...</p>":`
    <section class="product-grid">
      ${t.map(e=>dt(e)).join("")}
    </section>
  `,ut=()=>`
    <div class="filter-container">
      <input 
        type="text" 
        id="product-search" 
        placeholder="Buscar productos por nombre..."
        class="search-input"
      />
    </div>
  `,O=(t,e)=>{const r=document.querySelector(t);r?r.innerHTML=e:console.error(`No se encontró el contenedor: ${t}`)},ft={render:t=>`
      ${ut()}
      <div id="product-container" class="fade-in">
        ${z(t)}
      </div>
    `,init:t=>{const e=document.querySelector("#product-search"),r=document.querySelector("#category-filter"),n="#product-container",a=()=>{const o=e?.value.toLowerCase()||"",i=r?.value||"all",s=t.filter(c=>{const p=c.name.toLowerCase().includes(o),g=i==="all"||c.category===i;return p&&g});O(n,z(s))};e?.addEventListener("input",a),r?.addEventListener("change",a)}},mt=t=>t?`
    <div class="product-detail-container fade-in">
      <a href="#/" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Volver a la tienda</span>
      </a>

      <article class="detail-grid">
        <div class="detail-img-wrapper">
          <img src="${t.image}" alt="${t.name}" class="detail-img">
        </div>

        <div class="detail-info">
          <span class="stock-badge">Stock Disponible</span>
          <h1>${t.name}</h1>
          <p class="detail-price">$${t.price.toLocaleString()}</p>
          
          <p class="detail-desc">
            Optimiza tus proyectos con este producto de alta fidelidad. 
            Diseñado especialmente para aprendices que buscan calidad y durabilidad 
            en cada pieza de hardware o software.
          </p>
          <button class="btn-add-large btn-add" data-id="${t.id}">
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
    `,pt={render:(t,e)=>{const r=t.find(n=>n.id==e.id);return mt(r)},init:(t,e)=>{console.log(`Viendo el detalle del producto: ${e.id}`)}},ht={render:()=>`
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
    </div>
  `,init:()=>{const t=document.querySelector("#login-form");t?.addEventListener("submit",e=>{e.preventDefault();const r=Object.fromEntries(new FormData(t));if(C.login(r.email,r.password).success){const a=C.getUser();if(a.role==="admin")console.log("Bienvenido, jefe. Redirigiendo al panel..."),window.location.hash="#/admin/productos";else if(a.role==="client"){const o=sessionStorage.getItem("redirect_after_login");o?(console.log("Cliente autenticado. Retomando proceso de pago..."),sessionStorage.removeItem("redirect_after_login"),window.location.hash=o):(console.log("Cliente autenticado. Redirigiendo a la tienda..."),window.location.hash="#/")}}})}},gt=t=>`
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
          ${t.map(e=>`
            <tr>
              <td>#${e.id}</td>
              <td><img src="${e.image}" class="table-img" alt="${e.name}"></td>
              <td class="table-name">${e.name}</td>
              <td><strong>$${e.price.toLocaleString()}</strong></td>
              <td class="table-actions">
                <a href="#/admin/productos/editar/${e.id}" class="btn-edit" title="Editar">✏️</a>
                <button class="btn-delete" data-id="${e.id}" title="Eliminar">🗑️</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,_="sena_store_inventory",W={getAll:async()=>{const t=localStorage.getItem(_);if(t)return JSON.parse(t);try{const n=(await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")).json()).map(a=>({id:a.id,name:a.title.slice(0,20),price:Math.floor(Math.random()*100)+10,image:`https://picsum.photos/seed/${a.id}/300/200`,category:"perifericos"}));return localStorage.setItem(_,JSON.stringify(n)),n}catch(e){return console.error("Error cargando productos iniciales:",e),[]}},saveAll:t=>{localStorage.setItem(_,JSON.stringify(t))},reset:()=>{localStorage.removeItem(_),window.location.reload()}},V={render:t=>gt(t),init:t=>{const e=document.querySelector(".admin-table");e&&e.addEventListener("click",r=>{const n=r.target.closest(".btn-delete");if(n){const a=parseInt(n.dataset.id),o=t.find(s=>s.id===a);if(confirm(`¿Estás seguro de que deseas eliminar "${o.name}"?`)){const s=t.findIndex(c=>c.id===a);s!==-1&&(t.splice(s,1),W.saveAll(t),Z(t),console.log(`Producto ${a} eliminado correctamente.`))}}})}},K=(t=null)=>{const e=t?"Editar Producto":"Añadir Nuevo Producto",r=t?"Guardar Cambios":"Crear Producto";return`
    <div class="admin-form-container fade-in">
      <div class="form-header">
        <a href="#/admin/productos" class="back-link">← Volver a la lista</a>
        <h1>${e}</h1>
      </div>

      <form id="product-form" class="admin-form">
        <div class="form-grid">
          
          <div class="form-inputs">
            <div class="form-group">
              <label for="name">Nombre del Producto</label>
              <input type="text" id="name" name="name" 
                     value="${t?.name||""}" 
                     placeholder="Ej. Monitor Gamer 144hz" required>
            </div>

            <div class="form-group">
              <label for="price">Precio ($)</label>
              <input type="number" id="price" name="price" 
                     value="${t?.price||""}" 
                     placeholder="Ej. 1200000" required>
            </div>

            <div class="form-group">
              <label for="image">URL de la Imagen</label>
              <input type="url" id="image-input" name="image" 
                     value="${t?.image||""}" 
                     placeholder="https://images.unsplash.com/..." required>
            </div>

            <div class="form-group">
              <label for="category">Categoría</label>
              <select id="category" name="category">
                <option value="hardware" ${t?.category==="hardware"?"selected":""}>Hardware</option>
                <option value="software" ${t?.category==="software"?"selected":""}>Software</option>
                <option value="perifericos" ${t?.category==="perifericos"?"selected":""}>Periféricos</option>
              </select>
            </div>
          </div>

          <div class="form-preview">
            <p class="preview-label">Vista previa de imagen:</p>
            <div class="image-preview-box">
              <img id="img-preview" 
                   src="${t?.image||"https://via.placeholder.com/300x200?text=Sin+Imagen"}" 
                   alt="Preview">
            </div>
            <small class="preview-help">Asegúrate de que la URL termine en .jpg, .png o .webp</small>
          </div>

        </div>

        <button type="submit" class="btn-save">${r}</button>
      </form>
    </div>
  `},bt=(t,e)=>{const r={};for(const n in e){const a=t[n],o=e[n];if(o.required&&(!a||a.toString().trim()==="")){r[n]="Este campo es obligatorio";continue}o.minPrice&&parseFloat(a)<=0&&(r[n]="El precio debe ser mayor a 0"),o.isUrl&&a&&(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i.test(a)||(r[n]="Ingresa una URL de imagen válida (jpg, png, webp)"))}return{isValid:Object.keys(r).length===0,errors:r}},Q={render:()=>K(),validationRules:{name:{required:!0},price:{required:!0,minPrice:!0},image:{required:!0,isUrl:!0}},init:t=>{const e=document.querySelector("#product-form"),r=document.querySelector("#image-input"),n=document.querySelector("#img-preview");r?.addEventListener("input",a=>{const o=a.target.value;n.src=o||"https://via.placeholder.com/300x200?text=Esperando+URL...",n.onerror=()=>{n.src="https://via.placeholder.com/300x200?text=URL+No+Válida"}}),e&&(e.onsubmit=a=>{a.preventDefault();const o=new FormData(e),i=Object.fromEntries(o.entries()),s=bt(i,Q.validationRules);if(!s.isValid){alert(`Errores:
`+Object.values(s.errors).join(`
`));return}const c={...i,id:t.length+1,price:parseFloat(i.price)};t.push(c),window.location.hash="#/admin/productos"})},showErrors:t=>{document.querySelectorAll(".error-message").forEach(e=>e.remove());for(const e in t){const r=document.querySelector(`[name="${e}"]`),n=document.createElement("span");n.className="error-message",n.innerText=t[e],r.after(n),r.parentElement.classList.add("has-error")}}},vt={render:(t,e)=>{const r=t.find(n=>n.id==e.id);return K(r)},init:(t,e)=>{const r=document.querySelector("#product-form");r?.addEventListener("submit",n=>{n.preventDefault();const a=new FormData(r),o=Object.fromEntries(a.entries()),i=t.findIndex(s=>s.id==e.id);t[i]={...t[i],...o,price:parseFloat(o.price)},window.location.hash="#/admin/productos"})}},yt={render:()=>{const t=st(),e=ct();return t.length===0?`
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
            ${t.map(r=>`
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
            <div class="total-amount">$${e.toLocaleString()}</div>
            <hr>
            <p class="info-text">Al continuar, confirmas que los productos en la lista son correctos.</p>
            <button id="btn-confirm-payment" class="btn-pay">
              Confirmar y Pagar
            </button>
          </div>
        </div>
      </div>
    `},init:()=>{document.querySelector("#btn-confirm-payment")?.addEventListener("click",()=>{if(!C.isAuthenticated()){alert("¡Casi listo! Para finalizar el pago, por favor inicia sesión o regístrate."),sessionStorage.setItem("redirect_after_login","#/checkout"),window.location.hash="#/login";return}alert("🚀 ¡Pago procesado con éxito! Gracias por tu compra en SENA Store."),lt(),window.location.hash="#/"})}},wt=[{path:"#/",layout:R,controller:ft},{path:"#/producto/:id",layout:R,controller:pt},{path:"#/login",layout:t=>`<div class="login-layout">${t}</div>`,controller:ht},{path:"#/admin",layout:q,controller:V},{path:"#/admin/productos",layout:q,controller:V},{path:"#/admin/productos/nuevo",layout:q,controller:Q},{path:"#/admin/productos/editar/:id",layout:q,controller:vt},{path:"#/checkout",layout:R,controller:yt}],xt=(t,e)=>{const r=t.split("/"),n=e.split("/");if(r.length!==n.length)return null;const a={};return r.every((i,s)=>i.startsWith(":")?(a[i.substring(1)]=n[s],!0):i===n[s])?a:null},Z=t=>{const e=window.location.hash||"#/";let r=null,n={};for(const a of wt){const o=xt(a.path,e);if(o){r=a,n=o;break}}if(r){if(e.startsWith("#/admin")&&!C.isAuthenticated()){window.location.hash="#/login";return}const a=r.controller.render(t,n);O("#app",r.layout(a)),r.controller.init&&r.controller.init(t,n)}else O("#app","<h1>404 - No encontrado</h1>")},St=t=>{const e=document.querySelector("#app");e.onclick=null,e.onclick=r=>{const n=r.target.closest(".btn-add");if(n){const c=n.dataset.id,p=t.find(g=>g.id==c);p&&(ot(p),n.innerText="¡Añadido! ✅",setTimeout(()=>n.innerText=n.classList.contains("btn-add-large")?"🛒 Agregar al Carrito":"Agregar",1e3));return}const a=r.target.closest(".btn-qty");if(a){const c=parseInt(a.dataset.id),p=parseInt(a.dataset.change);F(c,p);return}const o=r.target.closest(".btn-remove-all");if(o){const c=parseInt(o.dataset.id);F(c,-1/0);return}if(r.target.closest(".cart-icon-container")){const c=document.querySelector("#cart-modal"),p=document.querySelector("#cart-overlay");c.classList.add("open"),p.classList.add("show"),Y();return}if(r.target.id==="close-cart"||r.target.id==="cart-overlay"){document.querySelector("#cart-modal").classList.remove("open"),document.querySelector("#cart-overlay").classList.remove("show");return}const i=r.target.closest(".btn-remove");if(i){it(i.dataset.index);return}if(r.target.closest("#btn-logout")||r.target.closest("#btn-logout-admin")){confirm("¿Estás seguro de que deseas salir del panel administrativo?")&&(C.logout(),window.location.hash="#/",window.location.reload());return}r.target.id==="btn-scroll-top"&&window.scrollTo({top:0,behavior:"smooth"})},e.addEventListener("input",r=>{if(r.target.id==="product-search"){const n=r.target.value.toLowerCase(),a=t.filter(o=>o.name.toLowerCase().includes(n));O("#product-container",z(a))}}),e.onsubmit=r=>{if(r.target.id==="product-form"){r.preventDefault();const n=new FormData(r.target),a={id:t.length+1,name:n.get("name"),price:parseFloat(n.get("price")),image:n.get("image"),category:n.get("category")};t.push(a),alert("¡Producto creado con éxito!"),window.location.hash="#/admin/productos"}},window.addEventListener("scroll",()=>{const r=document.querySelector("#btn-scroll-top");r&&(window.scrollY>300?r.classList.add("show"):r.classList.remove("show"))})},kt=async()=>{const t=await W.getAll(),e=()=>{Z(t),St(t),window.scrollTo(0,0)};window.addEventListener("hashchange",e),e()};kt();

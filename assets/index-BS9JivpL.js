(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();var R={exports:{}},H;function re(){return H||(H=1,(function(e,t){(function(r,a,o,n,i){if("customElements"in o)i();else{if(o.AWAITING_WEB_COMPONENTS_POLYFILL)return void o.AWAITING_WEB_COMPONENTS_POLYFILL.then(i);var s=o.AWAITING_WEB_COMPONENTS_POLYFILL=h();s.then(i);var c=o.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",p=o.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in o?x(c).then((function(){s.isDone=!0,s.exec()})):x(p).then((function(){x(c).then((function(){s.isDone=!0,s.exec()}))}))}function h(){var f=[];return f.isDone=!1,f.exec=function(){f.splice(0).forEach((function(v){v()}))},f.then=function(v){return f.isDone?v():f.push(v),f},f}function x(f){var v=h(),w=n.createElement("script");return w.type="text/javascript",w.readyState?w.onreadystatechange=function(){w.readyState!="loaded"&&w.readyState!="complete"||(w.onreadystatechange=null,v.isDone=!0,v.exec())}:w.onload=function(){v.isDone=!0,v.exec()},w.src=f,n.getElementsByTagName("head")[0].appendChild(w),w.then=v.then,w}})(0,0,window,document,(function(){var r;r=function(){return(function(a){var o={};function n(i){if(o[i])return o[i].exports;var s=o[i]={i,l:!1,exports:{}};return a[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=a,n.c=o,n.d=function(i,s,c){n.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:c})},n.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,s){if(1&s&&(i=n(i)),8&s||4&s&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&s&&typeof i!="string")for(var p in i)n.d(c,p,(function(h){return i[h]}).bind(null,p));return c},n.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(s,"a",s),s},n.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},n.p="",n(n.s=5)})([function(a,o){a.exports=function(n){var i=[];return i.toString=function(){return this.map((function(s){var c=(function(p,h){var x,f=p[1]||"",v=p[3];if(!v)return f;if(h&&typeof btoa=="function"){var w=(x=v,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(x))))+" */"),I=v.sources.map((function(T){return"/*# sourceURL="+v.sourceRoot+T+" */"}));return[f].concat(I).concat([w]).join(`
`)}return[f].join(`
`)})(s,n);return s[2]?"@media "+s[2]+"{"+c+"}":c})).join("")},i.i=function(s,c){typeof s=="string"&&(s=[[null,s,""]]);for(var p={},h=0;h<this.length;h++){var x=this[h][0];typeof x=="number"&&(p[x]=!0)}for(h=0;h<s.length;h++){var f=s[h];typeof f[0]=="number"&&p[f[0]]||(c&&!f[2]?f[2]=c:c&&(f[2]="("+f[2]+") and ("+c+")"),i.push(f))}},i}},function(a,o,n){var i=n(3);a.exports=typeof i=="string"?i:i.toString()},function(a,o,n){var i=n(4);a.exports=typeof i=="string"?i:i.toString()},function(a,o,n){(a.exports=n(0)(!1)).push([a.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(a,o,n){(a.exports=n(0)(!1)).push([a.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(a,o,n){n.r(o),n.d(o,"BoxIconElement",(function(){return X}));var i,s,c,p,h=n(1),x=n.n(h),f=n(2),v=n.n(f),w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},I=(function(){function g(b,d){for(var u=0;u<d.length;u++){var l=d[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(b,l.key,l)}}return function(b,d,u){return d&&g(b.prototype,d),u&&g(b,u),b}})(),T=(s=(i=Object).getPrototypeOf||function(g){return g.__proto__},c=i.setPrototypeOf||function(g,b){return g.__proto__=b,g},p=(typeof Reflect>"u"?"undefined":w(Reflect))==="object"?Reflect.construct:function(g,b,d){var u,l=[null];return l.push.apply(l,b),u=g.bind.apply(g,l),c(new u,d.prototype)},function(g){var b=s(g);return c(g,c((function(){return p(b,arguments,s(this).constructor)}),b))}),_=window,N={},j=document.createElement("template"),D=function(){return!!_.ShadyCSS};j.innerHTML=`
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
<div id="icon"></div>`;var X=T((function(g){function b(){(function(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")})(this,b);var d=(function(u,l){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||typeof l!="object"&&typeof l!="function"?u:l})(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return d.$ui=d.attachShadow({mode:"open"}),d.$ui.appendChild(d.ownerDocument.importNode(j.content,!0)),D()&&_.ShadyCSS.styleElement(d),d._state={$iconHolder:d.$ui.getElementById("icon"),type:d.getAttribute("type")},d}return(function(d,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);d.prototype=Object.create(u&&u.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(d,u):d.__proto__=u)})(b,HTMLElement),I(b,null,[{key:"getIconSvg",value:function(d,u){var l=this.cdnUrl+"/regular/bx-"+d+".svg";return u==="solid"?l=this.cdnUrl+"/solid/bxs-"+d+".svg":u==="logo"&&(l=this.cdnUrl+"/logos/bxl-"+d+".svg"),l&&N[l]||(N[l]=new Promise((function($,k){var E=new XMLHttpRequest;E.addEventListener("load",(function(){this.status<200||this.status>=300?k(new Error(this.status+" "+this.responseText)):$(this.responseText)})),E.onerror=k,E.onabort=k,E.open("GET",l),E.send()}))),N[l]}},{key:"define",value:function(d){d=d||this.tagName,D()&&_.ShadyCSS.prepareTemplate(j,d),customElements.define(d,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),I(b,[{key:"attributeChangedCallback",value:function(d,u,l){var $=this._state.$iconHolder;switch(d){case"type":(function(k,E,S){var m=k._state;m.$iconHolder.textContent="",m.type&&(m.type=null),m.type=!S||S!=="solid"&&S!=="logo"?"regular":S,m.currentName!==void 0&&k.constructor.getIconSvg(m.currentName,m.type).then((function(C){m.type===S&&(m.$iconHolder.innerHTML=C)})).catch((function(C){console.error("Failed to load icon: "+m.currentName+`
`+C)}))})(this,0,l);break;case"name":(function(k,E,S){var m=k._state;m.currentName=S,m.$iconHolder.textContent="",S&&m.type!==void 0&&k.constructor.getIconSvg(S,m.type).then((function(C){m.currentName===S&&(m.$iconHolder.innerHTML=C)})).catch((function(C){console.error("Failed to load icon: "+S+`
`+C)}))})(this,0,l);break;case"color":$.style.fill=l||"";break;case"size":(function(k,E,S){var m=k._state;m.size&&(m.$iconHolder.style.width=m.$iconHolder.style.height="",m.size=m.sizeType=null),S&&!/^(xs|sm|md|lg)$/.test(m.size)&&(m.size=S.trim(),m.$iconHolder.style.width=m.$iconHolder.style.height=m.size)})(this,0,l);break;case"rotate":u&&$.classList.remove("bx-rotate-"+u),l&&$.classList.add("bx-rotate-"+l);break;case"flip":u&&$.classList.remove("bx-flip-"+u),l&&$.classList.add("bx-flip-"+l);break;case"animation":u&&$.classList.remove("bx-"+u),l&&$.classList.add("bx-"+l)}}},{key:"connectedCallback",value:function(){D()&&_.ShadyCSS.styleElement(this)}}]),b})());o.default=X,X.define()}])},e.exports=r()}))})(R)),R.exports}re();const M="sena_auth_user",L={login:(e,t)=>{if(e==="admin@sena.edu.co"&&t==="admin123"){const r={name:"Admin SENA",role:"admin",email:e};return localStorage.setItem("sena_auth_user",JSON.stringify(r)),{success:!0,user:r}}if(e==="aprendiz@gmail.com"&&t==="sena2026"){const r={name:"Aprendiz Juan",role:"client",email:e};return localStorage.setItem("sena_auth_user",JSON.stringify(r)),{success:!0,user:r}}return{success:!1,message:"Credenciales incorrectas"}},logout:()=>{localStorage.removeItem(M),window.location.hash="#/",window.location.reload()},isAuthenticated:()=>localStorage.getItem(M)!==null,getUser:()=>JSON.parse(localStorage.getItem(M))},ae=e=>{const t=L.getUser(),r=L.isAuthenticated();return`
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
  `},oe=e=>{const t=new Date().getFullYear();return`
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
  `},ne=()=>`
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
  `;let y=JSON.parse(localStorage.getItem("sena-cart"))||[];const B=()=>{localStorage.setItem("sena-cart",JSON.stringify(y)),G()},se=e=>{const t=y.find(r=>r.id===e.id);t?t.quantity+=1:y.push({...e,quantity:1}),B()},F=(e,t)=>{const r=y.find(a=>a.id===e);r&&(r.quantity+=t,r.quantity<=0&&(y=y.filter(a=>a.id!==e))),B(),Y()},G=()=>{const e=document.querySelector("#cart-count");if(e){const t=W();e.textContent=t,e.classList.add("pulse"),setTimeout(()=>e.classList.remove("pulse"),300)}},U=()=>{const e=document.querySelector("#cart-total");if(!e)return;const t=y.reduce((r,a)=>r+a.price*a.quantity,0);e.textContent=`$${t.toLocaleString()}`},Y=()=>{const e=document.querySelector("#cart-items-container");if(e){if(y.length===0){e.innerHTML='<p class="empty-msg">Tu carrito está vacío</p>',U();return}e.innerHTML=y.map(t=>`
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
  `).join(""),U()}},ce=e=>{y=y.filter(t=>t.id!==e),B(),Y()},W=()=>y.reduce((e,t)=>e+t.quantity,0),le=()=>y,de=()=>y.reduce((e,t)=>e+t.price*t.quantity,0),ue=()=>{y=[],localStorage.setItem("sena-cart",JSON.stringify(y)),G()},P=e=>`
    ${ae(W())}
    <div id="public-container" class="fade-in">
      ${e}
    </div>
    ${oe()}
    ${ne()}
    ${ie()}
  `,q=e=>`
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
`,z=e=>e.length===0?"<p>Cargando productos...</p>":`
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
  `,A=(e,t)=>{const r=document.querySelector(e);r?r.innerHTML=t:console.error(`No se encontró el contenedor: ${e}`)},pe={render:e=>`
      ${fe()}
      <div id="product-container" class="fade-in">
        ${z(e)}
      </div>
    `,init:e=>{const t=document.querySelector("#product-search"),r=document.querySelector("#category-filter"),a="#product-container",o=()=>{const n=t?.value.toLowerCase()||"",i=r?.value||"all",s=e.filter(c=>{const p=c.name.toLowerCase().includes(n),h=i==="all"||c.category===i;return p&&h});A(a,z(s))};t?.addEventListener("input",o),r?.addEventListener("change",o)}},ge=e=>e?`
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
    `,he={render:(e,t)=>{const r=e.find(a=>a.id==t.id);return ge(r)},init:(e,t)=>{console.log(`Viendo el detalle del producto: ${t.id}`)}},be={render:()=>`
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
  `,init:()=>{const e=document.querySelector("#login-form");e?.addEventListener("submit",t=>{t.preventDefault();const r=Object.fromEntries(new FormData(e));if(L.login(r.email,r.password).success){const o=L.getUser();if(o.role==="admin")console.log("Bienvenido, jefe. Redirigiendo al panel..."),window.location.hash="#/admin/productos";else if(o.role==="client"){const n=sessionStorage.getItem("redirect_after_login");n?(console.log("Cliente autenticado. Retomando proceso de pago..."),sessionStorage.removeItem("redirect_after_login"),window.location.hash=n):(console.log("Cliente autenticado. Redirigiendo a la tienda..."),window.location.hash="#/")}}})}},ve=e=>`
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
  `,O="sena_store_inventory",K={getAll:async()=>{const e=localStorage.getItem(O);if(e)return JSON.parse(e);try{const a=(await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")).json()).map(o=>({id:o.id,name:o.title.slice(0,20),price:Math.floor(Math.random()*100)+10,image:`https://picsum.photos/seed/${o.id}/300/200`,category:"perifericos"}));return localStorage.setItem(O,JSON.stringify(a)),a}catch(t){return console.error("Error cargando productos iniciales:",t),[]}},saveAll:e=>{localStorage.setItem(O,JSON.stringify(e))},reset:()=>{localStorage.removeItem(O),window.location.reload()}},J={render:e=>ve(e),init:e=>{const t=document.querySelector(".admin-table");t&&t.addEventListener("click",r=>{const a=r.target.closest(".btn-delete");if(a){const o=parseInt(a.dataset.id),n=e.find(s=>s.id===o);if(confirm(`¿Estás seguro de que deseas eliminar "${n.name}"?`)){const s=e.findIndex(c=>c.id===o);s!==-1&&(e.splice(s,1),K.saveAll(e),te(e),console.log(`Producto ${o} eliminado correctamente.`))}}})}},Q=(e=null)=>{const t=e?"Editar Producto":"Añadir Nuevo Producto",r=e?"Guardar Cambios":"Crear Producto";return`
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
  `},ye=(e,t)=>{const r={};for(const a in t){const o=e[a],n=t[a];if(n.required&&(!o||o.toString().trim()==="")){r[a]="Este campo es obligatorio";continue}n.minPrice&&parseFloat(o)<=0&&(r[a]="El precio debe ser mayor a 0"),n.isUrl&&o&&(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i.test(o)||(r[a]="Ingresa una URL de imagen válida (jpg, png, webp)"))}return{isValid:Object.keys(r).length===0,errors:r}},Z={render:()=>Q(),validationRules:{name:{required:!0},price:{required:!0,minPrice:!0},image:{required:!0,isUrl:!0}},init:e=>{const t=document.querySelector("#product-form"),r=document.querySelector("#image-input"),a=document.querySelector("#img-preview");r?.addEventListener("input",o=>{const n=o.target.value;a.src=n||"https://via.placeholder.com/300x200?text=Esperando+URL...",a.onerror=()=>{a.src="https://via.placeholder.com/300x200?text=URL+No+Válida"}}),t&&(t.onsubmit=o=>{o.preventDefault();const n=new FormData(t),i=Object.fromEntries(n.entries()),s=ye(i,Z.validationRules);if(!s.isValid){alert(`Errores:
`+Object.values(s.errors).join(`
`));return}const c={...i,id:e.length+1,price:parseFloat(i.price)};e.push(c),window.location.hash="#/admin/productos"})},showErrors:e=>{document.querySelectorAll(".error-message").forEach(t=>t.remove());for(const t in e){const r=document.querySelector(`[name="${t}"]`),a=document.createElement("span");a.className="error-message",a.innerText=e[t],r.after(a),r.parentElement.classList.add("has-error")}}},we={render:(e,t)=>{const r=e.find(a=>a.id==t.id);return Q(r)},init:(e,t)=>{const r=document.querySelector("#product-form");r?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(r),n=Object.fromEntries(o.entries()),i=e.findIndex(s=>s.id==t.id);e[i]={...e[i],...n,price:parseFloat(n.price)},window.location.hash="#/admin/productos"})}},Se={render:()=>{const e=le(),t=de();return e.length===0?`
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
    `},init:()=>{document.querySelector("#btn-confirm-payment")?.addEventListener("click",()=>{if(!L.isAuthenticated()){alert("¡Casi listo! Para finalizar el pago, por favor inicia sesión o regístrate."),sessionStorage.setItem("redirect_after_login","#/checkout"),window.location.hash="#/login";return}alert("🚀 ¡Pago procesado con éxito! Gracias por tu compra en SENA Store."),ue(),window.location.hash="#/"})}},V="sena_store_users",ee={getAll:()=>JSON.parse(localStorage.getItem(V))||[],register:e=>{const t=ee.getAll();if(t.find(a=>a.email===e.email))return{success:!1,message:"El correo ya está registrado."};const r={name:e.name,email:e.email,password:e.password,id:Date.now(),role:"client"};return t.push(r),localStorage.setItem(V,JSON.stringify(t)),{success:!0,user:r}}},xe={render:()=>`
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
  `,init:()=>{const e=document.querySelector("#register-form");e?.addEventListener("submit",t=>{t.preventDefault();const r=new FormData(e),a=Object.fromEntries(r),o=ee.register(a);if(o.success){L.login(a.email,a.password),alert(`¡Cuenta creada con éxito! Bienvenido a SENA Store, ${a.name}.`);const n=sessionStorage.getItem("redirect_after_login");n?(sessionStorage.removeItem("redirect_after_login"),window.location.hash=n):window.location.hash="#/"}else alert(o.message)})}},ke=[{path:"#/",layout:P,controller:pe},{path:"#/producto/:id",layout:P,controller:he},{path:"#/login",layout:e=>`<div class="login-layout">${e}</div>`,controller:be},{path:"#/admin",layout:q,controller:J},{path:"#/admin/productos",layout:q,controller:J},{path:"#/admin/productos/nuevo",layout:q,controller:Z},{path:"#/admin/productos/editar/:id",layout:q,controller:we},{path:"#/checkout",layout:P,controller:Se},{path:"#/register",layout:P,controller:xe}],$e=(e,t)=>{const r=e.split("/"),a=t.split("/");if(r.length!==a.length)return null;const o={};return r.every((i,s)=>i.startsWith(":")?(o[i.substring(1)]=a[s],!0):i===a[s])?o:null},te=e=>{const t=window.location.hash||"#/";let r=null,a={};for(const o of ke){const n=$e(o.path,t);if(n){r=o,a=n;break}}if(r){if(t.startsWith("#/admin")&&!L.isAuthenticated()){window.location.hash="#/login";return}const o=r.controller.render(e,a);A("#app",r.layout(o)),r.controller.init&&r.controller.init(e,a)}else A("#app","<h1>404 - No encontrado</h1>")},Ee=e=>{const t=document.querySelector("#app");t.onclick=null,t.onclick=r=>{const a=r.target.closest(".btn-add");if(a){const c=a.dataset.id,p=e.find(h=>h.id==c);p&&(se(p),a.innerText="¡Añadido! ✅",setTimeout(()=>a.innerText=a.classList.contains("btn-add-large")?"🛒 Agregar al Carrito":"Agregar",1e3));return}const o=r.target.closest(".btn-qty");if(o){const c=parseInt(o.dataset.id),p=parseInt(o.dataset.change);F(c,p);return}const n=r.target.closest(".btn-remove-all");if(n){const c=parseInt(n.dataset.id);F(c,-1/0);return}if(r.target.closest(".cart-icon-container")){const c=document.querySelector("#cart-modal"),p=document.querySelector("#cart-overlay");c.classList.add("open"),p.classList.add("show"),Y();return}if(r.target.id==="close-cart"||r.target.id==="cart-overlay"){document.querySelector("#cart-modal").classList.remove("open"),document.querySelector("#cart-overlay").classList.remove("show");return}const i=r.target.closest(".btn-remove");if(i){ce(i.dataset.index);return}if(r.target.closest("#btn-logout")||r.target.closest("#btn-logout-admin")){confirm("¿Estás seguro de que deseas salir del panel administrativo?")&&(L.logout(),window.location.hash="#/",window.location.reload());return}r.target.id==="btn-scroll-top"&&window.scrollTo({top:0,behavior:"smooth"})},t.addEventListener("input",r=>{if(r.target.id==="product-search"){const a=r.target.value.toLowerCase(),o=e.filter(n=>n.name.toLowerCase().includes(a));A("#product-container",z(o))}}),t.onsubmit=r=>{if(r.target.id==="product-form"){r.preventDefault();const a=new FormData(r.target),o={id:e.length+1,name:a.get("name"),price:parseFloat(a.get("price")),image:a.get("image"),category:a.get("category")};e.push(o),alert("¡Producto creado con éxito!"),window.location.hash="#/admin/productos"}},window.addEventListener("scroll",()=>{const r=document.querySelector("#btn-scroll-top");r&&(window.scrollY>300?r.classList.add("show"):r.classList.remove("show"))})},Le=async()=>{const e=await K.getAll(),t=()=>{te(e),Ee(e),window.scrollTo(0,0)};window.addEventListener("hashchange",t),t()};Le();

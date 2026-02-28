(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const L=async()=>{try{return(await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")).json()).map(a=>({id:a.id,name:a.title.slice(0,20),price:Math.floor(Math.random()*100)+10,image:`https://picsum.photos/seed/${a.id}/300/200`}))}catch(t){return console.error("Error cargando productos:",t),[]}},b=t=>`
  <article class="product-card" data-id="${t.id}">
    <img src="${t.image}" alt="${t.name}" class="product-image">
    <div class="product-info">
      <h2 class="product-title">${t.name}</h2>
      <p class="product-price">$${t.price}</p>
    </div>
    <button class="btn-add">Agregar al carrito</button>
  </article>
`,h=t=>t.length===0?"<p>Cargando productos...</p>":`
    <section class="product-grid">
      ${t.map(r=>b(r)).join("")}
    </section>
  `,C=()=>`
    <div class="filter-container">
      <input 
        type="text" 
        id="product-search" 
        placeholder="Buscar productos por nombre..."
        class="search-input"
      />
    </div>
  `,S=(t=0)=>`
  <div class="cart-icon-container">
    <span class="cart-icon">🛒</span>
    <span id="cart-count" class="cart-badge">${t}</span>
  </div>
`,$=(t=0)=>`
    <header class="main-header">
      <div class="header-container">
        <div class="logo">
          <h1>ACA</h1>
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
          </ul>
        </nav>
        <div id="cart-wrapper">
          ${S(t)}
        </div>
      </div>
    </header>
  `,w=t=>{const r=new Date().getFullYear();return`
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
          <p>&copy; ${r} - ACA</p>
        </div>
      </div>
    </footer>
  `},E=()=>`
    <button id="btn-scroll-top" class="btn-scroll-top" title="Volver arriba">
      ↑
    </button>
  `,I=t=>{const r=JSON.parse(localStorage.getItem("sena-cart"))||[];r.push(t),localStorage.setItem("sena-cart",JSON.stringify(r)),g()},g=()=>{const t=document.querySelector("#cart-count");if(t){const r=JSON.parse(localStorage.getItem("sena-cart"))?.length||0;t.textContent=r,t.classList.add("pulse"),setTimeout(()=>t.classList.remove("pulse"),300)}},v=()=>{const t=document.querySelector("#cart-items-container"),r=document.querySelector("#cart-total-amount"),a=JSON.parse(localStorage.getItem("sena-cart"))||[];if(a.length===0){t.innerHTML='<p class="empty-msg">El carrito está vacío</p>',r.textContent="$0";return}t.innerHTML=a.map((e,o)=>`
    <div class="cart-item">
      <img src="${e.image}" alt="${e.name}">
      <div class="cart-item-info">
        <h4>${e.name}</h4>
        <p>$${e.price}</p>
      </div>
      <button class="btn-remove" data-index="${o}">🗑️</button>
    </div>
  `).join("");const c=a.reduce((e,o)=>e+o.price,0);r.textContent=`$${c}`},O=t=>{const r=JSON.parse(localStorage.getItem("sena-cart"))||[];r.splice(t,1),localStorage.setItem("sena-cart",JSON.stringify(r)),g(),v()},q=()=>(JSON.parse(localStorage.getItem("sena-cart"))||[]).length,M=()=>`
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
            <span id="cart-total-amount">$0</span>
          </div>
          <button class="btn-checkout">Continuar al pago</button>
        </footer>
      </div>
    </div>
  `,m=document.querySelector("#app");let d=[];const T=async()=>{m.innerHTML='<div id="loader">Cargando catálogo...</div>',d=await L();const t=q();m.innerHTML=`
    ${$(t)}
    <main>
      ${C()} 
      <div id="product-container">
        ${h(d)}
      </div>
    </main>
    ${w()}
    ${E()}
  `,m.innerHTML+=M(),N()},N=()=>{const t=document.querySelector("#product-search"),r=document.querySelector("#product-container"),a=document.querySelector("#btn-scroll-top"),c=document.querySelector(".cart-icon-container"),e=document.querySelector("#cart-modal"),o=document.querySelector("#close-cart"),n=document.querySelector("#cart-items-container"),u=document.querySelector("#cart-overlay"),y=()=>{e.classList.add("open"),u.classList.add("show"),document.body.style.overflow="hidden",v()},f=()=>{e.classList.remove("open"),u.classList.remove("show"),document.body.style.overflow="auto"};c?.addEventListener("click",y),o?.addEventListener("click",f),u?.addEventListener("click",f),c?.addEventListener("click",()=>{e.classList.add("open"),v()}),n?.addEventListener("click",s=>{if(s.target.classList.contains("btn-remove")){const i=s.target.dataset.index;O(i)}}),t&&t.addEventListener("input",s=>{const i=s.target.value.toLowerCase(),l=d.filter(p=>p.name.toLowerCase().includes(i));r.innerHTML=h(l)}),r.addEventListener("click",s=>{if(s.target.classList.contains("btn-add")){const i=s.target.closest(".product-card").dataset.id,l=d.find(p=>p.id==i);l&&I(l)}}),window.addEventListener("scroll",()=>{window.scrollY>300?a?.classList.add("show"):a?.classList.remove("show")}),a?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})};T();

(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const n=()=>`
    <div class="filter-container">
      <input 
        type="text" 
        id="product-search" 
        placeholder="Buscar productos por nombre..."
        class="search-input"
      />
    </div>
  `,a=(t=0)=>`
  <div class="cart-icon-container">
    <span class="cart-icon">🛒</span>
    <span id="cart-count" class="cart-badge">${t}</span>
  </div>
`,l=(t=0)=>`
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
          ${a(t)}
        </div>
      </div>
    </header>
  `,d=t=>{const o=new Date().getFullYear();return`
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
          <p>&copy; ${o} - ACA</p>
        </div>
      </div>
    </footer>
  `},u=()=>`
    <button id="btn-scroll-top" class="btn-scroll-top" title="Volver arriba">
      ↑
    </button>
  `,p=document.querySelector("#app"),f=async()=>{p.innerHTML=`
    ${l()}
    <main>
      ${n()} 
      <div id="product-container">
      </div>
    </main>
    ${d("ACA")}
    ${u()}
  `};f();

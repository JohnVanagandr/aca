export const ProductDetail = (product) => {
  if (!product) {
    return `
      <div class="product-detail-container">
        <h2>Producto no encontrado</h2>
        <a href="#/" class="back-link">← Volver a la tienda</a>
      </div>
    `;
  }

  return `
    <div class="product-detail-container fade-in">
      <a href="#/" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Volver a la tienda</span>
      </a>

      <article class="detail-grid">
        <div class="detail-img-wrapper">
          <img src="${product.image}" alt="${product.name}" class="detail-img">
        </div>

        <div class="detail-info">
          <span class="stock-badge">Stock Disponible</span>
          <h1>${product.name}</h1>
          <p class="detail-price">$${product.price.toLocaleString()}</p>
          
          <p class="detail-desc">
            Optimiza tus proyectos con este producto de alta fidelidad. 
            Diseñado especialmente para aprendices que buscan calidad y durabilidad 
            en cada pieza de hardware o software.
          </p>
          <button class="btn-add-large btn-add" data-id="${product.id}">
            🛒 Agregar al Carrito
          </button>
        </div>
      </article>
    </div>
  `;
};
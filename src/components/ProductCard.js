export const ProductCard = (product) => `
  <article class="product-card" data-id="${product.id}">
    <a href="#/producto/${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image">
    </a>
    <div class="product-info">
      <h2 class="product-title">
        <a href="#/producto/${product.id}">${product.name}</a>
      </h2>
      <p class="product-price">$${product.price}</p>
    </div>
    <button class="btn-add" data-id="${product.id}">Agregar al carrito</button>
  </article>
`;
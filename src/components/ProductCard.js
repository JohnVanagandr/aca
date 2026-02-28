export const ProductCard = (product) => `
  <article class="product-card" data-id="${product.id}">
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
      <h2 class="product-title">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
    </div>
    <button class="btn-add">Agregar al carrito</button>
  </article>
`;

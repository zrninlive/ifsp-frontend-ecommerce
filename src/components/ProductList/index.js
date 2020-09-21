import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import { useProducts } from '../../hooks/products';

import { Container } from './styles';

export default function ProductList({ products, overflow = false }) {
  const { addToCart, storeProducts } = useProducts();

  const { cart } = storeProducts;

  const amount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.quantity;
    return sumAmount;
  }, {});

  function handleAddProduct(id, quantity) {
    addToCart({ product_id: id, quantity });
  }

  return (
    <Container overflow={overflow}>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
          </Link>
          {}
          {product.quantity ? (
            <button
              type="button"
              onClick={() =>
                handleAddProduct(product.id, amount[product.id] + 1 || 1)
              }
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          ) : (
            <h3>Produto Indisponível</h3>
          )}
        </li>
      ))}
    </Container>
  );
}
